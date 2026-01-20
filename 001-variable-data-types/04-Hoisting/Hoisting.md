### Hoisting (JavaScript)

Hoisting is JavaScript’s behavior of registering variable and function declarations in memory during the Creation Phase, before any code is executed.

---

When we say:

“registering variable and function declarations in memory”

we are precisely referring to this internal setup 👇

x     → undefined
y     → uninitialized (TDZ)
z     → uninitialized (TDZ)
greet → function() { console.log("Hi"); }


That is hoisting.

---

“Declarations”

➡️ Only these parts:

var x;
let y;
const z;
function greet() {}


❌ Not these:

x = 5;
y = 10;
z = 20;

---

If a let or const variable is initialized first, the TDZ ends.
If the variable is accessed before initialization, the TDZ continues and a ReferenceError occurs.

✔️ That’s the correct rule.

---

JavaScript runs code in two phases:
Creation Phase
Execution Phase

Hoisting always happens during the Creation Phase.

Love this question 😄
You’re basically asking: **“Show me what the JavaScript engine is doing, step by tiny step.”**
Let’s do *exactly that* — very slow, very detailed, no jumps.

I’ll take **both examples**, and for each one we’ll go through **micro-steps**.

---

# 🔹 First, one rule to keep in mind

> JavaScript **always** does this:
>
> 1. **Scan the whole code**
> 2. **Create memory (Creation Phase)**
> 3. **Run code line by line (Execution Phase)**

It never mixes these steps.

---

# 🟢 Example 1 (No error case)

```js
var x = 5;
let y = 10;
const z = 20;

function greet() {
  console.log("Hi");
}

console.log(x);
console.log(y);
console.log(z);
```

---

## 🧠 Creation Phase (SUPER DETAILED)

### Step 1: JS scans the entire file

It finds:

* `var x`
* `let y`
* `const z`
* `function greet`

(No execution yet)

---

### Step 2: JS allocates memory slots

```txt
x     → (empty slot)
y     → (empty slot)
z     → (empty slot)
greet → (empty slot)
```

---

### Step 3: JS registers declarations (hoisting)

Now JS assigns initial states:

```txt
x     → undefined
y     → uninitialized (TDZ)
z     → uninitialized (TDZ)
greet → function() { console.log("Hi"); }
```

🚨 Important:

* No `5`, `10`, `20` yet
* TDZ exists for `let` and `const`

➡️ **Creation Phase ends**

---

## ▶️ Execution Phase (MICRO STEPS)

### Step 4: Execute line 1

```js
var x = 5;
```

* JS assigns `5` to `x`

```txt
x → 5
```

---

### Step 5: Execute line 2

```js
let y = 10;
```

* TDZ ends for `y`
* JS assigns `10` to `y`

```txt
y → 10
```

---

### Step 6: Execute line 3

```js
const z = 20;
```

* TDZ ends for `z`
* JS assigns `20` to `z`

```txt
z → 20
```

---

### Step 7: Skip function declaration

```js
function greet() { ... }
```

Why skip?

* Already handled in Creation Phase
* No execution needed now

---

### Step 8: Execute `console.log(x)`

```js
console.log(x); // 5
```

---

### Step 9: Execute `console.log(y)`

```js
console.log(y); // 10
```

---

### Step 10: Execute `console.log(z)`

```js
console.log(z); // 20
```

---

## ✅ Final Output (Example 1)

```txt
5
10
20
```

---

# 🔴 Example 2 (Error case)

```js
console.log(x);
console.log(y);
console.log(z);
greet();

var x = 5;
let y = 10;
const z = 20;

function greet() {
  console.log("Hi");
}
```

---

## 🧠 Creation Phase (SAME STEPS)

### Step 1–3: JS scans + allocates + hoists

```txt
x     → undefined
y     → uninitialized (TDZ)
z     → uninitialized (TDZ)
greet → function() { console.log("Hi"); }
```

➡️ **Creation Phase ends**

---

## ▶️ Execution Phase (MICRO STEPS)

---

### Step 4: Execute `console.log(x)`

```js
console.log(x);
```

* `x` exists
* value = `undefined`

Output:

```txt
undefined
```

---

### Step 5: Execute `console.log(y)`

```js
console.log(y);
```

🚨 ERROR happens here:

* `y` exists
* but still in TDZ
* access is **not allowed**

❌ `ReferenceError: Cannot access 'y' before initialization`

---

### Step 6: Execution STOPS

🚫 JS **does not continue** after an error

These lines never run:

```js
console.log(z);
greet();
var x = 5;
let y = 10;
const z = 20;
```

---

## ❌ Final Output (Example 2)

```txt
undefined
ReferenceError
```

---

# 🔥 Ultra-clear mental picture

```txt
Creation Phase (always):
-----------------------
var  → undefined
let  → TDZ
const→ TDZ
func → ready

Execution Phase:
----------------
Line by line
Access var before assign → undefined
Access let/const before assign → ERROR
```

---

## One last perfect sentence (lock it in 🧠)

> **Hoisting prepares variables and functions in the Creation Phase; errors occur only in the Execution Phase when TDZ rules are violated.**

