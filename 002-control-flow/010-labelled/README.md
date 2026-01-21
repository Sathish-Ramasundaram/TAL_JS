Labels let break or continue control outer loops

✅ Correct version

break label

Stops BOTH inner and outer loops immediately

break (without label)

Stops ONLY the inner loop
Outer loop continues and shows others

✔ Correct mental model
break;          → exit inner loop only
break label;    → exit all related loops

---

✅ Correct version

break label

Stops BOTH inner and outer loops immediately

break (without label)

Stops ONLY the inner loop
Outer loop continues and shows others

✔ Correct mental model
break;          → exit inner loop only
break label;    → exit all related loops

---

### General syntax

```js
labelName: statement
```

### Common usage with loops

```js
labelName:
for (...) {
  // code
}
```

### Using with `break`

```js
break labelName;
```

### Using with `continue`

```js
continue labelName;
```

---

## 3️⃣ Simple `continue` with label (console example)

### Goal (plain English)

* Skip remaining inner loop
* Continue **next iteration of outer loop**

---

### Example

```js
outerLoop:
for (let i = 1; i <= 3; i++) {

  for (let j = 1; j <= 3; j++) {

    if (j === 2) {
      continue outerLoop;
    }

    console.log("i =", i, "j =", j);
  }
}
```

---

### How this runs (step-by-step)

```
i=1 j=1  → printed
j=2      → continue outerLoop → skip rest of inner loop
i=2 j=1  → printed
j=2      → continue outerLoop
i=3 j=1  → printed
j=2      → continue outerLoop
```

### Output

```
i=1 j=1
i=2 j=1
i=3 j=1
```

---

## 🧠 Difference between labelled `break` and `continue`

| Statement        | What it does                            |
| ---------------- | --------------------------------------- |
| `break label`    | Exit the labelled loop completely       |
| `continue label` | Jump to next iteration of labelled loop |

---

## 🧠 One-line takeaway (memorize)

> **Labels let `break` and `continue` control outer loops**
