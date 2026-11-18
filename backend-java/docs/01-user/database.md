# User Database 설계

## 1. 개요

- 데이터베이스명: `design-system`
- 테이블명: `users`
- 목적: 회원가입 및 사용자 계정 정보 관리
- DBMS: MySQL 8.4
- 문자 인코딩: `utf8mb4`

## 2. 테이블 구조

### users

| 컬럼명 | 데이터 타입 | NULL | 제약조건 | 설명 |
|---|---|---|---|---|
| id | BIGINT | NO | PK, AUTO_INCREMENT | 사용자 고유 ID |
| name | VARCHAR(255) | NO | NOT NULL | 사용자 이름 |
| username | VARCHAR(255) | NO | UNIQUE | 로그인 아이디 |
| password | VARCHAR(255) | NO | NOT NULL | BCrypt 암호화 비밀번호 |
| email | VARCHAR(255) | NO | UNIQUE | 이메일 |
| birth_date | DATE | NO | NOT NULL | 생년월일 |
| status | VARCHAR(20) | NO | DEFAULT 'ACTIVE' | 계정 상태 |
| created_at | DATETIME(6) | NO | NOT NULL | 생성 일시 |
| updated_at | DATETIME(6) | NO | NOT NULL | 수정 일시 |

## 3. 제약조건

### Primary Key
- `id`를 기본키로 사용한다.
- BIGINT AUTO_INCREMENT로 자동 증가한다.

### Unique
- `username`: 중복 아이디 방지
- `email`: 중복 이메일 방지

### Not Null
- 모든 컬럼은 NULL을 허용하지 않는다.

## 4. 계정 상태

| 상태 | 설명 |
|---|---|
| ACTIVE | 정상 계정 |
| INACTIVE | 비활성 계정 |
| WITHDRAWN | 탈퇴 계정 |

탈퇴 시 데이터를 물리적으로 삭제하지 않고 상태를 WITHDRAWN으로 변경한다.

탈퇴한 계정의 username과 email은 재사용하지 않는다.

## 5. 인덱스

| 인덱스명 | 컬럼 | 유형 |
|---|---|---|
| PRIMARY | id | Primary Key |
| uk_users_username | username | Unique |
| uk_users_email | email | Unique |

## 6. 설계 정책

- username은 소문자로 정규화하여 저장한다.
- username은 대소문자를 구분하지 않는다.
- email은 대소문자를 구분한다.
- 비밀번호는 BCrypt로 암호화하여 저장한다.
- 비밀번호 원문은 저장하지 않는다.
- 생성 및 수정 일시는 UTC 기준으로 관리한다.
- 사용자 ID는 BIGINT를 사용한다.

