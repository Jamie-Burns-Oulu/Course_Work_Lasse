'use strict'

var varstudentsController = require('./studentsControllerService');

module.exports.findStudents = function findStudents(req, res, next) {
  varstudentsController.findStudents(req.swagger.params, res, next);
};

module.exports.createStudents = function createStudents(req, res, next) {
  varstudentsController.createStudents(req.swagger.params, res, next);
};