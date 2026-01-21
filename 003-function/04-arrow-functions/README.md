Great 👍
Let’s continue.

---

# 4️⃣ Arrow Functions

Same plan:

* **Very small steps**
* **Console examples only**
* **One new idea at a time**

---

## 🧠 What is an Arrow Function? (simple definition)

> An **arrow function** is a **shorter way to write a function expression**.

Think:

> Same function, **less typing**.

---

## 🔹 Basic syntax

```js
const functionName = () => {
  // code
};
```

---

## 🧩 Step 1: Normal function expression (recap)

```js
const sayHello = function () {
  console.log("Hello");
};

sayHello();
```

---

## 🧩 Step 2: Same thing using arrow function

```js
const sayHello = () => {
  console.log("Hello");
};

sayHello();
```

🧠 Meaning:

* `function` keyword removed
* `=>` (arrow) added

---

## 🧩 Step 3: Arrow function with one parameter

```js
const greet = (name) => {
  console.log("Hello", name);
};

greet("Sathish");
```

---

## 🧩 Step 4: One parameter → parentheses optional

```js
const greet = name => {
  console.log("Hello", name);
};

greet("Ravi");
```

🧠 Parentheses can be removed **only when there is ONE parameter**.

---

## 🧩 Step 5: Arrow function with return value

```js
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3));
```

---

## 🧩 Step 6: Implicit return (very important)

If the function has **only one line** and it returns a value:

```js
const add = (a, b) => a + b;

console.log(add(5, 5));
```

🧠 `return` is **implicit** here.

---

## 🧠 What arrow functions are NOT good for (just awareness)

* They **do not have their own `this`**
* Not hoisted like function declarations

(We’ll cover this later when needed.)

---

## 🧠 Compare quickly

| Feature        | Function declaration | Arrow function |
| -------------- | -------------------- | -------------- |
| Short syntax   | ❌                    | ✅              |
| Has own `this` | ✅                    | ❌              |
| Hoisted        | ✅                    | ❌              |

---

## 🧠 One-line takeaway (memorize)

> **Arrow functions are a shorter syntax for function expressions**

---
