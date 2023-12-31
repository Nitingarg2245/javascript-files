//--1)Creating a new element --The document.createElement() creates a new HTML element.
// The element.appendChild() appends an HTML element to an existing element.
//The appendChild() is a method of the Node interface. The appendChild() method allows you to add a node to the end of the list of child nodes of a specified parent node
//The appendChild() can be used to move an existing child node to the new position within the document.

let listitem=document.createElement("li");
listitem.textContent="write here";
listitem.className="hellothere";
listitem.id="1";
document.querySelector(".nav-items").appendChild(listitem);
let pTag=document.createElement("p");
pTag.textContent="hey there kaisi ho";
listitem.appendChild(pTag);

console.log(document.querySelector(".hellothere"));

//text content,innertext,innerhtml

console.log(document.querySelector(".nav-item").textContent);
console.log(document.querySelector(".nav-item").innerHTML);
console.log(document.querySelector(".nav-item").innerText);
//As you can see clearly from the output, the textContent property returns the concatenation of the textContent of every child node, excluding comments (and also processing instructions).
// On the other hand, the innerText takes the CSS style into account and returns only human-readable text.
//we mostly use textcontent to set a text for a node. 


// https://www.javascripttutorial.net/javascript-dom/javascript-documentfragment/
/*The DocumentFragment interface is a lightweight version of the Document that stores a piece of document structure like a standard document. However, a DocumentFragment isn’t part of the active DOM tree.

If you make changes to the document fragment, it doesn’t affect the document or incurs any performance
there are 2 ways to create  a document fragment object 
------let fragment=new Documentfragment();
// ------let fragment=documnet.createdocumentfragment()*/

let fragment=document.createDocumentFragment();
let listitem1=document.createElement("li");
listitem1.textContent="nya item";
fragment.appendChild(listitem1);
document.querySelector(".nav-items").appendChild(fragment);


