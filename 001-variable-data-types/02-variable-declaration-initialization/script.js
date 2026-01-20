/* ---------------- DECLARATION ---------------- */

// Variable declaration (no value yet)
let word;
let meaning;

// Dictionary declaration + initialization
const dictionary = {
  apple: "A fruit",
  book: "Something to read",
  pen: "A writing tool"
};

/* ---------------- FUNCTION ---------------- */

function findMeaning() {

  // Initialization happens here
  word = document.getElementById("wordInput").value.toLowerCase();

  if (dictionary[word]) {
    // Initialization of 'meaning'
    meaning = dictionary[word];
  } else {
    meaning = "Word not found";
  }

  document.getElementById("result").textContent = meaning;
}
