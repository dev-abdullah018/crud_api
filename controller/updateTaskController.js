const Task = require("../models/taskModel");

const updateTaskController = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  const newTask = {
    title: title,
    description: description,
    userId: req.userId,
  };

  try {
    await Task.findByIdAndUpdate(id, newTask, { new: true });
    res.status(200).json(newTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = updateTaskController;
