const express = require("express");
let router = express.Router();
const sarr = require("./students");
const carr = require("./courses");

let grades = [
    {
        courseId: 1,
        studentId: 1,
        grade: 5,
        id: 1
    }
];

//Create
router.post("/", (req, res) => {
    let newGrade = req.body;
    const findCourse = carr.courses.findIndex(x => x.id == req.body.courseId);
    const findStudent = sarr.students.findIndex(x => x.id == req.body.studentId);
    newGrade.id = grades.length + 1;
    findCourse >= 0 && findStudent >= 0
        ? (grades.push(newGrade), res.send("Grade Added"))
        : res.send("Record Not Found");
});

//Read
router.get("/", (req, res) => {
    res.json(grades);
});

router.get("/:id", (req, res) => {
    const findGrade = grades.findIndex(x => x.id == req.params.id);
    findGrade >= 0
        ? res.json(grades[findGrade])
        : res.send("Record Not Found");
});

//Update
router.put("/:id", (req, res) => {
    const findCourse = carr.courses.findIndex(x => x.id == req.body.courseId);
    const findStudent = sarr.students.findIndex(x => x.id == req.body.studentId);
    const updateGrades = grades.findIndex(x => x.id == req.params.id);
    updateGrades >= 0 && findCourse >= 0 && findStudent >= 0
        ? ((grades[updateGrades] = req.body),
          (grades[updateGrades].id = parseInt(req.params.id)),
          res.send("Course Updated"))
        : res.send("Record Not Found");
});

//Delete
router.delete("/:id", (req, res) => {
    let finder = grades.findIndex(x => x.id == req.params.id);
    finder >= 0
        ? (grades.splice(finder, 1), res.send("Removal Complete"))
        : res.send("Record Not Found");
});

module.exports = router;
