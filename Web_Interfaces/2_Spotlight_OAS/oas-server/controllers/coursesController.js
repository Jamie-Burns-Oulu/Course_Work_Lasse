'use strict'

var varcoursesController = require('./coursesControllerService');

module.exports.findCourses = function findCourses(req, res, next) {
  varcoursesController.findCourses(req.swagger.params, res, next);
};

module.exports.createCourses = function createCourses(req, res, next) {
  varcoursesController.createCourses(req.swagger.params, res, next);
};