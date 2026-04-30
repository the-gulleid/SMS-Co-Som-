const db = require('../config/Database');

// CREATE EMPLOYEE
exports.createEmployee = async (data) => {
  const { name, role, salary } = data;

  const [result] = await db.execute(
    'INSERT INTO employees (name, role, salary) VALUES (?, ?, ?)',
    [name, role, salary]
  );

  return result.insertId;
};

// GET ALL EMPLOYEES
exports.getEmployees = async () => {
  const [rows] = await db.execute('SELECT * FROM employees');
  return rows;
};

// GET ONE EMPLOYEE
exports.getEmployeeById = async (id) => {
  const [rows] = await db.execute(
    'SELECT * FROM employees WHERE id = ?',
    [id]
  );
  return rows[0];
};

// UPDATE EMPLOYEE
exports.updateEmployee = async (id, data) => {
  const { name, role, salary } = data;

  await db.execute(
    'UPDATE employees SET name=?, role=?, salary=? WHERE id=?',
    [name, role, salary, id]
  );
};

// DELETE EMPLOYEE
exports.deleteEmployee = async (id) => {
  await db.execute('DELETE FROM employees WHERE id=?', [id]);
};