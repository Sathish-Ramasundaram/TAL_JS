### `if / else` Statement – Simple Display App

````md
# if / else Statement – Simple Display App

This project demonstrates how the **`if / else` statement** is used
for **decision making** in JavaScript.

The app checks whether the user has entered any text and:
- Shows an error if the input is empty
- Displays the typed word if the input is valid

---

## 📌 What This App Does

1. User types a word in the input field
2. User clicks the button
3. JavaScript checks the input using `if / else`
4. Based on the condition:
   - ❌ Shows an error message, or
   - ✅ Displays the typed word

---

## 🧠 Core Concept

```js
if (condition) {
  // run when condition is true
} else {
  // run when condition is false
}
````

Only **one block executes** at a time.

---

## ❌ If Condition (Empty Input)

```js
if (text === "") {
  message.textContent = "Please enter a word to display";
}
```

### Result

* User sees an error message
* Typed word is NOT shown

---

## ✅ Else Condition (Valid Input)

```js
else {
  typedWord.textContent = text;
}
```

### Result

* Typed word appears on the screen
* Success message is shown

---

## 🧪 Example Output

### Empty Input

```
❌ Please enter a word to display
```

### Valid Input

```
JavaScript
```

---

## 🧠 Why `if / else` Is Important

* Validates user input
* Prevents empty or invalid data
* Controls program execution flow
* Used in almost every real-world application

---

## 📂 Technologies Used

* HTML
* JavaScript (Vanilla JS)
* DOM Manipulation

---

## 🧠 One-Line Summary

```md
The `if / else` statement allows a program to make decisions and execute
different code based on a condition.
```

---

Happy learning 🚀

```

---

## ✅ Final Verdict

✔️ Real-world use  
✔️ Clear decision logic  
✔️ Beginner-friendly  
✔️ Perfect learning example  
