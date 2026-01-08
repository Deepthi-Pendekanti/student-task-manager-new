const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// temporary in-memory storage
let tasks = [];

// get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// add a new task
app.post("/tasks", (req, res) => {
  tasks.push(req.body);
  res.json({ message: "Task added", tasks });
});

// start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
