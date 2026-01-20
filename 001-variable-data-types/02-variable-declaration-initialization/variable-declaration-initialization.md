Great question 👍 — this is a **core JavaScript concept** and it connects directly to **hoisting**.

Let’s break **“Variable declaration vs initialization”** down **very clearly**, with **simple examples**.

---

## 1️⃣ Variable **Declaration**

**Declaration** means:

> **Telling JavaScript that a variable exists by giving it a name.**

Examples:

```js
var a;
let b;
const c; // ❌ invalid (const must be initialized)
```

What happens:

* JavaScript **creates the variable name**
* Memory space is reserved

---

## 2️⃣ Variable **Initialization**

**Initialization** means:

> **Assigning a value to a variable for the first time.**

Examples:

```js
var a = 10;
let b = 20;
const c = 30;
```

Here:

* Variable is declared ✅
* Variable gets its **first value** ✅

---

## Declaration vs Initialization (Side-by-Side)

| Code            | Declaration | Initialization |
| --------------- | ----------- | -------------- |
| `var x;`        | ✅           | ❌              |
| `var x = 5;`    | ✅           | ✅              |
| `let y;`        | ✅           | ❌              |
| `let y = 10;`   | ✅           | ✅              |
| `const z = 20;` | ✅           | ✅              |

---

## Important differences by keyword

### 🔹 `var`

```js
console.log(a); // undefined
var a = 10;
```

* Declaration is hoisted
* Initialization is set to `undefined` during creation phase
* Real value assigned during execution

---

### 🔹 `let`

```js
console.log(b); // ❌ Error
let b = 20;
```

* Declaration is hoisted
* Initialization does NOT happen
* Variable stays in **TDZ** until initialized

---

### 🔹 `const`

```js
const c = 30;
```

* Declaration and initialization must happen together
* Separate declaration is ❌ not allowed

---

## How this connects to hoisting 🧠

During the **Creation Phase**:

```txt
var a → declared + initialized to undefined
let b → declared, NOT initialized (TDZ)
const c → declared, NOT initialized (TDZ)
```

During the **Execution Phase**:

```txt
a = 10
b = 20
c = 30
```

---

## One-line summary (lock this in 🔒)

> **Declaration creates the variable; initialization gives it its first value.**

---

## Tiny memory trick

> **Name first → value later**

You’ve now connected:

* Declaration
* Initialization
* Hoisting
* TDZ
