import taskTable from "../models/taskModel";

export const createTask = async (req, res) =>{
    try {
        const {taskName, taskDuration} = req.body;
        if(!taskName || !taskDuration){
            return res.status(400).json({
                status: "400",
                message: "All fields are required",
            });
        }
        const checkTaskName = await taskTable.findOne({taskName});
        if(checkTaskName){
            return res.status(400).json({
                status: "400",
                message: "Task name already exist in task list",
            });
        }
        
        const addTask = await taskTable.create({
            taskName,
            taskDuration,
        });
        return res.status(201).json({
            status: "201",
            message: "Your task added",
            data: addTask,
        });
        
    } catch (error) {
        return res.status(500).json({
            status: "500",
            message: "Failed to add task",
            error: error.message,
        });

    }
};

export const getTasks = async (req, res) =>{
    try {
        const displayedTasks = await taskTable.find();

        return res.status(201).json({
            status: "201",
            message: "Tasks retrieved",
            data: displayedTasks,
        });
    } catch (error) {
        return res.statusO(500).json({
            status: "500",
            message: "Failed to retrieve tasks",
            error: error.message,
        });
        
    }
};

export const updateTask = async (req, res) =>{
    try {
        const {id} =req.params;
        const {taskName, taskDuration} = req.body;
        const checkTaskId = await taskTable.findById(id);
        if(!checkTaskId)
            return res.status(404).json({
                status: "404",
                message: "Task not found",
            });
        
        const checkTaskName = await taskTable.findOne({
            taskName: req.body.taskName,
         });
         if(checkTaskName){
           if(checkTaskName._id != id){
            return res.status(500).json({
              status: "500",
              message: "Task name exist in database",
            });
           }
         }
        
            const updatedTask = await taskTable.findByIdAndUpdate(id,{
                taskName,
                taskDuration,
            });
            return res.status(201).json({
                status: "201",
                message: "Task updated successfully",
                data: updatedTask,
            })
        
        
    } catch (error) {
        return res.status(500).json({
            status: "500",
            message: "Failed to update task",
            error: error.message,
        });
        
    }
}

export const deleteTask = async (req, res) =>{
    try {
      const {id} = req.params;
      const findTask = await taskTable.findById(id);
      if (!findTask) {
        return res.status(404).json({
          status: "404",
          message: "Task not found",
        });
      };
      const deletedTask= await taskTable.findByIdAndDelete(id);
  
      return res.status(200).json({
        status: "200",
        message: "Task deleted successfully",
        data: deletedTask,
      });
    } catch (error) {
      return res.status(500).json({
        status: "500",
        message: "Error occurred",
        error: error.message,
      });
    }
  };

  // find tasks based on duration
  export const getTasksByDuration = async (req, res) => {
    const { taskDuration } = req.params;
  
    try {
      const tasks = await taskTable.find({ taskDuration });
  
      if (tasks.length === 0) {
        return res.status(404).json({
          status: "404",
          message: "No tasks for" + " "+taskDuration +" "+"found!!",
        });
      }
  
      return res.status(200).json({
        status: "200",
        message: "Tasks retrieved are" + " "+ taskDuration + " "+"tasks",
        data: tasks,
      });
    } catch (error) {
      return res.status(500).json({
        status: "500",
        message: "Failed to retrieve tasks by task duration",
        error: error.message,
      });
    }
  };
  