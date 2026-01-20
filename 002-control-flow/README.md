
---

# JavaScript Control Flow – Beginner Friendly Guide

---

## 1️⃣ `if / else` statement

### 📌 What it does

Runs code **based on a condition**.

### 🧠 Real-world use

* Login check
* Age validation
* Payment success / failure

### Example

```js
const age = 18;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}
```

👉 Only **one block** runs.

---

## 2️⃣ `switch` statement

### 📌 What it does

Checks **one value** against **multiple cases**.

### 🧠 Real-world use

* Menu selection
* Status codes
* Page routing

### Example

```js
const role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "user":
    console.log("Limited access");
    break;
  default:
    console.log("No access");
}
```

⚠️ `break` is important — without it, execution continues.

---

## 3️⃣ `for` statement

### 📌 What it does

Repeats code **a fixed number of times**.

### 🧠 Real-world use

* Loop through numbers
* Render list items
* Count totals

### Example

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

## 4️⃣ `while` statement

### 📌 What it does

Runs **while a condition is true**.

### 🧠 Real-world use

* Waiting for a condition
* Infinite loops (careful!)

### Example

```js
let count = 1;

while (count <= 3) {
  console.log(count);
  count++;
}
```

⚠️ Condition must eventually become false.

---

## 5️⃣ `do...while` statement

### 📌 What it does

Runs **at least once**, then checks condition.

### 🧠 Real-world use

* Input validation
* Retry logic

### Example

```js
let number = 5;

do {
  console.log(number);
  number--;
} while (number > 5);
```

👉 Runs **once**, even though condition is false.

---

## 6️⃣ `break` statement

### 📌 What it does

**Stops** a loop or switch immediately.

### Example

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
```

Output:

```
1
2
```

---

## 7️⃣ `continue` statement

### 📌 What it does

Skips **current iteration**, continues loop.

### Example

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

Output:

```
1
2
4
5
```

---

## 8️⃣ `for...in` statement

### 📌 What it does

Loops over **object keys**.

### 🧠 Real-world use

* Reading object properties

### Example

```js
const user = { name: "Sathish", age: 25 };

for (let key in user) {
  console.log(key, user[key]);
}
```

⚠️ Use for **objects**, not arrays.

---

## 9️⃣ `for...of` statement

### 📌 What it does

Loops over **iterable values** (arrays, strings).

### 🧠 Real-world use

* Looping arrays
* Reading characters

### Example

```js
const items = ["Book", "Pen", "Laptop"];

for (let item of items) {
  console.log(item);
}
```

✔️ Preferred for arrays.

---

## 🔟 `labelled` statement (rare but good to know)

### 📌 What it does

Lets you **break or continue outer loops**.

### Example

```js
outerLoop:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2) break outerLoop;
    console.log(i, j);
  }
}
```

⚠️ Rare in real apps, but useful in nested loops.

---

## 🧠 Execution Order (very important)

JavaScript runs **top to bottom**, but:

* Conditions decide **what runs**
* Loops decide **how many times**
* `break` / `continue` change flow instantly

---

## 📌 Quick Comparison Table

| Statement    | Used for          |
| ------------ | ----------------- |
| `if / else`  | Decisions         |
| `switch`     | Multiple cases    |
| `for`        | Fixed loops       |
| `while`      | Conditional loops |
| `do...while` | At least one run  |
| `break`      | Exit loop         |
| `continue`   | Skip iteration    |
| `for...in`   | Object keys       |
| `for...of`   | Array values      |
| `labelled`   | Nested control    |

---

## 🧠 One-line takeaway

> **Control flow decides what runs, when it runs, and how many times it runs.**

---

## ✅ What I recommend next (learning path)

1️⃣ Practice **if / else + for**
2️⃣ Learn **break & continue**
3️⃣ Use **for...of** with arrays
4️⃣ Avoid `for...in` for arrays
5️⃣ Ignore `labelled` until advanced

---

If you want, next I can:

* Build **one single HTML page** with buttons for each statement
* Convert this into a **README.md**
* Show **real bugs caused by wrong loops**
* Map these concepts to **React rendering**

You’re learning fundamentals the *right way* 👏
