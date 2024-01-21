//functions are block of code which is used to avoid duplicacy in our code 
//there are 3 ways we can with which we can create function in java script 
//first is function declaration 
function sum1(a,b){
    return a+b;
}

//2nd is ---function expression-- isme ek anonymous function bnate hai without name jisko use karne ke liye ek variable ko assign kar dete hai and fir us variable ke through call karte hai

let sum2=function(a,b){
    return a+b;
}

//3rd is arraow function 

let sum3=(a,b)=>{
    return a+b;
}
//more shorter way if there is only one statement inside arrow function to execute
let sum4=(a,b)=>a+b;

console.log(sum1(2,3));
console.log(sum2(3,3));
console.log(sum3(4,3));
console.log(sum4(2,8));

//hoisting in JS means using/calling something before its declration 
multiply(2,15);//ye dekho declare hone se pehle hi call kar dia fir bhi work kar rha this is hoisting
function multiply(a,b){
    console.log(a*b);
}
//but hoisting process doesnt work with function expression and arrow function it only work with function declaration 


//callback function ---The function that we pass as an argument to another function is called the callback function.
//Higher order function----A function that receives another function as an argument or that returns a new function or both is called Higher-order function

function high(sum){
    return function(){
        console.log("kya hall hai");
        console.log(sum(2,6));
    }
}
function sum(a,b){
    return a+b;
}
var result = high(sum);//high here is higherorder function and sum is a call back function 
result();


//lexical scope --is the ability for a function scope to access variables from the parent scope
function parent(){
        let x=1;
        function child(){
            let y=2;
            console.log(x,y);
        }
        child();   
}
parent();//the ability of child function to use the variable x in it is called lexical scope



//Scope chain--------JavaScript uses a scope chain to find variables accessible in a certain scope. When a variable is referred to, JavaScript will look for it in the current scope and continue to parent scopes until it reaches the global scope. This chain of traversed scopes is called the scope chain.

{
    let a=1;
    {
        let a=2;
        {
            let a=3;
            console.log(a);//current scope value ie 3 is printed 
        }
    }
}
{
    let a=1;
    {
        let a=2;
        {
            // let a=3;
            console.log(a);//blue {} mai a nhi mila to pink{}  wala a print kar dia
        }
    }
}
{
    let a=1;
    {
        // let a=2;
        {
            // let a=3;
            console.log(a)//blue {} mai a nhi mila to pink{} mai check kia  wha ni mila to yellow{} wala a print kar dia
        }
    }
}

//default parameter 
function sumTwoNumbers(a,b){
    if(!b) b=1;//this is how it is done before ES6 2015 we check the value of b and then assign a default value
    console.log(a+b);
}
sumTwoNumbers(4);

//but ES6 in 2015 introduced the default paramenter that makes the life much easier 

function sumThreeNumbers(a=0,b=0,c=0)
{
    console.log("the sum of 3 numbers is ", a+b+c);
}
sumThreeNumbers(5,10);

console.log("parameter destructring");
const obj={
    name:"John",
    age:28,
    city:"New York"
}
function parameterDestructing({name,age}){
    console.log(name);
    console.log(age);
}
parameterDestructing(obj);
console.log("nikit ais present");


