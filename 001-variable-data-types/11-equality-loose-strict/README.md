

# `==` vs `===` (JavaScript)

## 📌 What’s the difference?

* **`==` (loose equality)**
  👉 Compares **values only**
  👉 Performs **type coercion**

* **`===` (strict equality)**
  👉 Compares **value AND type**
  👉 **No type coercion**

---

## 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>== vs ===</title>
</head>
<body>
  <h2>== vs === (JavaScript)</h2>

  <p>Compare number <b>5</b> with string <b>"5"</b></p>

  <button onclick="looseEquality()">Loose Equality (==)</button>
  <button onclick="strictEquality()">Strict Equality (===)</button>

  <pre id="output"></pre>

  <script src="script.js"></script>
</body>
</html>
```

---

## 📄 `script.js`

```js
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
```

---

## 🧪 Try this in browser

1. Click **Loose Equality (==)**
   👉 Output:

   ```
   Result : true
   ```

2. Click **Strict Equality (===)**
   👉 Output:

   ```
   Result : false
   ```

---

## 🧠 Why this happens

### `==` (Loose)

```js
5 == "5"
```

* JavaScript converts `"5"` → `5`
* Then compares `5 == 5`
* Result → `true`

---

### `===` (Strict)

```js
5 === "5"
```

* Types are different
* No conversion happens
* Result → `false`

---

## ⚠️ Dangerous Examples (real bugs)

```js
0 == false     // true
"" == 0        // true
null == undefined // true
```

These happen because of **type coercion**.

---

## ✅ Best Practice (real-world rule)

> **Always use `===` unless you explicitly want type coercion.**

Most production bugs come from `==`.

---

## 🧠 One-line summary (README-ready)

```md
`==` compares values with type coercion.
`===` compares values and types without coercion.
```

---

## 🎯 Why this matters

* Prevents login validation bugs
* Avoids incorrect condition checks
* Critical for React and backend logic

---
