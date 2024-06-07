const Task = require("../models/taskModel");

const deleteTaskController = async (req, res) => {
  const id = req.params.id;

  try {
    const task = await Task.findByIdAndDelete(id);
    res.status(202).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deleteTaskController;
