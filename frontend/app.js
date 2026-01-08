function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value;

  if (task === "") return;

  // send task to backend
  fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ task: task })
  });

  // show task in UI
  const li = document.createElement("li");
  li.innerText = task;
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}