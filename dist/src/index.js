"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
var _taskRoute = _interopRequireDefault(require("./routes/taskRoute"));
var app = (0, _express["default"])();
_dotenv["default"].config();
_mongoose["default"].set("strictQuery", false);
_mongoose["default"].connect(process.env.DatabaseConnection).then(function () {
  console.log("Database Connection Successeed");
})["catch"](function (err) {
  return console.log(err);
});

//Documentation Side

var options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Klab Blog API Node JS',
      version: '1.0.0'
    },
    servers: [{
      url: 'http://localhost:4400'
    }],
    security: [{
      BearerAuth: []
    }],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ['./src/docs/*.js']
};
var swaggerSpec = (0, _swaggerJsdoc["default"])(options);
app.use('/docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(swaggerSpec));

// Require app to use imported configurations

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));

//Routes

app.use("/To/Do/API", _taskRoute["default"]);
app.get("/", function (req, res) {
  res.status(200).json({
    status: "200",
    author: "Alexis Hakizimana",
    message: "Welcome To Blog API"
  });
});
var PORT = process.env.PORT || 4300;
app.listen(process.env.PORT, function () {
  console.log("Server running on Port:http://localhost:".concat(PORT));
});
//# sourceMappingURL=index.js.map