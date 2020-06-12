require("dotenv").config();
const jwt = require("jsonwebtoken");
const { whitelist } = require('../whitelist.json')

function restricted(req, res, next) {
  const token = req.headers.authorization;

  if (!token) return res.status(400).json({ error: "No Token" });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid Token" });
  }
}

function bodycheck(req, res, next) {
  if (!req.body || !req.body.username || !req.body.password) {
    res.status(400).json({ error: "Missing required information." });
  } else if (whitelist.includes(req.body.username)) {
    next();
  } else {
    res.status(404).json({ error: "Send a DM to germ on the JFZ! Discord to request admin access." })
  }
}

function genToken(user) {
  if (
    !user ||
    typeof user.id === "undefined" ||
    typeof user.username === "undefined"
  ) {
    new error("username and id needed");
  }
  const payload = {
    uid: user.id,
    username: user.username,
  };
  const secret = process.env.TOKEN_SECRET;
  const options = {
    expiresIn: process.env.TOKEN_LIFE || "18h",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = {
  restricted,
  bodycheck,
  genToken,
};
