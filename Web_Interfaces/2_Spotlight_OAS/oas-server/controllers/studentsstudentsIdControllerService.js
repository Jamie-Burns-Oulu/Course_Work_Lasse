'use strict'
const sarr = require("./studentsControllerService");

module.exports.funcstudentsstudentsIdPARAMETERS = function funcstudentsstudentsIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcstudentsstudentsIdPARAMETERS'
  });
};

module.exports.getStudents = function getStudents(req, res, next) {
  const findStudents = sarr.students.findIndex(x => x.id == req.studentsId.value);
  findStudents >= 0
      ? res.json(sarr.students[findStudents])
      : res.send("Record Not Found");
};

module.exports.updateStudents = function updateStudents(req, res, next) {
  const updateStudents = sarr.students.findIndex(x => x.id == req.studentsId.value);
  updateStudents >= 0
      ? ((sarr.students[updateStudents] = req.UpdatedStudent.value),
        (sarr.students[updateStudents].id = parseInt(req.studentsId.value)),
        res.send("Student Updated"))
      : res.send("Record Not Found");

};

module.exports.deleteStudents = function deleteStudents(req, res, next) {
  let finder = sarr.students.findIndex(x => x.id == req.studentsId.value);
  finder >= 0
      ? (sarr.students.splice(finder, 1), res.send("Removal Complete"))
      : res.send("Record Not Found");
};