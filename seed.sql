CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  cohort_id INT
);

INSERT INTO students (name, cohort_id) VALUES
('John', 1),
('Jane', 2),
('Bob', 1),
('Alice', 3),
('Mike', 2);