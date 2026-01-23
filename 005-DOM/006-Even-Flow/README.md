# Event Flow (How events travel)

When you click an element, the event does NOT stay there.
It travels through the DOM in phases.

The 3 Event Phases
1️⃣ Capturing phase (top → down)
2️⃣ Target phase (actual element)
3️⃣ Bubbling phase (bottom → up)

## Event Bubbling (DEFAULT)
👉 What is bubbling?
Event starts at the target element and bubbles up to its parents.
button → div → body → html → document

Events bubble up by default so parents can handle child actions.

Example: 
<div id="parent">
            <div id="child">
                <button id="grandChild">Click Me</button>
                <p>Click the button to see event flow in action. Check the console for output.</p>
            </div>
        </div>

        <script>
            const parent = document.getElementById('parent');
            const child = document.getElementById('child');
            const grandChild = document.getElementById('grandChild');

            parent.addEventListener('click', () => {
                console.log('Parent clicked');
            });

            child.addEventListener('click', (event) => {
                console.log('child clicked');
            });

            grandChild.addEventListener('click', (event) => {
                console.log('grandChild clicked');
            });



        </script>

Output:
grandChild clicked
child clicked
parent clicked

## stoPropagation()
What it does
Stops the event from moving further in the DOM. stop flow

Example: 
child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child clicked");
});

Output: 
grandChild clicked


## Event Capturing (OPTIONAL)
👉 What is capturing?
Event travels from top → down to the target.
document → html → body → div → button

Example: 

        <div id="parent">
            <button id="child">Click me</button>
        </div>


        <script>
            parent.addEventListener('click', () => {
            console.log("Parent bubbling");
            });

            parent.addEventListener('click', () => {
                console.log("Parent Capturing");
            }, 
            true
            );

            child.addEventListener('click', () => {
                console.log("Child Bubbling");
            });
        </script>

Output: 
Parent Capturing
Child Bubbling
Parent bubbling

❌ WITHOUT BUBBLING (bad / non-scalable)
👉 Each element has its own event listener.
Real problems ❌
One listener per button
Hard to maintain
Adding new cart item = more JS
Poor performance for large lists

With Event Bubbling:
One listener handles hundreds of items.
Business logic lives in one place.
React does this internally:

Event bubbling allows a single parent event listener to handle events from multiple child elements, improving performance and scalability.

Real time Example: Remove Items from cart (code uses event delegation to detect clicks on remove buttons and identify the corresponding item using data attributes.)





