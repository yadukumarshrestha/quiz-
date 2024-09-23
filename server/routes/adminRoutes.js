 
// server/routes/adminRoutes.js
const express = require('express');
const { addQuestion, getQuestions, deleteQuestion } = require('../controller/adminController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authenticate); // Protect all routes

router.post('/questions', addQuestion);
router.get('/questions', getQuestions);
router.delete('/questions/:id', deleteQuestion);

module.exports = router;
