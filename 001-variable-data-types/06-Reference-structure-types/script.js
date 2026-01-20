
// Object

const settings = { theme: "white" };

const page1 = settings;
const page2 = settings;

page1.theme = "green";

console.log(page2.theme); // green

// Array

const items = ["laptop", "charger", "Notebook"];

const employee1 = items;
const employee2 = items;

employee1.push("pen");

console.log(employee2);

// Function

function purchase() {
  console.log("Click here add to Cart");
}

const vegetable = purchase;
const Meat = purchase;

// change behavior via reference
Meat.message = "Add to cart";

console.log(vegetable.message);



