
## 🧠 What is `for...of` (one line)

> **`for...of` is used to loop over the VALUES of an iterable (like an array).**

---

## 1️⃣ Simple array example

```js
const fruits = ["Apple", "Banana", "Cat"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

### Output

```
Apple
Banana
Cat
```

👉 `fruit` is the **value**, not the index.

---

## 2️⃣ Compare with `for...in` (feel the difference)

```js
for (let index in fruits) {
  console.log(index);
}
```

Output:

```
0
1
2
```

```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

Output:

```
Apple
Banana
Cat
```

---

## 3️⃣ `for...of` with numbers

```js
const numbers = [10, 20, 30];

for (let num of numbers) {
  console.log(num);
}
```

Output:

```
10
20
30
```

---

## 🧠 Important rule (memorize)

* `for...of` → values
* `for...in` → keys / indexes

---

## 🧠 One-line takeaway

> **Use `for...of` when you want values directly from an array**
