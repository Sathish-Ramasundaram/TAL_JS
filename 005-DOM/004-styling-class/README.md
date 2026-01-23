# Styling & Classes:

There are two ways JS can change styles:
1. By adding/removing CSS classes ✅ (best way)
2. By setting inline styles ⚠️ (use sparingly) // Sparingly = rarely, only when really needed

1. classList.add()

Adds a class without removing existing classes.

initially: <div id="box" class="box">Hello</div>

const box = document.getElementById('box');
box.classList.add('dark'); // This mean <div id="box" class="box dark">Hello</div>

Result: <div id="box" class="box dark">Hello</div>

---

2. classList.remove()

Removes a specific class.

---

3. classList.toggle()
👉 What it does
Adds class if not present
Removes class if present

4. Inline Styles (style)
👉 What it does
Applies styles directly on the element
Eg:
            box.style.border = "2px solid red";

### important rule: 
Inline styles override CSS classes