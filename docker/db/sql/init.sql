CREATE TABLE users (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);
INSERT INTO users (name)
VALUES ('Alice');
INSERT INTO users (name)
VALUES ('Bob');
INSERT INTO users (name)
VALUES ('Charlie');