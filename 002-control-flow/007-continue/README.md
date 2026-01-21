continue skips the current loop iteration and moves to the next one

Important:
It does NOT stop the loop
It only skips one round

Here’s a **clean, beginner-friendly README.md** for **your exact example** 👇
(No extra theory, just what’s needed.)

---


## 🎯 What This Example Does

- Displays **all tasks** with their completion status
- Uses a button to display **only pending tasks**
- Skips completed tasks using the `continue` statement

---

## 🧠 Key JavaScript Concept

### `continue`

The `continue` statement skips the current iteration of a loop and moves to
the next iteration without stopping the loop.

In this example:
- Completed tasks are skipped
- Pending tasks are processed and displayed

---

## 📂 Files

### `index.html`
- Displays all tasks
- Contains a button to show pending tasks
- Renders task lists using `<ul>`

### `script.js`
- Holds task data
- Uses a `for` loop to display all tasks
- Uses `continue` to skip completed tasks

---

## 📄 Task Data Structure

```js
const todos = [
  { task: "Wake up", completed: true },
  { task: "Study JavaScript", completed: false },
  { task: "Exercise", completed: true },
  { task: "Practice coding", completed: false }
];
````

---

## 🔍 Core Logic (continue usage)

```js
for (let i = 0; i < todos.length; i++) {
  if (todos[i].completed) {
    continue;
  }
  // Only pending tasks reach here
}
```

---

## ✅ Output Behavior

### All Tasks

* Shows every task
* Displays completion status (`true` / `false`)

### Pending Tasks

* Shows only tasks where `completed === false`
* Completed tasks are skipped

---

## 📝 Summary

This example clearly shows how `continue` helps filter data inside loops
without stopping execution.

---

## 🧠 One-Line Takeaway

> **Use `continue` when you want to skip some items but keep looping**

```


