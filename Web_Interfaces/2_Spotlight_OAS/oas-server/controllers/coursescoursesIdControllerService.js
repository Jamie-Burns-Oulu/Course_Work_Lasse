'use strict'
const carr = require("./coursesControllerService");

module.exports.funccoursescoursesIdPARAMETERS = function funccoursescoursesIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funccoursescoursesIdPARAMETERS'
  });
};

module.exports.getCourses = function getCourses(req, res, next) {
  const findCourses = carr.courses.findIndex(x => x.id == req.coursesId.value);
    findCourses >= 0
        ? res.json(carr.courses[findCourses])
        : res.send("Record Not Found");
};

module.exports.updateCourses = function updateCourses(req, res, next) {
  const updateCourses = carr.courses.findIndex(x => x.id == req.coursesId.value);
  updateCourses >= 0
      ? ((carr.courses[updateCourses] = req.UpdatedCourse.value),
        (carr.courses[updateCourses].id = parseInt(req.coursesId.value)),
        res.send("Course Updated"))
      : res.send("Record Not Found");
};

module.exports.deleteCourses = function deleteCourses(req, res, next) {
  let finder = carr.courses.findIndex(x => x.id == req.coursesId.value);
  finder >= 0
      ? (carr.courses.splice(finder, 1), res.send("Removal Complete"))
      : res.send("Record Not Found");
};