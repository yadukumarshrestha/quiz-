 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the public directory

// In-memory storage for questions (use a database in production)
let questions = [];

// Admin user for authentication (replace with a secure method)
const adminUser = { username: 'admin', password: 'password' };

// Login endpoint
app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body;
    if (username === adminUser.username && password === adminUser.password) {
        res.status(200).send({ message: 'Login successful' });
    } else {
        res.status(401).send({ message: 'Invalid credentials' });
    }
});

// Get all questions
app.get('/api/questions', (req, res) => {
    res.status(200).json(questions);
});

// Add question endpoint
app.post('/api/questions', (req, res) => {
    const { question, options, correctAnswer } = req.body;
    questions.push({ question, options, correctAnswer });
    res.status(201).send({ message: 'Question added successfully' });
});

// Delete question by index
app.delete('/api/questions/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < questions.length) {
        questions.splice(index, 1);
        res.status(200).send({ message: 'Question deleted successfully' });
    } else {
        res.status(404).send({ message: 'Question not found' });
    }
});

// Serve the client-side HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'quiz.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
