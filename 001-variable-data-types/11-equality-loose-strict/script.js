const output = document.getElementById("output");

/* ❌ Loose Equality */
function looseEquality() {
  const a = 5;
  const b = "5";

  output.textContent = `
LOOSE EQUALITY (==)
------------------
a value : ${a}
a type  : ${typeof a}

b value : ${b}
b type  : ${typeof b}

Result  : ${a == b}

JavaScript converts "5" → 5
`;
}

/* ✅ Strict Equality */
function strictEquality() {
  const a = 5;
  const b = "5";

  output.textContent = `
STRICT EQUALITY (===)
--------------------
a value : ${a}
a type  : ${typeof a}

b value : ${b}
b type  : ${typeof b}

Result  : ${a === b}

No type conversion
`;
}
