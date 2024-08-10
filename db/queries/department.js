// queries/department.js
const pool = require('../db');

const getAllDepartments = async () => {
  const query = 'SELECT * FROM department';
  const { rows } = await pool.query(query);
  return rows;
};

const addDepartment = async (name) => {
  const query = 'INSERT INTO department (name) VALUES ($1) RETURNING *';
  const values = [name];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

module.exports = {
  getAllDepartments,
  addDepartment,
};
