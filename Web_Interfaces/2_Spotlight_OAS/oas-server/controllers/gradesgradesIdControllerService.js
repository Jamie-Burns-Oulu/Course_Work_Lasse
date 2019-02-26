'use strict'

const carr = require("./coursesControllerService");
const sarr = require("./studentsControllerService");
const garr = require("./gradesControllerService");


module.exports.funcgradesgradesIdPARAMETERS = function funcgradesgradesIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcgradesgradesIdPARAMETERS'
  });
};

module.exports.getGrades = function getGrades(req, res, next) {
  const findGrade = garr.grades.findIndex(x => x.id == req.gradesId.value);
  findGrade >= 0
      ? res.json(garr.grades[findGrade])
      : res.send("Record Not Found");
};

module.exports.updateGrades = function updateGrades(req, res, next) {
  const findCourse = carr.courses.findIndex(x => x.id ==  req.UpdatedGrade.value.courseId);
  const findStudent = sarr.students.findIndex(x => x.id ==  req.UpdatedGrade.value.studentId);
  const updateGrades = garr.grades.findIndex(x => x.id == req.gradesId.value);
  updateGrades >= 0 && findCourse >= 0 && findStudent >= 0
      ? ((garr.grades[updateGrades] = req.UpdatedGrade.value),
        (garr.grades[updateGrades].id = parseInt(req.gradesId.value)),
        res.send("Course Updated"))
      : res.send("Record Not Found");
};

module.exports.deleteGrades = function deleteGrades(req, res, next) {
  let finder = garr.grades.findIndex(x => x.id == req.gradesId.value);
  finder >= 0
      ? (garr.grades.splice(finder, 1), res.send("Removal Complete"))
      : res.send("Record Not Found");
};