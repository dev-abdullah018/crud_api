const Task = require("../models/taskModel");

const createTaskController = async (req, res) => {
  const { title, description } = req.body;

  try {
    const existingTask = await Task.findOne({
      title: title ,  description: description ,
      // $or: [{ title: title }, { description: description }],
    });

    if (existingTask) {
      return res.status(400).json({ message: "It's already exists" });
    }

  
    const newTask = new Task({
      title: title,
      description: description,
      userId: req.userId,
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = createTaskController;
