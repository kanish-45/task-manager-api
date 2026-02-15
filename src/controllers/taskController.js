let tasks = [];

exports.getTasks = (req, res) => {
  res.json(tasks);
};

exports.createTask = (req, res) => {
  const { title, description } = req.body;


  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = { id: Date.now(), title, description };

  tasks.push(newTask);

  res.status(201).json(newTask);
};
