
# Theme Toggle using JavaScript Closure

This project demonstrates how **JavaScript closures** can be used to
remember and update application state — using a **Light / Dark theme toggle**
as a real-world example.

---

## 🎯 What This Example Shows

- How a function can **remember data** after it finishes execution
- How to toggle between **Light** and **Dark** themes
- How **closure** avoids using global variables
- How UI updates without re-running setup logic

---

## 🧠 Core Concept Used

### Closure

> A closure allows a function to remember variables from its outer function,
> even after the outer function has finished running.

In this project:
- `createTheme()` runs **once**
- The returned function remembers the `theme` value
- Each button click updates the remembered theme

---

## 📂 Project Files

### `index.html`
- Displays the page
- Contains the toggle button
- Shows the current theme

### `style.css`
- Defines light and dark background colors
- Handles visual theme changes

### `script.js`
- Implements theme toggling logic
- Uses a closure to remember theme state

---

## 🧩 How the Code Works (Step-by-Step)

### 1️⃣ Theme setup (runs once)

```js
const toggleTheme = createTheme();
````

* `createTheme()` runs once
* `theme` is set to `"light"`
* Inner function is returned
* Memory is created

---

### 2️⃣ Button click (runs many times)

```html
<button onclick="toggleTheme()">Toggle Theme</button>
```

* Calls the inner function
* Does NOT re-run `createTheme()`
* Uses remembered `theme`
* Toggles between light and dark

---

### 3️⃣ Theme memory (closure)

```js
let theme = "light";
```

* This variable is NOT global
* It exists only inside the closure
* It is remembered across button clicks

---

## 🎨 Visual Behavior

| Theme | Background | Text  |
| ----- | ---------- | ----- |
| Light | White      | Black |
| Dark  | Dark gray  | White |

---

## ❌ What This Example Avoids

* ❌ No global variables
* ❌ No repeated setup logic
* ❌ No unnecessary re-renders

---

## ✅ Why This Is a Perfect Closure Example

✔ State must be remembered
✔ State should be private
✔ Outer function runs once
✔ Inner function runs multiple times

---

## 🧠 One-Line Takeaway

> **Closure lets a button remember the theme without re-running setup code.**

---

