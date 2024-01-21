//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined
// (function () {
//    // …
//  })();//u can pass arguments here 
 
//  (() => {
//    // …
//  })();
 
//  (async () => {
//    // …
//  })();

(function (str){
   console.log(`hello ${str}  from IIFE`);
})("nitin");
/*Use cases
Avoid polluting the global namespace
Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.*/

//these iife doesnt add to our global window object like our function does and  thus prevent pollution 

//lets see a very famous question

for(let i=1;i<=5;i++){
      setTimeout(() => {
         console.log(i);
      },2000);
}//1 2 3 4 5  
//let create block scope for every value of i so when the async fn starts its exection if finds it self everytime in differnet block scope of let

//with var this is not the case as it doesnt follow the block scope its value changes from 1 to 6 in global scope when the async function starts to execute
for(var i=1;i<=5;i++){
      setTimeout(() => {
         console.log(i);
      },2000);
}//6 6 6 6 6 6
//using iife we can create a function scope for var i everytime thus preventing the unexpected result
for(var i=1;i<=5;i++){
   (function(i){
      setTimeout(() => {
         console.log(i);
      },2000);
   })(i);
}//1 2 3 4 5