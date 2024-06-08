const Task = require("../models/taskModel");

const getTaskController = async (req, res) => {
  try {
    // const tasks = await Task.find({ userId: req.userId });
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getTaskController;
