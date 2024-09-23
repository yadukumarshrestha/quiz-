 
// server/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.authenticate = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(403).send({ message: 'No token provided' });

    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(500).send({ message: 'Failed to authenticate token' });
        req.userId = decoded.id;
        next();
    });
};
