/*------------our browser has javascript engine + web/browser  API's 
// this javascript engine has the call stack which handles the global and functional execution context and whenever the engine   encounters an async function (like--settimeout,setinterval,promise,fetch api ,dom api )it tells the broweser hey buddy it's your job to handle them these async function are broweers built in api which it handles and  the browser pushes  all the callback functions in thses api in order into callback queue/macro task queue ----Microtask Queue is similar to the Callback Queue(macrotask queue), but microtask queue has a higher priority than the callback queue. All the callback functions coming through promises and mutation observer will go inside the microtask queue. 
//The MutationObserver interface provides the ability to watch for changes being made to the DOM tree

--The event loop keeps running continuously , monitoring the call stack , callback queue and microtask queue.
-- When the call stack gets empty then the event loop first sees the callback functions waiting in the microtask queue  for execution it  pops the callback functions one by one from the microtask queue and pushes them to the call stack
-- at last when the call stack is empty and also the microtask queue is empty then event loop sees the callback functions waiting in the callstack queue  for execution  it  pops the callback functions one by one from the callback queue and pushes them to the call stack for execution 
priorties-------call stack>>>>microtask queue>>>>>>call back queue/macrotask queue 

Let us take a scenario of a callback function from the microtask queue create another callback function, and get pushed into the microtask queue. If this process goes in a loop, then the functions in the callback queue(macrotask queue) will not get any opportunity to execute. This is called starvation in the callback queue.*/

console.log("script starts here");
const firstPromise=new Promise((resolve, reject) => {
    resolve("hello");       
});
console.log(firstPromise);
firstPromise
.then(resp=>{
    console.log(`promise resolved : ${resp}`);
})
console.log("we are the in the middle of promise and set timeout");
setTimeout(()=>{
    console.log('timeout');
},0)
console.log("at the end of file");

//normal javascript executed first after that callback of promise executed and after that set time out callback executed 


//https://www.youtube.com/watch?v=8zKuNo4ay8E  --Asynchronous JavaScript & EVENT LOOP from scratch 🔥 | Namaste JavaScript Ep.15

/* lets know about small topics 
1)Call stack--JavaScript Call Stack is a mechanism to keep track of multiple function calls or we can say call stack is to manage execution contexts. for details follow the link below
https://www.datainfinities.com/8/what-is-call-stack-in-javascript


2)APIs--An API is a set of programming code or a function  that enables data transmission between one software product and another,It also contains the terms of this data exchange 
Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily.They abstract more complex code away from you, providing some easier syntax to use in its place. .for example we see maps usage in the zomato app so that zomato app is using the google's map API for showing that in their app 

The working principle of an API is commonly expressed through the request-response communication between a client and a server. The client is any front-end application that a user interacts with. The server is in charge of backend logic and database operations. In this scenario, an API works as a middle layer between the client and the server, making it possible to send data requests and get responses.like a fetch api request data from the url and get a repsonse 



+++++++++++++++++++++++++Web APIs or Browser APIs are built into your web browser and are able to expose data from the browser and surrounding computer environment and do useful complex things with it. setTimeout(), DOM APIs, fetch(), local storage, location, and console are some examples for Web APIs.

--------------------------------Common browser APIs
In particular, the most common categories of browser APIs you'll use (and which we'll cover in this module in greater detail) are:

a)APIs for manipulating documents loaded into the browser. The most obvious example is the DOM (Document Object Model) API, which allows you to manipulate HTML and CSS — creating, removing and changing HTML, dynamically applying new styles to your page, etc. Every time you see a popup window appear on a page or some new content displayed, for example, that's the DOM in action. Find out more about these types of API in Manipulating documents.

b)APIs that fetch data from the server to update small sections of a webpage on their own are very commonly used. This seemingly small detail has had a huge impact on the performance and behavior of sites — if you just need to update a stock listing or list of available new stories, doing it instantly without having to reload the whole entire page from the server can make the site or app feel much more responsive and "snappy". The main API used for this is the Fetch API, although older code might still use the XMLHttpRequest API. You may also come across the term Ajax, which describes this technique. Find out more about such APIs in Fetching data from the server.

c)Audio and Video APIs like HTMLMediaElement, the Web Audio API, and WebRTC allow you to do really interesting things with multimedia such as creating custom UI controls for playing audio and video, displaying text tracks like captions and subtitles along with your videos, grabbing video from your web camera to be manipulated via a canvas (see above) or displayed on someone else's computer in a web conference, or adding effects to audio tracks (such as gain, distortion, panning, etc.).
Device APIs enable you to interact with device hardware: for example, accessing the device GPS to find the user's position using the Geolocation API.

d)Client-side storage APIs enable you to store data on the client-side, so you can create an app that will save its state between page loads, and perhaps even work when the device is offline. There are several options available, e.g. simple name/value storage with the Web Storage API, and more complex database storage with the IndexedDB API.
Common third-party APIs

---------------Third-party APIs come in a large variety; some of the more popular ones that you are likely to make use of sooner or later are:

---The Twitter API, which allows you to do things like displaying your latest tweets on your website.
Map APIs, like Mapquest and the Google Maps API, which allow you to do all sorts of things with maps on your web pages.
---The Facebook suite of APIs, which enables you to use various parts of the Facebook ecosystem to benefit your app, such as by providing app login using Facebook login, accepting in-app payments, rolling out targeted ad campaigns, etc.
---The Telegram APIs, which allows you to embed content from Telegram channels on your website, in addition to providing support for bots.
----The YouTube API, which allows you to embed YouTube videos on your site, search YouTube, build playlists, and more.
---The Pinterest API, which provides tools to manage Pinterest boards and pins to include them in your website.
---The Twilio API, which provides a framework for building voice and video call functionality into your app, sending SMS/MMS from your apps, and more.
----The Mastodon API, which enables you to manipulate features of the Mastodon social network programmatically
*/