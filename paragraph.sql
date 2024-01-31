USE blog;

DROP TABLE IF EXISTS paragraph;
CREATE TABLE IF NOT EXISTS paragraph (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    detail TEXT NOT NULL,
    dt DATE DEFAULT (CURDATE()) -- in java date will be added automatically when JPA query loads
);
