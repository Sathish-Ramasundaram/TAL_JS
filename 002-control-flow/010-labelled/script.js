const teachers = [
  {
    name: "Sathish",
    subject: "Computer Science",
    attendance: true,
    tasks: ["HTML", "JS", "CSS"]
  },
  {
    name: "Ravi",
    subject: "Social",
    attendance: false,
    tasks: ["History of India", "About Gandhi"]
  },
  {
    name: "Anu",
    subject: "PET",
    attendance: true,
    tasks: ["Exercise", "Play Cricket"]
  },
  {
    name: "John",
    subject: "Math",
    attendance: true,
    tasks: ["Arithmetic", "Algebra"]
  }
];

function processTasks() {
  const output = document.getElementById("output");
  output.innerHTML = "";

  outerLoop:
  for (let i = 0; i < teachers.length; i++) {

    // Skip absent teachers
    if (!teachers[i].attendance) {
      continue outerLoop;
    }

    for (let j = 0; j < teachers[i].tasks.length; j++) {
      const li = document.createElement("li");
      li.textContent =
        teachers[i].name + " → " + teachers[i].tasks[j];
      output.appendChild(li);
    }
  }
}
