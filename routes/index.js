const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/auth');

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

// router.get('/register', (req, res) => res.render('register'));
// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    name: req.user.name,
  }),
);

module.exports = router;
