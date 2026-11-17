# API Documentation

공통 API 명세서

## 1. 개요

- Base URL: 환경별로 설정
- API Base Path: `/api`
- API Version: v1
- Data Format: JSON
- Character Encoding: UTF-8

## 2. API 목록

### Authentication

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/api/auth/signup` | 회원가입 | X |
| POST | `/api/auth/login` | 로그인 | X |
| POST | `/api/auth/logout` | 로그아웃 | O |
| POST | `/api/auth/refresh` | 토큰 재발급 | O |

상세 명세: [auth.md](./auth.md)

## 3. 공통 규칙

공통 응답 및 에러 규칙은 [common.md](./common.md)를 참고한다.