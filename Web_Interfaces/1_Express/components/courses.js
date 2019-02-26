const express = require("express");
let router = express.Router();

let courses = [
    {
        name: "Express",
        description: "JavaScript Back-End Framework",
        id: 1
    }
];

//Create
router.post("/", (req, res) => {
    let newCourse = req.body;
    (newCourse.id = courses.length + 1), courses.push(newCourse);
    res.send("Course Added");
});

//Read
router.get("/", (req, res) => {
    res.json(courses);
});
router.get("/:id", (req, res) => {
    const findCourses = courses.findIndex(x => x.id == req.params.id);
    findCourses >= 0
        ? res.json(courses[findCourses])
        : res.send("Record Not Found");
});

//Update
router.put("/:id", (req, res) => {
    const updateCourses = courses.findIndex(x => x.id == req.params.id);
    updateCourses >= 0
        ? ((courses[updateCourses] = req.body),
          (courses[updateCourses].id = parseInt(req.params.id)),
          res.send("Course Updated"))
        : res.send("Record Not Found");
});

//Delete
router.delete("/:id", (req, res) => {
    let finder = courses.findIndex(x => x.id == req.params.id);
    finder >= 0
        ? (courses.splice(finder, 1), res.send("Removal Complete"))
        : res.send("Record Not Found");
});

module.exports = router;
module.exports.courses = courses;

// Name Name of the course

// Description Course description

// Id Unique course identifier
