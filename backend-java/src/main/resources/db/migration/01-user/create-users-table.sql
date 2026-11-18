-- =============================================
-- Table: users
-- Description: 사용자 계정 정보
-- =============================================

CREATE TABLE users (
    -- Primary Key
    id BIGINT AUTO_INCREMENT PRIMARY KEY,

    -- User Information
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,

    -- Email (Case-sensitive)
    email VARCHAR(255)
        CHARACTER SET utf8mb4
        COLLATE utf8mb4_0900_bin
        NOT NULL,

    birth_date DATE NOT NULL,

    -- Account Status
    status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE',

    -- Audit Timestamps (UTC)
    created_at DATETIME(6) NOT NULL,
    updated_at DATETIME(6) NOT NULL,

    -- Unique Constraints
    CONSTRAINT uk_users_username UNIQUE (username),
    CONSTRAINT uk_users_email UNIQUE (email)
);