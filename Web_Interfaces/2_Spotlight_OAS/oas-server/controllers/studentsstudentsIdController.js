'use strict'

var varstudentsstudentsIdController = require('./studentsstudentsIdControllerService');

module.exports.funcstudentsstudentsIdPARAMETERS = function funcstudentsstudentsIdPARAMETERS(req, res, next) {
  varstudentsstudentsIdController.funcstudentsstudentsIdPARAMETERS(req.swagger.params, res, next);
};

module.exports.getStudents = function getStudents(req, res, next) {
  varstudentsstudentsIdController.getStudents(req.swagger.params, res, next);
};

module.exports.updateStudents = function updateStudents(req, res, next) {
  varstudentsstudentsIdController.updateStudents(req.swagger.params, res, next);
};

module.exports.deleteStudents = function deleteStudents(req, res, next) {
  varstudentsstudentsIdController.deleteStudents(req.swagger.params, res, next);
};