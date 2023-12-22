//The Document Object Model (DOM) is a web (API) for manipulating HTML documents.
// The DOM represents an HTML document as a tree of nodes. The DOM provides functions that allow you to add, remove, and modify parts of the document effectively.
//when the broweser loads the html file it adds the DOM ,a document property  to the global window object 
console.log(window);//u can see in this 
console.log(document);//direct access


//asyn vs defer in the script attricbute
//If async is present: The script is downloaded in parallel to parsing the html page, and executed as soon as it is available (evn if the html loading is incomplete)
// If defer is present (and not async): The script is downloaded in parallel to parsing the page, and executed after the only after the html page has finished parsing
// If neither async or defer is present: The script is downloaded and executed immediately, blocking the later html parsing 

/*
-----------------------------------------NORMAL------------------------------------------------
html file parsing-************                       *********************
js file download-             ********
js file execution-                    ***************      
-----------------------------------------async------------------------------------------------
html file parsing-********************                 *********************
js file download-             ********
js file execution-                    *****************      
-----------------------------------------NORMAL------------------------------------------------
html file parsing-***************************************
js file download-             ********
js file execution-                                        ***************      

*/


//element slections

//1)The document.getElementById() returns a DOM element specified by an id or null if no matching element found.If multiple elements have the same id, even though it is invalid, the getElementById() returns the first element it encounters.
const username=document.getElementById("username");
console.log(username);

//2)The getElementsByClassName() method returns an array-like of objects(HTML collection) of  elements with a specified class name. The getElementsByClassName() method is available on the document element or any other elements.
const allFormElements=document.getElementsByClassName("form-group");
console.log(allFormElements);

//3)The getElementsByTagName() method accepts a tag name and returns a live HTMLCollection of elements with the matching tag name in the order which they appear in the document.The HTMLCollection is an array-like object.
const allLables=document.getElementsByTagName("label");
console.log(allLables);

//4)getelementsbyName -The getElementsByName() accepts a name which is the value of the name attribute of elements and returns a live NodeList of elements.
const phone=document.getElementsByName("phone");
console.log(phone);
