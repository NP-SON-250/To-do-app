import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

import taskRoute from "./src/routes/taskRoute";

const app = express();
dotenv.config();

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DatabaseConnection)
  .then(() => {
    console.log("Database Connection Successeed");
  })
  .catch((err) => console.log(err));



//Documentation Side

const options ={
  definition: {
    openapi : '3.0.0',
    info : {
      title: 'Klab Blog API Node JS',
      version: '1.0.0'
    },
    servers:[
      {
       
        url: 'http://localhost:4400'
      }
    ],
    security: [
      {
        BearerAuth: [],
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    }
  },

  apis: ['./src/docs/*.js'], //determination of path
}
const swaggerSpec = swaggerJSDoc(options)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/uploads', express.static('uploads')); 

// Require app to use imported configurations

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use("/To/Do/API", taskRoute)


app.get("/", (req, res) => {
  res.status(200).json({
    status: "200",
    author: "Alexis Hakizimana",
    message: "Welcome To Blog API",
  });
});

const PORT = process.env.PORT || 4300;

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port:http://localhost:${PORT}`);
});







