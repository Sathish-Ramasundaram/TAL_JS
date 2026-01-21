

> After the first call, `toggleTheme` knows the current theme
> On the second call, it does **not** go back to `createTheme`
> It simply updates the theme to the opposite

---

## Let’s walk it slowly, like a timeline

### Code (for reference)

```js
function createTheme() {
  let theme = "light";

  return function changeTheme() {
    theme = theme === "light" ? "dark" : "light";
    console.log(theme);
  };
}

const toggleTheme = createTheme();
```

---

## 🔹 Step-by-step execution (REAL flow)

### 🟢 Step 1: This line runs ONCE

```js
const toggleTheme = createTheme();
```

What happens:

* `createTheme()` runs **once**
* `theme = "light"` is created
* `changeTheme` function is created
* `changeTheme` is returned
* `createTheme()` **finishes forever**

👉 This will **never run again** unless you call `createTheme()` again.

---

## 🔹 Step 2: First call

```js
toggleTheme();
```

Inside `changeTheme`:

* `theme` was `"light"`
* It becomes `"dark"`
* Prints: `dark`

---

## 🔹 Step 3: Second call

```js
toggleTheme();
```

Important point 👇
❌ `createTheme()` is NOT called again
✅ Same `theme` variable is used

Inside `changeTheme`:

* `theme` was `"dark"`
* It becomes `"light"`
* Prints: `light`

---

## 🔹 Step 4: Third call

```js
toggleTheme();
```

* `theme` was `"light"`
* It becomes `"dark"`

---

## 🔑 VERY IMPORTANT RULE (memorize this)

> **Calling the returned function does NOT re-run the outer function.**

The outer function:

* Runs once
* Creates memory
* That memory is reused

---

## 🧠 Why this happens (simple words)

* `toggleTheme` **carries a reference** to `theme`
* That reference stays alive
* JavaScript does NOT recreate it

---

## 🧠 Mental model (easy)

Think like a **switch**:

* `createTheme()` installs the switch
* `toggleTheme()` flips the switch
* Flipping doesn’t reinstall the switch every time

---

