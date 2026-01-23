# Events: 
Events allow JavaScript to respond to user interactions like clicks, keyboard input, and form submissions.


## Syntax:

element.addEventListener("eventName", function () {
  // code to run when event happens
});



### Click

Example: 
            button.addEventListener('click', () => {
                message.textContent = "Button was clicked!";
            })

### Mouseover: mouse moves over element

Example: 
 hoverArea.addEventListener('mouseover', () => {
                hoverArea.style.backgroundColor = 'lightgreen';

### keydown: key pressed on keyboard

Eg:
inputField.addEventListener('keydown', (e) => {
                output.textContent = `You pressed: ${e.key}`;

### submit: form submission 

Eg: 
form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Form submitted!');

### change: Triggered when value changes and focus leaves.
What happens step by step
1️⃣ User clicks inside input
2️⃣ User types: Sathish
3️⃣ Nothing happens yet ❌
4️⃣ User clicks outside the input OR presses Tab
5️⃣ ✅ change event fires
6️⃣ Console shows:
Final value: Sathish

### input: Fires on every keystroke
Good for live search, validation

### Event Object (event / e)

common events:
event.type          // event name
event.target        // element that triggered event
event.currentTarget // element listener is attached to
event.clientX       // mouse X position
event.clientY       // mouse Y position
event.key           // pressed key (keyboard events)

When an event happens, browser gives you an event object.
This object contains:
What happened
Where it happened
Which element triggered it

Eg:
eventbtn.addEventListener('click', (event) => {
                console.log("Event Object:", event); // full event object

#### Event Target: element that triggered the event

Eg:
document.addEventListener("click", (e) => {
  console.log(e.target);
});

