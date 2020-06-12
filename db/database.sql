CREATE DATABASE error_report;

CREATE TABLE reports(
  id SERIAL PRIMARY KEY,
  book VARCHAR(99) NOT NULL,
  page INTEGER NOT NULL,
  revision INTEGER NOT NULL,
  typo VARCHAR(255) NOT NULL,
  suggestion VARCHAR(255) NULL,
  description VARCHAR(1024) NULL,
  verified BOOLEAN DEFAULT false,
  date_submitted TIMESTAMPTZ NOT NULL
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(99) NOT NULL,
  password VARCHAR(1024) NOT NULL
);

-- CREATE TABLE userReports(
--   user_id INTEGER(8) NOT NULL,
--   report_id INTEGER(8) NOT NULL,
--   PRIMARY KEY(`user_id`, `report_id`),
--   FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
--   FOREIGN KEY (`report_id`) REFERENCES `reports` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
-- );