"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _taskController = require("../controllers/taskController");
var _multer = _interopRequireDefault(require("../helper/multer"));
var myRoute = _express["default"].Router();
myRoute.post("/task/create", _multer["default"].single("taskName"), _taskController.createTask);
myRoute.get("/view/all/tasks", _taskController.getTasks);
myRoute.put("/update/task/:id", _multer["default"].single("taskName"), _taskController.updateTask);
myRoute["delete"]("/delete/task/:id", _taskController.deleteTask);
myRoute.get("/view/tasks/:taskDuration", _taskController.getTasksByDuration);
var _default = exports["default"] = myRoute;
//# sourceMappingURL=myTaskRoute.js.map