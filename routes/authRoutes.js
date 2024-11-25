
const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register
router.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const user = await User.create({ username, password, role });
        res.status(201).json({ message: 'User created', user });
    } catch (err) {
        res.status(400).json({ message: 'Error creating user', error: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = generateToken(user._id);
        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).json({ message: 'Error logging in', error: err.message });
    }
});

module.exports = router;
