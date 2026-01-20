

## 📘 var, let, const

### 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Mini Dictionary</title>
</head>
<body>

  <h2>Mini Dictionary</h2>

  <input type="text" id="wordInput" placeholder="Enter a word">
  <button onclick="searchWord()">Search</button>

  <p id="result"></p>

  <script src="script.js"></script>
</body>
</html>
```

---

### 📄 `script.js`

```js
/* ---------------- const ---------------- */
/* Dictionary data should never be reassigned */
const dictionary = {
  apple: "A fruit",
  book: "A set of written pages",
  computer: "An electronic device",
  sun: "A star at the center of the solar system"
};

/* ---------------- var ---------------- */
/* Used to store result text (can be re-assigned, function scoped) */
var resultText = "";

/* ---------------- function ---------------- */
function searchWord() {

  /* ---------------- let ---------------- */
  /* Block-scoped variable, value changes each search */
  let word = document.getElementById("wordInput").value.toLowerCase();
  let resultElement = document.getElementById("result");

  if (dictionary[word]) {
    resultText = "Meaning: " + dictionary[word];
  } else {
    resultText = "Word not found in dictionary";
  }

  resultElement.textContent = resultText;
}
```

---

## 🔍 Why each keyword is used here (IMPORTANT)

### ✅ `const` – Dictionary data

```js
const dictionary = { ... };
```

* Dictionary **should not be reassigned**
* But meanings **can be read**
* Perfect use case for `const`

---

### ✅ `let` – User input & DOM elements

```js
let word = ...
let resultElement = ...
```

* Value changes every time
* Block-scoped
* Safe and modern

---

### ✅ `var` – Result text (demo purpose)

```js
var resultText = "";
```

* Can be reassigned
* Function-scoped
* Shows why `var` still works (but not preferred)

---

## 🧠 What this teaches clearly

| Keyword | Shown concept                  |
| ------- | ------------------------------ |
| `var`   | Re-assignment, function scope  |
| `let`   | Block scope, safe variable     |
| `const` | No re-assignment, object usage |

---

## One-line takeaway (lock this in 🔒)

> **Use `const` by default, `let` when value changes, and avoid `var` unless you know exactly why you need it.**

