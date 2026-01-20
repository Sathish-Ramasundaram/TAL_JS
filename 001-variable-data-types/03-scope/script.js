/* ========== GLOBAL SCOPE ========== */

// Global dictionary (accessible everywhere)
const dictionary = {
  apple: "A fruit",
  book: "Something to read",
  pen: "A writing tool"
};

// Global variable
let thank_msg = "   - Thank you for searching";

/* ========== FUNCTION SCOPE ========== */

function searchWord() {

  // Function-scoped variable
  let resultText;

  let input = document.getElementById("wordInput").value.toLowerCase();

  if (dictionary[input]) {

    /* ========== BLOCK SCOPE ========== */

    // Block-scoped variable
    let message = "Meaning found!";
    console.log(message); // ✅ works inside block

    resultText = dictionary[input] + "." + thank_msg;
  } else {
    resultText = "Word not found." + thank_msg;
  }

//   console.log(message); // ❌ Error (block scope)

  document.getElementById("result").textContent = resultText;
}

// console.log(resultText); // ❌ Error (function scope)
// console.log(dictionary); // ✅ works
