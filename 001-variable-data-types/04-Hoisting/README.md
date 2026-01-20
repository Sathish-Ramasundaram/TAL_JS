# 📘Hoisting Demo

This project demonstrates the **basic idea of JavaScript hoisting** using a **simple mini dictionary example**.

The goal is to understand:

* What hoisting is
* How `var`, `let`, and function declarations behave
* Why `undefined` and TDZ (Temporal Dead Zone) errors occur

👉 **Check the browser console to see the output.**

---

## 📂 Project Structure

```
mini-dictionary-hoisting/
│
├── index.html
└── script.js
```

---

## 🚀 How to Run

1. Open `index.html` in any modern browser
2. Open **Developer Tools → Console**

   * Chrome: `Ctrl + Shift + J`
   * Firefox: `Ctrl + Shift + K`
3. Observe the console output step by step

---

## 🧠 What This Project Demonstrates

### 1️⃣ Hoisting with `var`

```js
console.log(dictionary);
var dictionary = { ... };
```

**Output:**

```
undefined
```

**Reason:**

* `var` declarations are hoisted
* Initialization happens later
* Default value is `undefined`

---

### 2️⃣ Function Hoisting

```js
searchWord();

function searchWord() {
  console.log("Dictionary ready to search");
}
```

**Output:**

```
Dictionary ready to search
```

**Reason:**

* Function declarations are fully hoisted
* They can be called before definition

---

### 3️⃣ Hoisting with `let` (TDZ)

```js
console.log(word);
let word = "apple";
```

**Output:**

```
ReferenceError: Cannot access 'word' before initialization
```

**Reason:**

* `let` is hoisted
* But remains in the **Temporal Dead Zone**
* Access before initialization is not allowed

---

### 4️⃣ Access After Initialization

```js
console.log("Meaning:", dictionary[word]);
```

**Output:**

```
Meaning: A fruit
```

**Reason:**

* Variable is initialized
* TDZ has ended
* Normal access is allowed

---

## 🔍 Key Concepts Covered

| Concept             | Demonstrated |
| ------------------- | ------------ |
| Creation Phase      | ✅            |
| Execution Phase     | ✅            |
| Hoisting            | ✅            |
| `var` → `undefined` | ✅            |
| `let` → TDZ         | ✅            |
| Function hoisting   | ✅            |

---

## 🧠 One-Line Definition (Remember This)

> **Hoisting is JavaScript’s behavior of registering variable and function declarations in memory during the creation phase, before code execution.**

---

## 📌 Notes

* This project is intentionally simple
* No CSS or UI logic is used
* Focus is **only on understanding hoisting**
* Errors are caught using `try...catch` so execution continues

---

## ✅ Who This Is For

* JavaScript beginners
* Anyone learning hoisting
* Interview preparation
* Understanding `var`, `let`, and TDZ clearly

---

## 🎯 Final Takeaway

> **Hoisting prepares declarations first.
> Execution order decides whether you see a value, `undefined`, or an error.**

---

