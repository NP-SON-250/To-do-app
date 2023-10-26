import express from "express";

import { createTask,getTasks,updateTask, deleteTask,getTasksByDuration,} from "../controllers/taskController";
import fileUpload from "../helper/multer";

const myRoute = express.Router();

myRoute.post("/task/create",fileUpload.single("taskName"),createTask);
myRoute.get("/view/all/tasks",getTasks);
myRoute.put("/update/task/:id", fileUpload.single("taskName"),updateTask);
myRoute.delete("/delete/task/:id",deleteTask);
myRoute.get("/view/tasks/:taskDuration", getTasksByDuration);

export default myRoute;