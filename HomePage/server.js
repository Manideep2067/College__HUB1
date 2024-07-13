const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let students = [
    { id: 1, name: 'John Doe', course: 'Computer Science' },
    { id: 2, name: 'Jane Smith', course: 'Mathematics' }
];

app.get('/api/students', (req, res) => {
    res.json(students);
});

app.post('/api/students', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
