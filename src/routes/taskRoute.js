import express from "express";

import { createTask,getTasks,updateTask, deleteTask,getTasksByDuration,} from "../controllers/taskController";
import fileUpload from "../helper/multer";

const taskRoute = express.Router();

taskRoute.post("/task/create",fileUpload.single("taskName"),createTask);
taskRoute.get("/view/all/tasks",getTasks);
taskRoute.put("/update/task/:id", fileUpload.single("taskName"),updateTask);
taskRoute.delete("/delete/task/:id",deleteTask);
taskRoute.get("/view/tasks/:taskDuration", getTasksByDuration);


export default taskRoute;