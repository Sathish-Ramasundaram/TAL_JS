const todos = [
  { task: "Wake up", completed: true },
  { task: "Study JavaScript", completed: false },
  { task: "Exercise", completed: true },
  { task: "Practice coding", completed: false }
];

// Show all available tasks
const allList = document.getElementById("allList");

for (let i = 0; i < todos.length; i++) {
  const li = document.createElement("li");
  li.textContent = todos[i].task + " ------ Completion status: " + todos[i].completed;
  allList.appendChild(li);
}

function showPending() {
  const list = document.getElementById("pendingList");
  list.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {

    // 🔑 Skip completed tasks
    if (todos[i].completed) {
      continue;
    }

    const li = document.createElement("li");
    li.textContent = todos[i].task;
    list.appendChild(li);
  }
}
