## Try this in console:

>> console.log(document);

You’ll see:
HTML structure
Methods
Properties

>> document.body.children;

returns all direct child elements of the <body> tag.

>> document.getElementById("title");

You'll see: the element that has id with title

>> document.querySelector(".box");   

return first match element

>> document.querySelectorAll(".box");   

All matched element. returns a NodeList.

## Create Elements:
const test = document.createElement('div');
test.textContent = 'Hello, DOM! (This text was added using JavaScript.)';
document.body.appendChild(test);

const test2 = document.createElement('div');
test2.textContent = 'This is another line added to the DOM at top.';
document.body.prepend(test2);

## Listen to Page events:
document.addEventListener("click", () => {
  console.log("Page clicked");
});



DOM Tree (conceptually)

document
 └── html
     ├── head
     │    └── title
     │         └── "My Page"
     └── body
          ├── h1
          │    └── "Hello"
          └── p
               └── "Welcome"

### Node (broader concept)
A Node is anything in the DOM tree.

Types of nodes:
Element node → <div>, <p>
Text node → "Hello"
Comment node → <!-- comment -->
Document node → document

### Element (more specific)
An Element is a type of Node — specifically HTML tags only.
✔ <div>
✔ <p>
❌ Text inside tags
❌ Comments

The document Object
document is the entry point to the DOM. Without document, JS cannot touch HTML.

document is an object.
And objects have two things:
👉 properties and methods

Properties (data / information)
Properties are values stored inside an object.
