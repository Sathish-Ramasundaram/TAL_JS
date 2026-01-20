const output = document.getElementById("output");

/* =====================
   IMMUTABLE (Primitive)
===================== */
function immutableExample() {
  let originalName = "JS";
  let newName = name;

  newName = "JavaScript";

  output.textContent = `
IMMUTABLE (Primitive)
--------------------
originalName     = ${originalName}
newName  = ${newName}

Original value is NOT changed
`;
}

/* =====================
   MUTABLE (Object)
===================== */
function mutableExample() {
  const page1 = { title: "JS" };
  const page2 = page1;

  page2.title = "JavaScript";

  output.textContent = `
MUTABLE (Object)
----------------
page1.title = ${page1.title}
page2.title = ${page2.title}

Original object Is changed from JS to JavaScript.
`;
}
