 
// server/controller/adminController.js
const Question = require('../models/Question');

exports.addQuestion = async (req, res) => {
    const { question, options, correctAnswer } = req.body;
    try {
        const newQuestion = new Question({ question, options, correctAnswer });
        await newQuestion.save();
        res.status(201).json({ message: 'Question added successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteQuestion = async (req, res) => {
    try {
        await Question.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Question deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
