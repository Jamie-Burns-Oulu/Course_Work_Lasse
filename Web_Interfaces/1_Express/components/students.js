const express = require("express");
let router = express.Router();

let students = [
    {
        name: "Pierce Brosnan",
        class: "DIN17SP",
        address: "15 Main Road, Exampleland",
        id: 1
    }
];
//Create
router.post("/", (req, res) => {
    let newStudent = req.body;
    (newStudent.id = students.length + 1), students.push(newStudent);
    res.send("Student Added");
});

//Read
router.get("/", (req, res) => {
    res.json(students);
});
router.get("/:id", (req, res) => {
    const findStudents = students.findIndex(x => x.id == req.params.id);
    findStudents >= 0
        ? res.json(students[findStudents])
        : res.send("Record Not Found");
});

//Update
router.put("/:id", (req, res) => {
    const updateStudents = students.findIndex(x => x.id == req.params.id);
    updateStudents >= 0
        ? ((students[updateStudents] = req.body),
          (students[updateStudents].id = parseInt(req.params.id)),
          res.send("Student Updated"))
        : res.send("Record Not Found");
});

//Delete
router.delete("/:id", (req, res) => {
    let finder = students.findIndex(x => x.id == req.params.id);
    finder >= 0
        ? (students.splice(finder, 1), res.send("Removal Complete"))
        : res.send("Record Not Found");
});

module.exports = router;
module.exports.students = students;

// Name Full name of the student

// Address Home address of the student

// Class Class of the student

// Id Unique student identifier
