//Closure means that an inner function always has access to the variables and parameters of its outer function, even after the outer function has returned.
//***************************(matalb jab inner function return hota hai to wo pane sath ek jhole mai sare outer functin ke variables ko leke chlte hai kabhi bhi use karne ke liye ) */
//in javascript the functions which return other function are called higher order functions
function outerFunc(name){
    let age=10;
    return function(){
        console.log(`my name is ${name} and my age is ${age}`);
    }
}
let func =outerFunc("jack");
func();//so u can see that even after the outer function has retrued the inner function still has access to the  variables and parameters of its outer function 

function outerFunc1(name){
    return function(){
        console.log(`my name is ${name} and my age is ${age}`);
    }
    let age=10;//age is defined after the return call but still the inner function has access to all the variables defined anywhere in its outer function 
}
let func1 =outerFunc("jack");
func1();//working fine

//find the square of a number using closures 
//for such questions take the constant value such as power in the outer function and number in the inner function 
function square(power){
    return function (number){
        console.log("the square of the entered number is ",number**power);
    }
}
let sq =square(2);
sq(5);


//lets see the same using arrow functions 

let squared=(power)=>(number)=>number**power;
console.log(squared(3)(4));

function outer(){
    let x=10;
    return function inner(){
        let y=20;
        return function innermost(){
            let z=30;
            console.log("sum of x+y+z is",x+y+z);
        }
    }

}
let result=outer();
result()(); //as u can see clearly the innermost function has access to the variables defined in the outer and inner function even after they have returned this is called closures in JS

//REAL LIFE EXAMPLE FOR CLOSURES IS LIKE WE HAVE A SUBSCIBE BUTTON ON OUR WEBSITES WHEN THE USER HITS SUBSCIBE IT SAYS THANKU FOR  SUBSCIBING BUT IF U USER HITS SUBSCRIBED AGAIN IT POP UP A MEESAGE THAT U HAVE ALREADY SUBSCIIBED 

// let counter=0;
// function increaseCounter(){
//     if(counter<0){
//         counter++;
//         console.log("thanku for subscibing");
//     }
//     else console.log("u have already subscibed");
// }
//but the problem with above function is that our counter varaible is accesed to everyother function that can be mistakenly set to zero or some other value 

// function increaseCounter(){
//     let counter=0;
//     if(counter<0){
//         counter++;
//         console.log("thanku for subscibing");
//     }
//     else console.log("u have already subscibed");
// }
//in the above function although the counter has now become a local variable but still when ever the function increaseCounter()is called it aagain set to zero which we dont want 

//lets use closures 
let increaseCounter=function (){
    let counter=0;
    return function (){
        if(counter<1){
            counter++;
            console.log("thanku for subscibing");
        }
        else console.log("u have already subscibed");
    }
}
let counter=increaseCounter();
counter();
counter();
counter();
//this is h0w closures help us 


