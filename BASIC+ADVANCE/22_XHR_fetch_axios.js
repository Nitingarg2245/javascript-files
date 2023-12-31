//https://javascript.info/fetch  visit the website for full details
/*JavaScript can send network requests to the server and load new information whenever it’s needed.
For example, we can use a network request to:
--Submit an order,
--Load user information,
--Receive latest updates from the server,etc.
…And all of that without reloading the page!
1)using XMLhttprequest(XHR)
2)using fetch();
3)axios


1)XMLHttpRequest is a built-in browser object that allows to make HTTP requests in JavaScript.
Despite having the word “XML” in its name, it can operate on any data, not only in XML format. We can upload/download files, track progress and much more.
Right now, there’s another, more modern method fetch, that somewhat deprecates XMLHttpRequest.
In modern web-development XMLHttpRequest is used for three reasons:
Historical reasons: we need to support existing scripts with XMLHttpRequest.
We need to support old browsers, and don’t want polyfills (e.g. to keep scripts tiny).
*/
const URL="https://jsonplaceholder.typicode.com/users";  //the url on which we are going to make request
// a.) Create a new XMLHttpRequest object
 const XHR=new XMLHttpRequest();
 
//  We can use xhr.responseType property to set the response format:
//  ""-- (default) – get as string,
//"json"– get as JSON (parsed automatically).
 XHR.responseType="json";
 //b)configure the reuqest --xhr.open(method, URL, [async, user, password])
 XHR.open("GET",URL);
 //c)Send the request over the network
 XHR.send();

// d) Listen to xhr events for response.
// These three events are the most widely used:
// load – when the request is complete (even if HTTP status is like 400 or 500), and the response is fully downloaded.
// error – when the request couldn’t be made, e.g. network down or invalid URL.
// progress – triggers periodically while the response is being downloaded, reports how much has been downloaded.
XHR.onload=function(){
    console.log("status "+XHR.status);
    if(XHR.status==200)console.log(XHR.response);
    else console.log("error in fetching data");
}//200 means everything is fine

XHR.onerror=function(){
    console.log("Error : "+XHR.status)
}

XHR.onprogress=function(event){
    // triggers periodically
  // event.loaded - how many bytes downloaded
  // event.lengthComputable = true if the server sent Content-Length header
  // event.total - total number of bytes (if lengthComputable)
  console.log(event);
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`); // no Content-Length
  }
}


/*2)The fetch() method is modern and versatile, so we’ll start with it. It’s not supported by old browsers (can be polyfilled), but very well supported among the modern ones.
The basic syntax is:
let promise = fetch(url, [options])
options – optional parameters: method, headers etc.
Without options, this is a simple GET request, downloading the contents of the url.
The browser starts the request right away and returns a promise that the calling code should use to get the result.*/
const URL1="https://jsonplaceholder.typicode.com/users";

fetch(URL1)//a promise is returned with state :fulfilled ,result :response {}
.then((resp)=>{
    if(resp.ok) return resp.json();
    else throw new Error("not a valid url")
})
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
// Response provides multiple promise-based methods to access the body in various formats:
// response.text() – read the response and return as text,
// response.json() – parse the response as JSON,

//lets see how to post something on the server

let user = {
    "id": 11,
    "name": "Nitin Garg",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  
async function getData(){
    const response=await fetch(URL,{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(user)
    })
    const data=await response.json();
    console.log(data);
    
}
getData();

/*
3)What is Axios?
Axios is lightweight package and use to make HTTP requests in plain javascript or in  Any Javascript Library like React, Angular or Vue. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. If you use Fetch method in Javascript, Axios is the “Easy to use” Version of Fetch.


Advantages of using Axios
Axios by default Work in JSON format.So no more JSON parsing.(response .json() not required here )
Make all types of HTTP requests (GET, POST, PUT, DELETE)

how to use axios in plain java script The following script src will include axios.js in the head section of your HTML code   
<script src="https://unpkg.com/axios/dist/axios.min.js"></script> 

How to install Axios in React App
Like any other npm package, you have to simply install Axios package in your React Application and import axios from the axios package*/

axios.get(URL)
.then((resp)=>console.log(resp.data))

async function getdatafromaxios(){
  const resp= await axios.get(URL);
  console.log(resp.data);
}
getdatafromaxios();



