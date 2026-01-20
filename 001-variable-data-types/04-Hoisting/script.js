/* ===============================
   HOISTING DEMO – MINI DICTIONARY
   =============================== */



/* ---- Global variable hoisting ---- */
console.log(dictionary); // undefined (var hoisting)

/* ---- Dictionary data ---- */
var dictionary = {
  apple: "A fruit",
  book: "Something to read",
  pen: "A writing tool"
};

// const dictionary = {
//   apple: "A fruit",
//   book: "Something to read",
//   pen: "A writing tool"
// };  ---> This can be demoed for TDZ

/* ---- Function hoisting ---- */
/* This works even though the function is written below */
searchWord();

/* ---- Function declaration ---- */
function searchWord() {
  console.log("Dictionary ready to search");
}


/* ---- Let hoisting (TDZ) ---- */
try {
  console.log(word); // ❌ TDZ error
} catch (e) {
  console.log("Error:", e.message);
}

let word = "apple";

/* ---- Using initialized value ---- */
console.log("Meaning:", dictionary[word]);
