const output = document.getElementById("output");

/* =====================
   VALUE (Primitive)
===================== */
function valueExample() {
  let a = 10;
  let b = a;

  b = 20;

  output.textContent = `
VALUE (Primitive)
-----------------
a = ${a}
b = ${b}

Changing b does NOT affect a
`;
}

/* =====================
   REFERENCE (Object)
===================== */
function referenceExample() {
  const page1 = { title: "JS." };
  const page2 = page1;

  page2.title = "JavaScript";

  output.textContent = `
REFERENCE (Object)
------------------
page1.title = ${page1.title}
page2.title = ${page2.title}

Changing page2 DOES affect page1.
`;
}
