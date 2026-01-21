const teachers = [
  {
    name: "Sathish",
    subject: "Computer Science",
    attendance: true,
    tasks: ["HTML", "JS"]
  },
  {
    name: "Ravi",
    subject: "Social",
    attendance: false, // ❌ absent teacher
    tasks: ["History", "Civics"]
  },
  {
    name: "Anu",
    subject: "PET",
    attendance: true,
    tasks: ["Exercise", "Cricket"]
  }
];

function processTasks() {
  const output = document.getElementById("output");
  output.innerHTML = "";

  teachersLoop:
  for (let i = 0; i < teachers.length; i++) {

    // 🔴 If any teacher is absent, stop everything
    if (!teachers[i].attendance) {
      const li = document.createElement("li");
      li.textContent =
        "Class stopped. " + teachers[i].name + " is absent.";
      output.appendChild(li);
      break teachersLoop; // 🔑 break label
    }

    // Process tasks only if teacher is present
    for (let j = 0; j < teachers[i].tasks.length; j++) {
      const li = document.createElement("li");
      li.textContent =
        teachers[i].name + " → " + teachers[i].tasks[j];
      output.appendChild(li);
    }
  }
}
