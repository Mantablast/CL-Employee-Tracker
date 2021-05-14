INSERT INTO employee (id,first_name, last_name, role_id, manager_id)
VALUES 
  (1, "Bob", "Belcher", 1, 2),
  (2, "Linda", "Belcher", 1, 1),
  (3, "Tina", "Belcher", 2, 1),
  (4, "Louise", "Belcher", 2, 1),
  (5, "Gene", "Belcher", 3, 1);

INSERT INTO role (id, title, salary, department_id) 
VALUES
  (1, "Manager", 50000, 1),
  (2, "Waiter", 5000, 2),
  (3, "Cleaner", 5000, 3);

INSERT INTO department (id, name)
VALUES  
  (1, "Management"),
  (2, "Hospitality"),
  (3, "Sanitation");