What it gives you
For objects → property names (keys)
For arrays → index values (as strings)

----------------------------

for...in is a JavaScript statement used to iterate over the enumerable keys (property names) of an object.

In simple words
for...in loops through the keys of an object, one by one.

What it gives you
For objects → property names (keys)

---

⚠️ Two IMPORTANT notes (final polish)
🔹 Note 1: for...in is BEST for objects

For arrays, this is okay for learning, but in real projects:

Prefer for or for...of for arrays

Use for...in mainly for objects

---

## 1️⃣ `for...in` gives you **keys**

### Example

```js
const person = {
  name: "Sathish",
  age: 30,
  city: "Chennai"
};

for (let key in person) {
  console.log(key);
}
```

### Output (console)

```
name
age
city
```

👉 This proves:

* `for...in` gives **property names (keys)**

---

## 2️⃣ `object[key]` gives you **values**

### Example

```js
const person = {
  name: "Sathish",
  age: 30,
  city: "Chennai"
};

for (let key in person) {
  console.log(person[key]);
}
```

### Output

```
Sathish
30
Chennai
```

👉 `person[key]` fetches the value for each key.

---

## 3️⃣ Keys + Values together (most common)

### Example

```js
const person = {
  name: "Sathish",
  age: 30,
  city: "Chennai"
};

for (let key in person) {
  console.log(key + ":", person[key]);
}
```

### Output

```
name: Sathish
age: 30
city: Chennai
```

---

## 🧠 Why we use `object[key]` (IMPORTANT)

This ❌ will NOT work:

```js
console.log(person.key);
```

Because:

* There is **no property literally named `key`**

But this ✅ works:

```js
console.log(person[key]);
```

Because:

* `key` holds `"name"`, `"age"`, `"city"`

---

## 🧠 Mental model (remember this)

```
key = "name" → person["name"]
key = "age"  → person["age"]
```

---

## 🧠 One-line takeaway (lock it in)

> **`for...in` gives keys; bracket notation gets values**

