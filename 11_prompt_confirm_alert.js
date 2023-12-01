/*
1)alert
---shows a message.
2)prompt
---shows a message asking the user to input text. It returns the text always a string or, if Cancel button or Esc is clicked, then null.
3)confirm
shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.

All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

There are two limitations shared by all the methods above:
a)The exact location of the modal window is determined by the browser. Usually, it’s in the center.
b)The exact look of the window also depends on the browser. We can’t modify it.
*/  

// alert("hey welcome to the site");
// let input=prompt("enter your age",50);//50 default value jo pehle si dikegi in the window
// alert(`your age is ${input}` );
// let bool=confirm("are you sure about your age");//return true or false if we click ok or cancel
// console.log(bool);//true is logged on the console after pressing ok 

//q1-- use prompt to take input and if it is >4 then redirect the page to google.com 
 let inp=Number(prompt("enter a number"));//typecaseting a string to number
 if(inp>4) location.href="https://google.com";

 //q2-- take colour preference from the user and change the background of the document accordingly
 let col=prompt("what's your favourite color for background?");
 document.body.style.background=col;
