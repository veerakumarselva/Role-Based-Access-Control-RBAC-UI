
const express = require('express');
const { requireAuth } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', requireAuth('Admin'), (req, res) => {
    res.status(200).json({ message: 'Welcome, Admin!' });
});

router.get('/profile', requireAuth(), (req, res) => {
    res.status(200).json({ message: `Welcome, ${req.user.username}` });
});

module.exports = router;
