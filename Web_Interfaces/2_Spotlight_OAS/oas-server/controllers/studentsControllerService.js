"use strict";
var validator = require('validator');

let students = [
    {
        name: "Pierce Brosnan",
        class: "DIN17SP",
        address: "15 Main Road, Exampleland",
        email: "bond007@email.com",
        id: 1
    }
];

module.exports.findStudents = function findStudents(req, res, next) {
    res.json(students);
};

module.exports.createStudents = function createStudents(req, res, next) {
    let newStudent = req.student.value;
    let email = newStudent.email;
    console.log(validator.isMobilePhone(newStudent.phone))
    if (typeof email === "string" && email.includes("@")) {
        newStudent.id = students.length + 1;
        students.push(newStudent);
        res.send("Student Added");
    } else {
        res.send("Email not valid");
    }
};

module.exports.students = students; 
