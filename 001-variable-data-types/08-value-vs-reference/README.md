
# Value vs Reference in JavaScript

This project demonstrates the difference between **value types** and
**reference types** in JavaScript using simple HTML and JavaScript.

---

## 📌 Core Idea

JavaScript handles data in two ways:

- **Primitive values** are copied by value
- **Objects** are copied by reference

---

## 🔹 Value (Primitive Example)

```js
let a = 10;
let b = a;

b = 20;
````

### Output

```
a = 10
b = 20
```

### Explanation

* `a` and `b` store **separate values**
* Changing `b` does **not** affect `a`
* Numbers, strings, and booleans behave this way

---

## 🔹 Reference (Object Example)

```js
const page1 = { title: "JS." };
const page2 = page1;

page2.title = "JavaScript";
```

### Output

```
page1.title = JavaScript
page2.title = JavaScript
```

### Explanation

* `page1` and `page2` point to the **same object in memory**
* Modifying through `page2` also affects `page1`
* Objects are shared by reference

---

## 🧠 Mental Model

```
Primitive  → copied
Object     → shared
```

Or simply:

> **Primitives are copied. Objects are referenced.**

---

## ⚠️ Important Notes

* Arrays and functions are also reference types
* JavaScript does not warn when objects are mutated
* Reference bugs are common in UI frameworks like React

---

## 💡 Avoiding Reference Issues

To create a new object instead of sharing one:

```js
const page2 = { ...page1 };
```

Now `page1` and `page2` are independent.

---

## 🎯 Why This Matters

* Prevents unexpected side effects
* Helps avoid state mutation bugs
* Essential for understanding React and Redux

---

