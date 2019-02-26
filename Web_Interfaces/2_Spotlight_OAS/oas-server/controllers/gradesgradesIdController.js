'use strict'

var vargradesgradesIdController = require('./gradesgradesIdControllerService');

module.exports.funcgradesgradesIdPARAMETERS = function funcgradesgradesIdPARAMETERS(req, res, next) {
  vargradesgradesIdController.funcgradesgradesIdPARAMETERS(req.swagger.params, res, next);
};

module.exports.getGrades = function getGrades(req, res, next) {
  vargradesgradesIdController.getGrades(req.swagger.params, res, next);
};

module.exports.updateGrades = function updateGrades(req, res, next) {
  vargradesgradesIdController.updateGrades(req.swagger.params, res, next);
};

module.exports.deleteGrades = function deleteGrades(req, res, next) {
  vargradesgradesIdController.deleteGrades(req.swagger.params, res, next);
};