const output = document.getElementById("output");
const PRICE = 100;

/* ❌ WRONG: relies on type coercion */
function calculateWrong() {
  const qty = document.getElementById("qty").value; // string

  const total = PRICE + qty;

  output.textContent = `
WRONG CALCULATION
-----------------
Quantity (type): ${typeof qty}
Price (type)   : ${typeof PRICE}
Result         : ${total}

Why?
"+" converted number to string

  const qty = document.getElementById("qty").value; // string
  const total = PRICE + qty;
`;
}

/* ✅ CORRECT: explicit conversion */
function calculateCorrect() {
  const qty = Number(document.getElementById("qty").value); // number

  const total = PRICE + qty;

  output.textContent = `
CORRECT CALCULATION
-------------------
Quantity (type): ${typeof qty}
Price (type)   : ${typeof PRICE}
Result         : ${total}

const qty = Number(document.getElementById("qty").value); // number

No type coercion bug
`;
}
