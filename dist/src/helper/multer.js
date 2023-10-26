"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
var fileUpload = (0, _multer["default"])({
  storage: _multer["default"].diskStorage({}),
  fileFilter: function fileFilter(req, file, cb) {
    var ext = _path["default"].extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg" && ext !== ".gif" && ext !== ".tif" && ext !== ".webp" && ext !== ".bmp" && ext !== ".tiff") {
      return cb(new Error("Invalid file type"), false);
    }
    cb(null, true);
  }
});
var _default = exports["default"] = fileUpload;
//# sourceMappingURL=multer.js.map