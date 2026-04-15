function addTask() {
  let input = document.getElementById("taskInput").value;
  if (input === "") return;
  let li = document.createElement("li");
  li.innerText = input;
  let btn = document.createElement("button");
  btn.innerText = "x";
  btn.onclick = function () {
    li.remove();
    saveTasks();
  };
  li.appendChild(btn);
  document.getElementById("list").appendChild(li);
  saveTasks();
  document.getElementById("taskInput").value = "";
}
function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#list li").forEach(li => {
    tasks.push(li.innerText.replace("x", ""));
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    let li = document.createElement("li");
    li.innerText = task;
    let btn = document.createElement("button");
    btn.innerText = "x";
    btn.onclick = function () {
      li.remove();
      saveTasks();
    };
    li.appendChild(btn);
    document.getElementById("list").appendChild(li);
  });
}
loadTasks();