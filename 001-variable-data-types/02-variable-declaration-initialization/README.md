### (Variable Declaration vs Initialization)

### 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dictionary - Declaration vs Initialization</title>
</head>
<body>

  <h2>Mini Dictionary</h2>

  <input type="text" id="wordInput" placeholder="Enter a word">
  <button onclick="findMeaning()">Find Meaning</button>

  <p id="result"></p>

  <script src="script.js"></script>
</body>
</html>
```

---

### 📄 `script.js`

```js
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
```

---

## 🔍 How this demonstrates the concept

### ✅ Declaration

```js
let word;
let meaning;
```

* Variables are **created**
* No values yet

---

### ✅ Initialization

```js
word = document.getElementById("wordInput").value;
meaning = dictionary[word];
```

* Values are assigned **for the first time**

---

### ✅ Declaration + Initialization together

```js
const dictionary = { ... };
```

* Happens in one line

---

## 🧠 One-line takeaway (remember this)

> **Declaration creates the variable.
> Initialization gives it its first value.**

---
