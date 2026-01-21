Perfect 👍
Let’s move on to the next topic.

---

# 3️⃣ Parameters & Return Values

We’ll go **slow**, **simple**, and **one idea at a time**, with **console examples only**.

---

## 🧠 What are Parameters? (simple definition)

> **Parameters are values you pass INTO a function.**

Think:

> Function = machine
> Parameters = input

---

## 🧩 Step 1: Function WITHOUT parameters

```js
function sayHello() {
  console.log("Hello");
}

sayHello();
```

🧠 No input → same output every time.

---

## 🧩 Step 2: Function WITH one parameter

```js
function greet(name) {
  console.log("Hello", name);
}

greet("Sathish");
greet("Ravi");
```

### Output

```
Hello Sathish
Hello Ravi
```

🧠 `name` is a **parameter**.

---

## 🧩 Step 3: Function WITH multiple parameters

```js
function add(a, b) {
  console.log(a + b);
}

add(2, 3);
add(5, 10);
```

🧠 Parameters make functions **flexible**.

---

## 🧠 What are Return Values? (simple definition)

> **Return values are values that come OUT of a function.**

Think:

> Input → Function → Output

---

## 🧩 Step 4: Function that RETURNS a value

```js
function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result);
```

### Output

```
5
```

🧠 `return` sends value **back** to caller.

---

## 🧩 Step 5: `return` stops the function

```js
function test() {
  console.log("Start");
  return;
  console.log("End");
}

test();
```

Output:

```
Start
```

🧠 Code after `return` **never runs**.

---

## 🧠 Parameter vs Argument (important distinction)

```js
function greet(name) {   // parameter
  console.log(name);
}

greet("Sathish");        // argument
```

* `name` → parameter
* `"Sathish"` → argument

---

## 🧠 Real-world analogy

* Parameter → ingredient
* Function → cooking process
* Return → cooked food

---

## 🧠 One-line takeaway (memorize)

> **Parameters go into a function, return values come out of it**

---
