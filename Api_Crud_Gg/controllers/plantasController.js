const pool = require('../config/db');

exports.getAllPlantas = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM plantas');
  res.json(rows);
};

exports.createPlanta = async (req, res) => {
  const { name, description } = req.body;
  const [result] = await pool.query('INSERT INTO plantas (name, description) VALUES (?, ?)', [name, description]);
  res.json({ id: result.insertId });
};

exports.getPlantaById = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query('SELECT * FROM plantas WHERE id = ?', [id]);
  res.json(rows[0]);
};

exports.updatePlanta = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  await pool.query('UPDATE plantas SET name = ?, description = ? WHERE id = ?', [name, description, id]);
  res.sendStatus(200);
};

exports.deletePlanta = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM plantas WHERE id = ?', [id]);
  res.sendStatus(200);
};
