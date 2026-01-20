function checkTypes() {
  const name = "Sathish";
  const age = 31;
  const isLoggedIn = true;
  const skills = ["JS", "React"];
  const profile = { role: "Developer" };
  const sayHi = function () {};
  let score;
  const empty = null;

  const result = `
name        : ${typeof name}
age         : ${typeof age}
isLoggedIn  : ${typeof isLoggedIn}
skills     : ${typeof skills}
profile    : ${typeof profile}
sayHi      : ${typeof sayHi}
score      : ${typeof score}
empty      : ${typeof empty}
  `;

  document.getElementById("output").textContent = result;
}
