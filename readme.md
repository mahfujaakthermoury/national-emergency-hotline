1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById- It returns an element according to a selected ID. Also it performe very fast
getElementsByClassName- It returns more elements (HTMLColllection) according to a class name. It is slower than getElementById

querySelector- It return first Matching Element. Any type of selector can be used (#id, .class) 
querySelectorAll-  It return all Matching Elements (NodeList). Any type of selector can be used (#id, .class).


2) How do you create and insert a new element into the DOM?
Ans: 
   
<div id="add-title">
<h1>Hello</h1>
</div>

<script>

const h1= document.createElement('h1');
h1.innerText= 'This is title';

const mainContainer= document.getElementById('add-title');
mainContainer.appendChild(h1);

</script>

3) What is Event Bubbling and how does it work?

Ans: Event Bubbling is a machanism of DOM where an element triggered on a child element propsgste upword through it's ancestor. 
If an event hendler is set for the element, the event handler is triggered. Tend the events bubbles up to the parents . The event continue to bubble, until it reach the top (the document element). 


4) What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a technique in JS where a single event listener is attached to a parent element to manage event from multiple child elements. It catch events from child element without adding separate listeners for each child and help to memory optimization.


5) What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() is used to prevent the default action that belongs to the event. It does not return value
 And stopPropagation() methods is used to stop the event from bubbling up to the parent element. It does not have any return type.