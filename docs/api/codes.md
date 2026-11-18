# API Response Codes

API 응답에 사용하는 공통 성공 및 에러 코드를 정의합니다.

## 1. Success Codes

| Code | HTTP Status | Description |
|---|---:|---|
| SUCCESS | 200 | 요청 성공 |
| CREATED | 201 | 리소스 생성 성공 |
| UPDATED | 200 | 리소스 수정 성공 |
| DELETED | 200 | 리소스 삭제 성공 |
| LOGIN_SUCCESS | 200 | 로그인 성공 |
| LOGOUT_SUCCESS | 200 | 로그아웃 성공 |
| TOKEN_REFRESHED | 200 | 토큰 재발급 성공 |

## 2. Error Codes

### 2.1 Common

| Code | HTTP Status | Description |
|---|---:|---|
| INVALID_REQUEST | 400 | 잘못된 요청 |
| UNAUTHORIZED | 401 | 인증 실패 |
| FORBIDDEN | 403 | 접근 권한 없음 |
| NOT_FOUND | 404 | 리소스 없음 |
| CONFLICT | 409 | 데이터 충돌 |
| VALIDATION_ERROR | 422 | 유효성 검사 실패 |
| INTERNAL_SERVER_ERROR | 500 | 서버 내부 오류 |

### 2.2 Authentication

| Code | HTTP Status | Description |
|---|---:|---|
| INVALID_CREDENTIALS | 401 | 로그인 정보 불일치 |
| TOKEN_EXPIRED | 401 | 토큰 만료 |
| INVALID_TOKEN | 401 | 유효하지 않은 토큰 |
| INVALID_REFRESH_TOKEN | 401 | 유효하지 않은 Refresh Token |

### 2.3 Users

| Code | HTTP Status | Description |
|---|---:|---|
| USER_NOT_FOUND | 404 | 회원 정보 없음 |
| DUPLICATE_EMAIL | 409 | 이미 사용 중인 이메일 |

## 3. Response Example

### 3.1 Success

```json
{
  "success": true,
  "code": "LOGIN_SUCCESS",
  "message": "로그인에 성공했습니다.",
  "data": {}
}
```

### 3.2 Error

```json
{
  "success": false,
  "code": "INVALID_CREDENTIALS",
  "message": "이메일 또는 비밀번호가 올바르지 않습니다.",
  "data": null
}
```

## 4. Notes

- HTTP Status와 Response Code는 구분하여 관리합니다.
- 성공 및 에러 코드는 Java와 Node 백엔드에서 동일하게 사용합니다.
- `204 No Content`는 응답 Body 없이 HTTP Status로만 처리합니다.
- 새로운 코드는 기존 코드와 중복되지 않도록 추가합니다.

---

**Last Updated:** 2026-11-17