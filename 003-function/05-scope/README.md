
We’ll cover **three scopes**, one by one:
1️⃣ Global
2️⃣ Function
3️⃣ Block

---

# 5️⃣ Scope

## 🧠 What is Scope? (simple definition)

> **Scope means: where a variable can be accessed (used).**

Think:

> “Who can see this variable?”

---

## 1️⃣ Global Scope

### Definition

> A variable declared **outside all functions and blocks** is global.

---

### Example

```js
let message = "Hello";

function sayMessage() {
  console.log(message);
}

sayMessage();
console.log(message);
```

### Output

```
Hello
Hello
```

🧠 Meaning:

* `message` is accessible **everywhere**
* Inside function ✔
* Outside function ✔

---

## 2️⃣ Function Scope

### Definition

> Variables declared **inside a function** are accessible **only inside that function**.

---

### Example

```js
function test() {
  let number = 10;
  console.log(number);
}

test();
console.log(number); // ❌ error
```

### Output

```
10
ReferenceError: number is not defined
```

🧠 Meaning:

* `number` lives **only inside `test()`**
* Outside cannot access it

---

## 3️⃣ Block Scope (`let` / `const`)

### Definition

> Variables declared with `let` or `const` inside `{ }` exist **only inside that block**.

---

### Example

```js
if (true) {
  let age = 30;
  console.log(age);
}

console.log(age); // ❌ error
```

### Output

```
30
ReferenceError: age is not defined
```

---

## 🧠 Important comparison: `var` vs `let`

### `var` is NOT block scoped

```js
if (true) {
  var x = 5;
}

console.log(x); // ✅ works
```

### `let` IS block scoped

```js
if (true) {
  let y = 5;
}

console.log(y); // ❌ error
```

---

## 🧠 Visual mental model (easy to remember)

* **Global scope** → city
* **Function scope** → house
* **Block scope** → room

You can’t access a room’s things from outside the house.

---

## 🧠 One-line takeaway (memorize)

> **Scope defines where variables are accessible in your code**

---
