# Common API Specification

모든 백엔드와 프론트엔드에서 공통으로 사용하는 API 통신 규칙입니다.

## 1. 기본 규칙

| 항목 | 규칙 |
|---|---|
| Data Format | JSON |
| Character Encoding | UTF-8 |
| Content-Type | application/json |
| Field Naming | camelCase |
| API Base Path | `/api` |

## 2. Request

### 2.1 Headers

| Key | Description |
|---|---|
| Content-Type | 요청 데이터 형식 |
| Accept | 응답 데이터 형식 |
| Authorization | 인증 토큰 |

### 2.2 Authorization

인증이 필요한 API는 JWT Access Token을 사용합니다.

```http
Authorization: Bearer {accessToken}
```

### 2.3 Parameters

| 구분 | 용도 |
|---|---|
| Path Parameter | 특정 리소스 지정 |
| Query Parameter | 검색, 필터링, 페이징 |
| Request Body | 생성 및 수정 데이터 |

## 3. Response

### 3.1 Success Response

```json
{
  "success": true,
  "code": "SUCCESS",
  "message": "요청이 완료되었습니다.",
  "data": {}
}
```

### 3.2 Error Response

```json
{
  "success": false,
  "code": "INVALID_REQUEST",
  "message": "잘못된 요청입니다.",
  "data": null
}
```

| Field | Type | Description |
|---|---|---|
| success | boolean | 성공 여부 |
| code | string | 응답 코드 |
| message | string | 응답 메시지 |
| data | object / array / null | 응답 데이터 |

응답 코드는 [codes.md](./codes.md)를 참고합니다.

## 4. HTTP Status Code

| Status | Description |
|---|---|
| 200 | 요청 성공 |
| 201 | 리소스 생성 성공 |
| 204 | 응답 본문 없음 |
| 400 | 잘못된 요청 |
| 401 | 인증 실패 |
| 403 | 접근 권한 없음 |
| 404 | 리소스 없음 |
| 409 | 데이터 충돌 |
| 422 | 유효성 검사 실패 |
| 500 | 서버 오류 |

## 5. Pagination

목록 조회 시 다음 규칙을 사용합니다.

**Request**

```http
GET /api/users?page=0&size=10
```

**Response**

```json
{
  "content": [],
  "page": 0,
  "size": 10,
  "totalElements": 100,
  "totalPages": 10
}
```

| Field | Description |
|---|---|
| content | 조회 데이터 |
| page | 현재 페이지 (0부터 시작) |
| size | 페이지당 데이터 수 |
| totalElements | 전체 데이터 수 |
| totalPages | 전체 페이지 수 |

## 6. Data Type & Date Format

| 항목 | Type | Example |
|---|---|---|
| ID | string | `"123"` |
| Boolean | boolean | `true` |
| Date | string | `"2026-11-18"` |
| DateTime | string | `"2026-11-18T10:30:00Z"` |

- ID는 문자열로 전달합니다.
- 날짜 및 시간은 ISO 8601 형식을 사용합니다.
- 시간 기준은 UTC를 사용합니다.

## 7. Notes

- 개별 API의 상세 Request / Response는 각 명세서에서 정의합니다.
- 성공 및 에러 코드는 `codes.md`에서 관리합니다.
- 인증 및 권한은 개별 API 명세서에 표시합니다.
- 파일 업로드 규칙은 해당 API 명세서에서 별도로 정의합니다.

---

**Last Updated:** 2026-11-18