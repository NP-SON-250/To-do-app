import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    taskName: {type: String, require: true},
    taskDuration: {type: String, require: true},

},{timestamps: true});
const taskTable = mongoose.model("tasks", taskSchema);
export default taskTable;