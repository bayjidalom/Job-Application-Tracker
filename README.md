### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: 

getElementById() -> Finds one element using its id.

getElementsByClassName() -> Finds many elements using a class name.

querySelector() -> Finds the first element using a CSS selector.

querySelectorAll() -> Finds all elements using a CSS selector.


### 2. How do you create and insert a new element into the DOM?
Answer:

We create a new element using document.createElement().

Then we add it to the page using appendChild().

### 3. What is Event Bubbling? And how does it work?
Answer:
Event Bubbling means an event starts from the clicked element and then goes to its parent elements.

Such as:

If we click a button inside a div ->
first button runs -> then div -> then body.


### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer:

Event Delegation means we add one event listener to a parent element and handle events of its child elements.

🟢 It is useful because:
👉🏻 It uses less code.
👉🏻 It improves performance.
👉🏻 It works for new elements added later.


### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:

preventDefault() -> Stops the default browser action.

stopPropagation() -> Stops the event from going to parent elements.
