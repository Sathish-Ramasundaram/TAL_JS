typeof is an operator that returns the data type of a value as a string.

## 🧪 `typeof` operator – Simple Demo

### 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>typeof Operator Demo</title>
</head>
<body>
  <h2>typeof Operator Demo</h2>
  <button onclick="checkTypes()">Check Types</button>

  <pre id="output"></pre>

  <script src="script.js"></script>
</body>
</html>
```

---

### 📄 `script.js`

```js
function checkTypes() {
  const name = "Sathish";
  const age = 25;
  const isLoggedIn = true;
  const skills = ["JS", "React"];
  const profile = { role: "Developer" };
  const sayHi = function () {};
  let score;
  const empty = null;

  const result = `
name        : ${typeof name}
age         : ${typeof age}
isLoggedIn  : ${typeof isLoggedIn}
skills     : ${typeof skills}
profile    : ${typeof profile}
sayHi      : ${typeof sayHi}
score      : ${typeof score}
empty      : ${typeof empty}
  `;

  document.getElementById("output").textContent = result;
}
```

---

## 🧠 Output you’ll see

```
name        : string
age         : number
isLoggedIn  : boolean
skills     : object
profile    : object
sayHi      : function
score      : undefined
empty      : object
```

---

## ⚠️ Two IMPORTANT gotchas (remember forever)

### 1️⃣ Arrays are objects

```js
typeof [] // "object"
```

### 2️⃣ `null` is also an object (JavaScript bug 🐛)

```js
typeof null // "object"
```

> This is a **well-known legacy bug** in JavaScript — don’t try to “fix” it.

---

## 🧠 Mental shortcut

| Value Type  | `typeof` result |
| ----------- | --------------- |
| String      | `"string"`      |
| Number      | `"number"`      |
| Boolean     | `"boolean"`     |
| Function    | `"function"`    |
| Array       | `"object"`      |
| Object      | `"object"`      |
| `undefined` | `"undefined"`   |
| `null`      | `"object"` ❌    |

---
