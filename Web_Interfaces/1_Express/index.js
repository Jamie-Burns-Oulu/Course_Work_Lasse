const express = require("express");
const app = express();
const port = 8080;
const students = require('./components/students');
const courses = require('./components/courses');
const grades = require('./components/grades');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/students', students);
app.use('/courses', courses);
app.use('/grades', grades);

app.listen(port);
