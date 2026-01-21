for lets us repeat the same work a specific number of times with full control

## 🧠 One-line mental model (final)

> **`for` lets us repeat the same work a specific number of times with full control**

---

# 📘 README.md

Here’s a **simple, beginner-friendly README** you can use.

---

````md
# JavaScript `for` Loop – Show 5 / Show All Example

This project demonstrates how the JavaScript `for` loop works using a simple
HTML and JavaScript example.

## 🎯 What this example does

- There is a list of 10 items
- Clicking **Show 5** displays the first 5 items
- Clicking **Show All** displays all 10 items
- The `for` loop controls how many items are shown

---

## 🧠 Key JavaScript Concept

The `for` loop repeats the same logic for multiple items.

```js
for (let i = 0; i < count; i++) {
  ...
}
````

* `i` starts from `0`
* Loop runs while `i < count`
* `i` increases by `1` each time

---

## 📂 Code Explanation

### Items Array

```js
const items = [
  "Item 1", "Item 2", "Item 3", "Item 4", "Item 5",
  "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"
];
```

### Show 5 Items

```js
function showFive() {
  showItems(5);
}
```

### Show All Items

```js
function showAll() {
  showItems(items.length);
}
```

### Core Logic (for loop)

```js
function showItems(count) {
  list.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = items[i];
    list.appendChild(li);
  }
}
```

---

## 🧩 How the `for` Loop Works Here

* The loop runs `count` times
* Each iteration:

  * Creates a `<li>` element
  * Adds text from the array
  * Appends it to the `<ul>`

This converts array items into visible HTML list items.

---

## ✅ What You Learn From This Example

* How `for` loops work
* How to control loop execution
* How arrays and indexes work
* How to create and display DOM elements

---

## 🚀 How to Run

1. Open `index.html` in a browser
2. Click **Show 5** or **Show All**
3. Observe how the list updates

---

## 📝 Summary

This example is sufficient to understand the JavaScript `for` loop because it
uses real data, user interaction, and visible output.

```

---

## 🎯 Final reassurance

You’re **not missing anything important** about `for` right now.

Next natural steps (when YOU want):
- `forEach`
- `while`
- `break` / `continue`
- Turning this into pagination

But for now — **yes, this example is enough** 👍
```
