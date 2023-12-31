/*Promise is an object in JS which represents the eventual completion or failure of an async operation and its result
A Promise is a proxy for a value not necessarily known when the promise is created
A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.


A promise is said to be settled if it is either fulfilled or rejected, but not pending.*/

let promise1 =new Promise(function(resolve,reject){
     
});
console.log(promise1);//{PromiseState: "pending", PromiseResult:undefined}

let promise2 =new Promise(function(resolve,reject){
     resolve("hello");
});
console.log(promise2);//{PromiseState: "fulfilled", PromiseResult:"hello"}


let promise3 =new Promise(function(resolve,reject){
     reject(new Error("failed"));//In case something goes wrong, the executor should call reject. That can be done with any type of argument (just like resolve). But it is recommended to use Error objects (or objects that inherit from Error)Following best practices often involves using standardized patterns. In JavaScript, using Error objects for error handling is considered a best practice. It aligns with the expectations of developers working with your code and promotes a common approach to error handling.
});
console.log(promise3);//{PromiseState: "rejected ", PromiseResult:error }



//The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result.
/*executor function  arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.

When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

resolve(value) — if the job is finished successfully, with result value.
reject(error) — if an error has occurred, error is the error object.
So to summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls resolve if it was successful or reject if there was an error.

The promise object returned by the new Promise constructor has these internal properties:

a)state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
b)result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.*/

// The executor should call only one resolve or one reject. Any state change is final.

// All further calls of resolve and reject are ignored:

let promise4 = new Promise(function(resolve, reject) {
  resolve("done")

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});

//the properties state and result of the Promise object are internal. We can’t directly access them. We can use the methods .then/.catch/.finally for that. They are described below.As these methods return promises, they can be chained.

//the most important, fundamental one is .then.

// The syntax is:

// promise.then(
//   function(result) { /* handle a successful result */ },
//   function(error) { /* handle an error */ }
// );
// The first argument of .then is a function that runs when the promise is resolved and receives the result.
// The second argument of .then is a function that runs when the promise is rejected and receives the error.

promise2.then((result)=>console.log(result));//for handling the result
console.log(promise2.then((result)=>console.log(result)));//this .then is also returning a  promise 
//so we can chain more then blocks
const newPromise2=promise2.then((result)=>console.log(result));
newPromise2.then((result)=>console.log(result));

promise3.then((result)=>{},(error)=>console.log(error))//2nd callback inside then for rejection executed 
promise3.then(null,(error)=>console.log(error))//another way

//or for errors we can simply use .catch

promise3.catch((error)=>console.log(error));


//.fainally()------A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. That’s all right, as our task is usually to perform “general” finalizing procedures.
// A finally handler doesn’t get the outcome of the previous handler (it has no arguments). This outcome is passed through instead, to the next suitable handler.
// If a finally handler returns something, it’s ignored.
// When finally throws an error, then the execution goes to the nearest error handler.

let isLoading=true;
const getData=new Promise((resolve,reject)=>{
    if(Math.random()>0.5) resolve("work done");
    else reject(new Error("unfinished task"));
})
getData
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
.finally(()=>isLoading=false);//this will do its work wether the promise gets reolsved or rejcted 