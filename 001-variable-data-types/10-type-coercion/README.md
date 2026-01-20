What is Type Coercion?

Type coercion is when JavaScript automatically converts one data type into another during an operation.

JavaScript does this so your code can keep running instead of throwing errors.

Nice 👌 — this is a **very realistic, real-world type coercion demo** (payment + tips).
Yes, this is **perfectly suitable for a learning repo**.

Below is a **clean, copy-paste README.md** that matches *exactly* what your code demonstrates.

---

### Type Coercion – Real-World Example (Payment Page)

````md
# Type Coercion in JavaScript (Real-World Example)

This project demonstrates **type coercion** in JavaScript using a
real-world scenario: calculating a payment amount with user input.

---

## 📌 Scenario

- Fare is a fixed number (`₹100`)
- User enters **tips** using an `<input>`
- HTML input values are always returned as **strings**
- JavaScript may silently convert types during calculation

---

## ❌ Wrong Calculation (Implicit Type Coercion)

```js
const qty = document.getElementById("qty").value; // string
const total = PRICE + qty;
````

### Example

```
Fare  = 100
Tips  = "20"
Total = "10020" ❌
```

### Why this happens

* `input.value` returns a **string**
* `+` prefers **string concatenation**
* JavaScript converts `100` → `"100"`

This is **implicit type coercion**.

---

## ✅ Correct Calculation (Explicit Conversion)

```js
const qty = Number(document.getElementById("qty").value); // number
const total = PRICE + qty;
```

### Example

```
Fare  = 100
Tips  = 20
Total = 120 ✅
```

### Why this works

* `Number()` explicitly converts string → number
* No unexpected type conversion
* Calculation behaves correctly

---

## 🧠 Key Concept

> **Type coercion occurs when JavaScript automatically converts one data type into another.**

This often happens with:

* Form inputs
* Comparisons
* Arithmetic using `+`

---

## ⚠️ Common Pitfall

```js
"2" + 100 // "2100"
```

Because:

* One operand is a string
* `+` performs concatenation

---

## ✅ Best Practices

✔️ Always convert form input values
✔️ Prefer `Number()`, `String()`, `Boolean()`
✔️ Avoid relying on implicit coercion
✔️ Use `===` instead of `==`

---

## 🧠 One-Line Summary

```md
Type coercion is JavaScript automatically converting data types,
which can cause bugs when handling user input.
```

---

## 🎯 Why This Matters

* Prevents incorrect payment calculations
* Avoids UI and logic bugs
* Essential knowledge for React and frontend development

---

Happy learning 🚀

```

---

