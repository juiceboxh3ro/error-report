const router = require("express").Router();
const pool = require('../database');
const { restricted } = require('../auth/auth-helpers');

// get all reports
router.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM reports ORDER BY book, page')
    res.status(200).json({ data: rows })
  } catch ({ message, stack }) {
    res.status(500).json({ message, stack })
  }
})

// get one report by ID
// not sure if it's useful
// router.get("/:id", async (req, res) => {
//   const { id } = req.params
//   try {
//     const { rows } = await pool.query('SELECT * FROM reports WHERE id = $1', [id])
//     res.status(200).json({ data: rows })
//   } catch ({ message, stack }) {
//     res.status(500).json({ message, stack })
//   }
// })

// get all reports by book
router.get("/:book", async (req, res) => {
  const { book } = req.params
  try {
    const { rows } = await pool.query('SELECT * FROM reports WHERE book = $1 ORDER BY page', [book])
    const verified = [], unverified = []
    rows.map(i => {
      if (i.verified === false || i.verified === null) {
        unverified.push(i)
      } else {
        verified.push(i)
      }
    })
    res.status(200).json({ data: rows, verified, unverified })
  } catch ({ message, stack }) {
    res.status(500).json({ message, stack })
  }
})

// post new report
router.post("/", async (req, res) => {
  const { book, page, revision, typo, suggestion, description, date_submitted } = req.body
  try {
    const { rows } = await pool.query('INSERT INTO reports (book, page, revision, typo, suggestion, description, date_submitted) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [book, page, revision, typo, suggestion, description, date_submitted])
    res.status(201).json({ data: rows })
  } catch ({ message, stack }) {
    res.status(500).json({ message, stack })
  }
})

// admin routes //
// edit verified
router.put("/:id", restricted, async (req, res) => {
  const { id } = req.params
  const { verified } = req.body
  try {
    const { rows } = await pool.query('UPDATE reports SET verified = $1 WHERE id = $2 RETURNING *', [verified, id])
    res.status(200).json({ data: rows })
  } catch ({ message, stack }) {
    res.status(500).json({ message, stack })
  }
})

// delete report
router.delete("/:id", restricted, async (req, res) => {
  const { id } = req.params
  try {
    await pool.query('DELETE FROM reports WHERE id = $1', [id])
    res.status(200).json({ message: "Report deleted" })
  } catch ({ message, stack }) {
    res.status(500).json({ message, stack })
  }
})

module.exports = router;