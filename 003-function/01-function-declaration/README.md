
---

## 🧠 What is a Function Declaration? (simple definition)

> A **function declaration** is a way to define a function using the `function` keyword and a name.

Think of it as:

> “Give a name to a block of code so I can use it later.”

---

## 🔹 Basic syntax

```js
function functionName() {
  // code
}
```

---

## 🧩 Step 1: Smallest possible example

```js
function sayHello() {
  console.log("Hello");
}

sayHello();
```

### Output

```
Hello
```

🧠 Meaning:

* Function is **declared**
* Function is **called**
* Code inside runs

---

## 🧩 Step 2: Function with simple logic

```js
function showNumber() {
  console.log(5);
}

showNumber();
```

Output:

```
5
```

---

## 🧩 Step 3: Function reused multiple times

```js
function greet() {
  console.log("Hi");
}

greet();
greet();
greet();
```

Output:

```
Hi
Hi
Hi
```

🧠 Meaning:

* Declare once
* Use many times

---

## 🧠 Important rule (very important)

### Function declaration is **hoisted**

This works 👇

```js
sayHi();

function sayHi() {
  console.log("Hi");
}
```

Output:

```
Hi
```

🧠 You’ll understand *why* when we reach **call stack & hoisting** later.

---

## 🧠 What a function declaration is NOT

❌ It does not run automatically
❌ It does not need `=`
❌ It does not need `return` (optional)

---

## 🧠 Real-world analogy

> Function declaration is like **saving a contact**
> Calling the function is like **calling the contact**

---

## 🧠 One-line takeaway (memorize)

> **A function declaration defines a named block of code that can be called anytime**

---

