"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.getTasksByDuration = exports.getTasks = exports.deleteTask = exports.createTask = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _taskModel = _interopRequireDefault(require("../models/taskModel"));
var createTask = exports.createTask = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, taskName, taskDuration, checkTaskName, addTask;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, taskName = _req$body.taskName, taskDuration = _req$body.taskDuration;
          if (!(!taskName || !taskDuration)) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            status: "400",
            message: "All fields are required"
          }));
        case 4:
          _context.next = 6;
          return _taskModel["default"].findOne({
            taskName: taskName
          });
        case 6:
          checkTaskName = _context.sent;
          if (!checkTaskName) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            status: "400",
            message: "Task name already exist in task list"
          }));
        case 9:
          _context.next = 11;
          return _taskModel["default"].create({
            taskName: taskName,
            taskDuration: taskDuration
          });
        case 11:
          addTask = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            status: "201",
            message: "Your task added",
            data: addTask
          }));
        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            status: "500",
            message: "Failed to add task",
            error: _context.t0.message
          }));
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 15]]);
  }));
  return function createTask(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getTasks = exports.getTasks = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var displayedTasks;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _taskModel["default"].find();
        case 3:
          displayedTasks = _context2.sent;
          return _context2.abrupt("return", res.status(201).json({
            status: "201",
            message: "Tasks retrieved",
            data: displayedTasks
          }));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.statusO(500).json({
            status: "500",
            message: "Failed to retrieve tasks",
            error: _context2.t0.message
          }));
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getTasks(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateTask = exports.updateTask = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, _req$body2, taskName, taskDuration, checkTaskId, checkTaskName, updatedTask;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, taskName = _req$body2.taskName, taskDuration = _req$body2.taskDuration;
          _context3.next = 5;
          return _taskModel["default"].findById(id);
        case 5:
          checkTaskId = _context3.sent;
          if (checkTaskId) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            status: "404",
            message: "Task not found"
          }));
        case 8:
          _context3.next = 10;
          return _taskModel["default"].findOne({
            taskName: req.body.taskName
          });
        case 10:
          checkTaskName = _context3.sent;
          if (!checkTaskName) {
            _context3.next = 14;
            break;
          }
          if (!(checkTaskName._id != id)) {
            _context3.next = 14;
            break;
          }
          return _context3.abrupt("return", res.status(500).json({
            status: "500",
            message: "Task name exist in database"
          }));
        case 14:
          _context3.next = 16;
          return _taskModel["default"].findByIdAndUpdate(id, {
            taskName: taskName,
            taskDuration: taskDuration
          });
        case 16:
          updatedTask = _context3.sent;
          return _context3.abrupt("return", res.status(201).json({
            status: "201",
            message: "Task updated successfully",
            data: updatedTask
          }));
        case 20:
          _context3.prev = 20;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            status: "500",
            message: "Failed to update task",
            error: _context3.t0.message
          }));
        case 23:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 20]]);
  }));
  return function updateTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteTask = exports.deleteTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, findTask, deletedTask;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return _taskModel["default"].findById(id);
        case 4:
          findTask = _context4.sent;
          if (findTask) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            status: "404",
            message: "Task not found"
          }));
        case 7:
          ;
          _context4.next = 10;
          return _taskModel["default"].findByIdAndDelete(id);
        case 10:
          deletedTask = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            status: "200",
            message: "Task deleted successfully",
            data: deletedTask
          }));
        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            status: "500",
            message: "Error occurred",
            error: _context4.t0.message
          }));
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 14]]);
  }));
  return function deleteTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// find tasks based on duration
var getTasksByDuration = exports.getTasksByDuration = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var taskDuration, tasks;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          taskDuration = req.params.taskDuration;
          _context5.prev = 1;
          _context5.next = 4;
          return _taskModel["default"].find({
            taskDuration: taskDuration
          });
        case 4:
          tasks = _context5.sent;
          if (!(tasks.length === 0)) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            status: "404",
            message: "No tasks for" + " " + taskDuration + " " + "found!!"
          }));
        case 7:
          return _context5.abrupt("return", res.status(200).json({
            status: "200",
            message: "Tasks retrieved are" + " " + taskDuration + " " + "tasks",
            data: tasks
          }));
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](1);
          return _context5.abrupt("return", res.status(500).json({
            status: "500",
            message: "Failed to retrieve tasks by task duration",
            error: _context5.t0.message
          }));
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 10]]);
  }));
  return function getTasksByDuration(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
//# sourceMappingURL=taskController.js.map