'use strict'

var vargradesController = require('./gradesControllerService');

module.exports.findGrades = function findGrades(req, res, next) {
  vargradesController.findGrades(req.swagger.params, res, next);
};

module.exports.createGrades = function createGrades(req, res, next) {
  vargradesController.createGrades(req.swagger.params, res, next);
};