'use strict'

var varcoursescoursesIdController = require('./coursescoursesIdControllerService');

module.exports.funccoursescoursesIdPARAMETERS = function funccoursescoursesIdPARAMETERS(req, res, next) {
  varcoursescoursesIdController.funccoursescoursesIdPARAMETERS(req.swagger.params, res, next);
};

module.exports.getCourses = function getCourses(req, res, next) {
  varcoursescoursesIdController.getCourses(req.swagger.params, res, next);
};

module.exports.updateCourses = function updateCourses(req, res, next) {
  varcoursescoursesIdController.updateCourses(req.swagger.params, res, next);
};

module.exports.deleteCourses = function deleteCourses(req, res, next) {
  varcoursescoursesIdController.deleteCourses(req.swagger.params, res, next);
};