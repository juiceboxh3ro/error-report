const router = require('express').Router();

router.use('/auth', require('./auth/auth-router'));
router.use('/report', require('./reports/reports-router'));

module.exports = router;