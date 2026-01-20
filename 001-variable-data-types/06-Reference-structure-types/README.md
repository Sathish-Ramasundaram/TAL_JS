
### 1️⃣ Object reference

```js
const settings = { theme: "white" };

const page1 = settings;
const page2 = settings;

page1.theme = "green";

console.log(page2.theme); // green
```

✔️ Both `page1` and `page2` point to the **same object in memory**
✔️ Changing via one reference affects all others
✔️ Perfect example

---

### 2️⃣ Array reference

```js
const items = ["laptop", "charger", "Notebook"];

const employee1 = items;
const employee2 = items;

employee1.push("pen");

console.log(employee2);
```

✔️ Arrays are objects in JavaScript
✔️ `push()` mutates the same array in memory
✔️ Great real-world naming (`employee1`, `employee2`) — helps intuition

---

### 3️⃣ Function reference (advanced but correct)

```js
function purchase() {
  console.log("Click here add to Cart");
}

const vegetable = purchase;
const Meat = purchase;

Meat.message = "Add to cart";

console.log(vegetable.message);
```

✔️ Functions are **objects** in JavaScript
✔️ Properties can be attached to them
✔️ Both variables reference the same function object
✔️ This is a 🔥 *mind-opener* example

---

## 🧠 One-line mental model (perfect for README)

> **Variables don’t store objects — they store references to objects.**

---

## 📘 README.md (ready to copy)

````md
# JavaScript Reference vs Value – Simple Demos

This project demonstrates how **references** work in JavaScript using
**objects**, **arrays**, and **functions**.

JavaScript does not copy objects by default.  
Instead, it copies **references (memory addresses)**.

---

## 📌 Core Concept

> When you assign an object, array, or function to another variable,  
> both variables point to the **same memory location**.

So, changing one affects the other.

---

## 🔹 Object Reference Example

```js
const settings = { theme: "white" };

const page1 = settings;
const page2 = settings;

page1.theme = "green";

console.log(page2.theme); // green
````

### Explanation

* `page1` and `page2` reference the same object
* Modifying through `page1` affects `page2`

---

## 🔹 Array Reference Example

```js
const items = ["laptop", "charger", "Notebook"];

const employee1 = items;
const employee2 = items;

employee1.push("pen");

console.log(employee2);
// ["laptop", "charger", "Notebook", "pen"]
```

### Explanation

* Arrays are objects in JavaScript
* `push()` mutates the original array
* Both variables see the change

---

## 🔹 Function Reference Example

```js
function purchase() {
  console.log("Click here add to Cart");
}

const vegetable = purchase;
const Meat = purchase;

Meat.message = "Add to cart";

console.log(vegetable.message); // Add to cart
```

### Explanation

* Functions are objects
* Properties can be attached to them
* Both variables reference the same function object

---

## ⚠️ Important Note

Primitive values are copied **by value**:

* string
* number
* boolean
* null
* undefined
* symbol

Objects, arrays, and functions are copied **by reference**.

---

## 🧠 Key Takeaway

> One object in memory
> Multiple references
> Any mutation is shared

---
