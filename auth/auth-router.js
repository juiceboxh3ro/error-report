const router = require("express").Router();
const bcrypt = require("bcryptjs");
const pool = require('../database');
require("dotenv").config()
const { genToken, bodycheck, restricted } = require('./auth-helpers');

router.post("/register", bodycheck, async (req, res) => {
  let { username, password } = req.body;
  try {
  const exists = await pool.query('SELECT * FROM users WHERE username = $1', [username])

  if (!exists.rows[0]) {
      const rounds = process.env.HASH_ROUNDS || 12;
      password = bcrypt.hashSync(password, rounds);

      const { rows } = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password]);
      res.status(201).json({
        uid: rows[0].id,
        username: rows[0].username
      });
    } else {
      res.status(400).json({ error: "Username taken." })
    }
  } catch ({ message, stack }) {
    res.status(500).json({ message, stack })
  }
});

router.post("/login", async (req, res) => {
  let { username, password } = req.body;
  try {
    const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [username])

    if (rows[0] && bcrypt.compareSync(password, rows[0].password)) {
      const token = genToken(rows[0]);
      res.status(200).json({ message: "Welcome Home", token });
    } else {
      res.status(400).json({ error: "Bad login information" });
    }
  } catch ({ message, stack }) {
    res.status(500).json({ message, stack })
  }
});

router.delete('/deactivate', restricted, async (req, res) => {
  let { username, password } = req.body;
  try {
    const exists = await pool.query('SELECT * FROM users WHERE username = $1', [username])
    if (exists && exists.rows[0] && bcrypt.compareSync(password, exists.rows[0].password)) {
      await pool.query('DELETE FROM users WHERE username = $1', [username])
      res.status(200).json({ message: "User deleted" })
    } else {
      res.status(400).json({ error: "Bad credentials or user not found" })
    }
  } catch ({ message, stack }) {
    res.status(500).json({ message, stack })
  }
})

module.exports = router;
