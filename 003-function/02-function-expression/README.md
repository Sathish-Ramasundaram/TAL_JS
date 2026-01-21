
# 2️⃣ Function Expression

Again, **simple console examples only**.

---

## 🧠 What is a Function Expression? (simple definition)

> A **function expression** is when a function is created and **stored in a variable**.

Think:

> “Function is treated like a value.”

---

## 🔹 Basic syntax

```js
const functionName = function () {
  // code
};
```

---

## 🧩 Step 1: Smallest example

```js
const sayHello = function () {
  console.log("Hello");
};

sayHello();
```

### Output

```
Hello
```

🧠 Meaning:

* Function is stored in a variable
* Variable is used to call the function

---

## 🧩 Step 2: Function expression without name (anonymous)

```js
const greet = function () {
  console.log("Hi");
};

greet();
```

Output:

```
Hi
```

🧠 Most function expressions are **anonymous**.

---

## 🧩 Step 3: Function expression is NOT hoisted

This ❌ will NOT work:

```js
sayHi();

const sayHi = function () {
  console.log("Hi");
};
```

❌ Error:

```
Cannot access 'sayHi' before initialization
```

Why?

* Variable exists, but function is not ready yet

---

## 🧠 Compare with function declaration (quick)

| Feature                 | Declaration | Expression |
| ----------------------- | ----------- | ---------- |
| Uses `function` keyword | ✅           | ✅          |
| Stored in variable      | ❌           | ✅          |
| Hoisted                 | ✅           | ❌          |

---

## 🧠 Real-world analogy

* Function declaration → **Fixed landline**
* Function expression → **Mobile number saved in contact**

You must save before calling.

---

## 🧠 One-line takeaway (memorize)

> **A function expression stores a function inside a variable**
