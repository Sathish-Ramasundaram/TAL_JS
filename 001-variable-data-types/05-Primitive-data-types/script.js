/* ===============================
   PRIMITIVE DATA TYPES DEMO
   =============================== */

/* string */
const appTitle = "Mini Dictionary - Primitive Data Types Demo";
document.getElementById("appTitle").innerHTML = appTitle;

/* object (dictionary values are strings → primitives) */
const dictionary = {
  apple: "A fruit",
  book: "Something to read",
  pen: "A writing tool"
};

/* number */
let searchCount = 0;

/* null */
let SearchedWord = null;

/* undefined */
let meaning;

/* boolean */
let found;


/* symbol */
const appId = Symbol("dictionaryId");

/* bigint */
const maxSearchLimit = 9007199254740991n;

/* =============================== */

function searchWord() {

    searchCount++;
    document.getElementById("search-count").innerHTML = "Search Count: " + searchCount;

    const input = document.getElementById("wordInput").value.toLowerCase();

    SearchedWord = input;
    document.getElementById("searchWord").innerHTML = SearchedWord

    if (dictionary[input]) {
    meaning = dictionary[input]; // string
    found = true;
    document.getElementById("result").textContent =
      "Meaning: " + meaning;
  } else {
    meaning = undefined;
    found = false;
    document.getElementById("result").textContent =
      "Word not found";
  }

  /* ----- Console output for learning ----- */
  
  console.log("App Title (string):", appTitle, typeof appTitle);
  console.log("Search Count (number):", searchCount, typeof searchCount);
  console.log("Found (boolean):", found, typeof found);
  console.log("Last Searched (null check):", SearchedWord, typeof SearchedWord);
  console.log("Meaning (undefined if not found):", meaning, typeof meaning);
  console.log("App ID (symbol):", appId, typeof appId);
  console.log("Max Limit (bigint):", maxSearchLimit, typeof maxSearchLimit);

  console.log("-------------------------------");
}
