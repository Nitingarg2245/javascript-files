//https://www.javascripttutorial.net/javascript-dom/  in depth explanation 
/*o get the parent node of a specified node in the DOM tree, you use the parentNode property: 
The parentNode is read-only.
The Document doesnt not have a parent. Therefore, the parentNode will always be null.
If you create a new node but haven’t attached it to the DOM tree, the parentNode of that node will also be null*/
const element1=document.querySelector(".nav-item");
console.log(element1.parentNode); // Output: <ul class="nav">...</ul>
console.log(element1.parentNode.children);//childen return all element only
console.log(element1.parentNode.childNodes);//returns all nodes--text node,comment node,element node


//The nextElementSibling returns the next sibling of an element or null if the element is the last one in the list.
// The previousElementSibling returns the previous sibling of an element or null if the element is the first one in the list.

//The firstChild and lastChild return the first and last child of a node, which can be any node type including text node, comment node, and element node.
// The firstElementChild and lastElementChild return the first and last child Element node.
// The childNodes returns a live NodeList of all child nodes of any node type of a specified node. The children return all child Element nodes of a specified node.