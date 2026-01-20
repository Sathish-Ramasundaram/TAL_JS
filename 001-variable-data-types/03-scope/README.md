# 📘 Mini Dictionary — JavaScript Scope Demo

## 📖 Project Objective
This project demonstrates how **JavaScript scope** works (global, function, and block scope) using a simple **mini dictionary app**. It shows how variables behave depending on where they are declared and how accessible they are across different parts of the program.

---

## 🖥️ Features
- A small dictionary with predefined words (`apple`, `book`, `pen`).  
- Input field to type a word and search its meaning.  
- Displays the meaning if found, otherwise shows “Word not found.”  
- Demonstrates:
  - **Global scope** → variables accessible everywhere.  
  - **Function scope** → variables accessible only inside a function.  
  - **Block scope** → variables accessible only inside `{}` blocks.  

---

## 📂 Project Structure
```
scope-demo/
 ├── index.html
 └── script.js
```

---

## ⚙️ Code Explanation

### 🔹 Global Scope
```js
const dictionary = { apple: "A fruit", book: "Something to read", pen: "A writing tool" };
let thank_msg = "   - Thank you for searching";
```
- Accessible anywhere in the program.  
- Example: `dictionary` and `thank_msg` are global.

---

### 🔹 Function Scope
```js
function searchWord() {
  let resultText; // function-scoped
  ...
}
```
- `resultText` exists only inside `searchWord`.  
- Cannot be accessed outside the function.

---

### 🔹 Block Scope
```js
if (dictionary[input]) {
  let message = "Meaning found!"; // block-scoped
  console.log(message); // ✅ works here
}
console.log(message); // ❌ Error (outside block)
```
- `message` exists only inside the `if` block.  
- Cannot be accessed outside.

---

## 🚀 How to Run
1. Save both files (`index.html` and `script.js`) in the same folder.  
2. Open `index.html` in a browser.  
3. Type a word (`apple`, `book`, or `pen`) and click **Search**.  
4. Observe:
   - Meaning displayed in the UI.  
   - Console logs showing scope behavior.  

---

## ✅ Key Takeaways
- **Global variables** are accessible everywhere.  
- **Function-scoped variables** exist only inside the function.  
- **Block-scoped variables** (`let`, `const`) exist only inside `{}` blocks.  
- Understanding scope is essential for writing clean, bug‑free JavaScript.

---
