
# Switch Statement – Buttons Demo

This project demonstrates how the **`switch` statement** is used in JavaScript
to control program flow based on **button clicks**.

No input fields are used — only buttons — making this example clean,
simple, and very close to real-world usage.

---

## 📌 What This App Does

- Displays three buttons: **A**, **B**, and **C**
- Each button triggers a different action
- The `switch` statement decides which code block runs
- A word is displayed based on the button clicked

---

## 🧠 Core Concept: `switch` Statement

```js
switch (value) {
  case "a":
    // code
    break;
  case "b":
    // code
    break;
  default:
    // code
}
````

* `switch` compares a single value
* Only the matching `case` executes
* `break` prevents execution from continuing to the next case

---

## 🧪 Example Behavior

| Button Clicked | Output    |
| -------------- | --------- |
| Show A Word    | Apple 🍎  |
| Show B Word    | Banana 🍌 |
| Show C Word    | Cat 🐱    |

---

## 🔍 How It Works

1. User clicks a button
2. Button calls `handleAction()` with a value
3. `switch` checks the value
4. Matching case executes
5. Word and message are displayed

---

## 📂 Technologies Used

* HTML
* JavaScript (Vanilla JS)
* DOM Manipulation

---

## 💡 Why Use `switch` Here?

* Cleaner than multiple `if / else`
* Ideal for menus and button actions
* Easy to extend with more options
* Improves readability

---

## ⚠️ Important Note

Each `case` must end with `break`.

Without `break`, execution will **fall through** to the next case.

---

## 🧠 One-Line Summary

```md
The `switch` statement selects one execution path from multiple options
based on a single value.
```
