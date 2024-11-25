
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const requireAuth = (roles = []) => {
    if (typeof roles === 'string') roles = [roles];

    return async (req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ message: 'Unauthorized' });

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id);
            if (!user) return res.status(401).json({ message: 'Unauthorized' });
            if (roles.length && !roles.includes(user.role)) {
                return res.status(403).json({ message: 'Forbidden' });
            }
            req.user = user;
            next();
        } catch (err) {
            res.status(401).json({ message: 'Unauthorized' });
        }
    };
};

module.exports = { requireAuth };
