# Auth

인증 및 계정 관련 기능을 담당하는 도메인입니다.

## 1. Domain Overview

사용자의 계정 생성 및 인증과 관련된 기능을 관리합니다.

### 1.1 Responsibilities

- 회원가입
- 로그인
- 로그아웃
- 아이디 찾기
- 비밀번호 변경
- 회원 탈퇴

### 1.2 Domain Structure

```text
domain/
├── auth/
│   ├── README.md
│   ├── controller/
│   ├── service/
│   └── dto/
│
└── user/
    ├── entity/
    ├── repository/
    └── service/
```

| Domain | Responsibility |
|---|---|
| auth | 회원가입 및 인증 절차 처리 |
| user | 사용자 Entity 및 사용자 데이터 관리 |

회원가입 요청과 인증 절차는 `auth`에서 처리하며, 사용자 데이터의 생성 및 저장은 `user`의 Repository를 통해 수행합니다.

---

## 2. Signup

신규 사용자의 계정을 생성하는 기능입니다.

### 2.1 API Specification

| 항목 | 내용 |
|---|---|
| Method | POST |
| Endpoint | `/api/auth/signup` |
| Description | 회원가입 |
| Content-Type | application/json |

### 2.2 Request

| Field | Type | Required | Description |
|---|---|---|---|
| name | String | Y | 이름 |
| username | String | Y | 아이디 |
| password | String | Y | 비밀번호 |
| passwordConfirm | String | Y | 비밀번호 확인 |
| email | String | Y | 이메일 |
| birthDate | LocalDate | Y | 생년월일 |

### 2.3 Validation Rules

#### Name

| 항목 | 조건 |
|---|---|
| 최소 길이 | 2자 |
| 최대 길이 | 255자 |
| 허용 문자 | 한글, 영문 대소문자 |
| 공백 | 영문 이름 사이의 공백 허용 |
| 숫자 | 불허 |
| 특수문자 | 불허 |

- 앞뒤 공백은 제거한 후 검증합니다.
- 연속된 공백은 허용하지 않습니다.

#### Username

| 항목 | 조건 |
|---|---|
| 최소 길이 | 4자 |
| 최대 길이 | 255자 |
| 허용 문자 | 영문 대소문자, 숫자 |
| 필수 조건 | 영문 최소 1자 포함 |
| 특수문자 | 불허 |
| 대소문자 | 구분하지 않음 |
| 중복 여부 | 중복 불가 |

- 아이디는 저장 전 소문자로 정규화합니다.
- `Tteul`, `tteul`, `TTEUL`은 동일한 아이디로 취급합니다.
- 숫자만으로 구성된 아이디는 허용하지 않습니다.

#### Password

| 항목 | 조건 |
|---|---|
| 최소 길이 | 8자 |
| 최대 길이 | UTF-8 기준 72바이트 |
| 영문 | 최소 1자 필수 |
| 숫자 | 최소 1자 필수 |
| 특수문자 | 허용, 필수 아님 |
| 암호화 | BCrypt |

- 비밀번호는 영문 대소문자를 구분합니다.
- 비밀번호와 비밀번호 확인 값이 일치해야 합니다.
- UTF-8 인코딩 기준 72바이트를 초과하면 거부합니다.

#### Email

| 항목 | 조건 |
|---|---|
| 형식 | 이메일 형식 준수 |
| 중복 여부 | 중복 불가 |
| 필수 여부 | 필수 |

- 이메일 인증은 현재 회원가입 범위에 포함하지 않습니다.
- 이메일 대소문자 정규화 정책은 별도 확정이 필요합니다.

#### Birth Date

| 항목 | 조건 |
|---|---|
| 타입 | LocalDate |
| 허용 범위 | 가입일 이전 날짜 |
| 오늘 날짜 | 불허 |
| 미래 날짜 | 불허 |

### 2.4 Processing Flow

1. 회원가입 요청을 수신합니다.
2. 입력값의 유효성을 검증합니다.
3. 비밀번호와 비밀번호 확인 값의 일치 여부를 검사합니다.
4. 아이디를 소문자로 정규화합니다.
5. 아이디 중복 여부를 확인합니다.
6. 이메일 중복 여부를 확인합니다.
7. 비밀번호를 BCrypt로 암호화합니다.
8. User Entity를 생성합니다.
9. UserRepository를 통해 사용자 정보를 저장합니다.
10. 회원가입 성공 응답을 반환합니다.

### 2.5 Database Design

회원 정보는 `user` 도메인에서 관리합니다.

| Column | Type | Constraint | Description |
|---|---|---|---|
| id | BIGINT | PK, AUTO_INCREMENT | 사용자 고유 식별자 |
| name | VARCHAR(255) | NOT NULL | 이름 |
| username | VARCHAR(255) | UNIQUE, NOT NULL | 아이디 |
| password | VARCHAR(255) | NOT NULL | 암호화된 비밀번호 |
| email | VARCHAR(255) | UNIQUE, NOT NULL | 이메일 |
| birth_date | DATE | NOT NULL | 생년월일 |
| status | VARCHAR(20) | NOT NULL | 계정 상태 |
| created_at | DATETIME | NOT NULL | 생성 일시 |
| updated_at | DATETIME | NOT NULL | 수정 일시 |

- 아이디와 이메일에 UNIQUE 제약조건을 적용합니다.
- 계정 상태의 기본값은 `ACTIVE`로 설정합니다.
- 비밀번호 확인 값은 DB에 저장하지 않습니다.
- `status`는 계정 상태 관리에 사용하며, 상세 상태 전이는 추후 회원 탈퇴 설계에서 확정합니다.

### 2.6 Transaction

회원가입의 DB 변경 작업은 하나의 트랜잭션으로 처리합니다.

- 사용자 정보 저장 과정에서 오류가 발생하면 트랜잭션을 롤백합니다.
- 아이디 및 이메일 중복 검사는 사전 검증으로 수행합니다.
- 동시 회원가입 요청에 따른 중복 데이터 저장은 DB UNIQUE 제약조건으로 방지합니다.
- UNIQUE 제약조건 위반 예외를 별도로 처리합니다.

### 2.7 Error Handling

| HTTP Status | Error Code | Description |
|---|---|---|
| 400 | AUTH_INVALID_INPUT | 입력값 검증 실패 |
| 400 | AUTH_PASSWORD_MISMATCH | 비밀번호 불일치 |
| 400 | AUTH_PASSWORD_TOO_LONG | 비밀번호 72바이트 초과 |
| 409 | AUTH_DUPLICATE_USERNAME | 중복 아이디 |
| 409 | AUTH_DUPLICATE_EMAIL | 중복 이메일 |
| 500 | INTERNAL_SERVER_ERROR | 서버 내부 오류 |

### 2.8 Security

- 비밀번호는 BCrypt로 암호화하여 저장합니다.
- 비밀번호 원문을 DB에 저장하지 않습니다.
- 비밀번호 확인 값은 검증 목적으로만 사용합니다.
- 아이디는 대소문자를 구분하지 않도록 정규화합니다.
- 사용자 입력값은 백엔드에서도 검증합니다.

### 2.9 Response

#### Success

HTTP Status: `201 Created`

```json
{
  "success": true,
  "data": {
    "user