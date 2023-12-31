// There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

// Async functions
// Let’s start with the async keyword. It can be placed before a function, like this:
debugger;
async function f1() {
}
console.log(f1());


async function f2() {
  return 1;
}
console.log(f2())


async function f3() {
  return Promise.resolve(2);
}
console.log(f3());
// from the f1,f2 and f3 it is clear that The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically(as in f1 and f2)

// There’s another keyword, await, that works only inside async functions, and it’s pretty cool.
// let value = await promise;//error--Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
// The keyword await makes JavaScript wait until that promise settles and returns its result.

// Here’s an example with a promise that resolves in 1 second:

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}
f();
// The function execution “pauses” at the line (*) and resumes when the promise settles, with result becoming its result. So the code above shows “done!” in one second.

// Let’s emphasize: await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

promise1=new Promise((resolve,reject)=>{
  setTimeout(() => {
      resolve("hi from promise  1");
  }, 10000);
})
promise2=new Promise((resolve,reject)=>{
  setTimeout(() => {
      resolve("hi from promise  2");
  }, 5000);
})
promise3=new Promise((resolve,reject)=>{
  setTimeout(() => {
      resolve("hi from promise  3");
  }, 13000);
})
promise4=new Promise((resolve,reject)=>{
  setTimeout(() => {
      resolve("hi from promise  4");
  }, 1000);
})
promise5=new Promise((resolve,reject)=>{
  setTimeout(() => {
      resolve("hi from promise  5");
  }, 5000);
})
promise6=new Promise((resolve,reject)=>{
  setTimeout(() => {
      resolve("hi from promise  6");
  }, 15000);
})
async function getdata (){
  let result1=await promise1;
  console.log(result1);
  
  
  let result2=await promise2;
  console.log(result2);


  let result3=await promise3;
  console.log(result3);
  let result4=await promise4;
  console.log(result4);
  
  
  let result5=await promise5;
  console.log(result5);


  let result6=await promise6;
  console.log(result6);

}
getdata();

//yr jab ek hi function mai ek se jyada await ho wo ek sath chal jayenge jab first wale ke pas result aayega to wo aage dekhega kitne log aur ready hai un sab ka bhi log kar dega jaisi first await  10 swconds ke bad ready tha to usne aage dekha to 2nd bhi ready tha but 3rd ka time pda tha to pehle first and second execute hue fir jab hmara 3rd await ready hua to usne dekha ki aage hmare 4th and 5th bhi ready  to 3rd,4th and 5th ek sath execute hue and fir 6th execute hua

const URL="https://jsonplaceholder.typicode.com/users"; 

async function getUserData(){
  const response =await fetch(URL);
  return response.json();
}
getUserData()
.then((response)=>console.log(response));


