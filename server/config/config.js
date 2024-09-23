 
// server/config/config.js
module.exports = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: 'mongodb://localhost:27017/study-material', // Replace with your MongoDB URI
    JWT_SECRET: 'your_jwt_secret', // Change this to a secure secret
};
