
# 6️⃣ Closures

## 🧠 What is a Closure? (simple definition)

> **A closure is when a function remembers variables from its outer scope, even after the outer function has finished executing.**

In short:

> **Function + remembered variables = closure**

---

## 🧩 Step 1: Normal function (no closure yet)

```js
function outer() {
  let message = "Hello";
  console.log(message);
}

outer();
```

🧠 Here:

* `message` exists
* Used and gone
* Nothing is remembered

---

## 🧩 Step 2: Inner function (still simple)

```js
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
```

🧠 Still normal:

* Inner function can access outer variable
* This is **scope**, not closure yet

---

## 🧩 Step 3: RETURN the inner function (closure begins)

```js
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  return inner;
}

const myFunc = outer();
myFunc();
```

### Output

```
Hello
```

🧠 This is the **key moment** 💡

* `outer()` has **finished**
* But `inner()` still remembers `message`

👉 That remembering is called a **closure**.

---

## 🧠 Step 4: Prove that outer is finished

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
```

🧠 Explanation:

* `outer()` ran **once**
* `count` should be gone
* But it’s remembered by `inner()`

👉 **Closure keeps data alive**

---

## 🧠 Real-world analogy (simple)

Think of a **backpack** 🎒

* Outer function puts variables into the backpack
* Inner function carries the backpack
* Even after leaving the place, backpack stays

---

## 🧠 Why closures are useful (basic idea)

* Data privacy
* Counters
* Remembering state
* Callbacks

---

## 🧠 Common beginner confusion (clear it)

❌ “Outer function is gone, so variables should be gone”
✅ Inner function **closes over** those variables

---

## 🧠 One-line takeaway (memorize)

> **A closure is a function that remembers variables from its outer scope even after execution ends**

---

        function outer() {
            let x = 1;
            function inner() {
                console.log(x);
            }
            return inner;
        }

        
        const savedInner = outer();
        savedInner();

Execution flow:

1. outer is known (hoisting)
2. outer() is called
3. x = 1 runs
4. inner function is created
5. inner is returned
6. savedInner now refers to inner
7. savedInner() is called
8. console.log(x) runs
