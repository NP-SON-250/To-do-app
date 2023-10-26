"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var taskSchema = new _mongoose["default"].Schema({
  taskName: {
    type: String,
    require: true
  },
  taskDuration: {
    type: String,
    require: true
  }
}, {
  timestamps: true
});
var taskTable = _mongoose["default"].model("tasks", taskSchema);
var _default = exports["default"] = taskTable;
//# sourceMappingURL=taskModel.js.map