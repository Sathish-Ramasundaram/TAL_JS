break is a JavaScript statement used to immediately stop and exit a loop or a switch statement.
---

## 🔍 Example Code Snippet

```js
switch (action) {
  case "a":
    word.textContent = "Apple 🍎";
    message.textContent = "You clicked A";
    break;

  case "b":
    word.textContent = "Banana 🍌";
    message.textContent = "You clicked B";
    break;

  case "c":
    word.textContent = "Cat 🐱";
    message.textContent = "You clicked C";
    break;
}
````

---

## ❌ What Happens Without `break`

If `break` is removed:

* JavaScript continues to execute the next case
* Output may be incorrect

This is called **fall-through**.


---

## 📝 Summary

The `break` statement ensures that only the matched `switch` case runs.
It is essential for correct control flow in JavaScript.

```

---

> **`break` stops execution immediately inside loops and switch statements**

```
