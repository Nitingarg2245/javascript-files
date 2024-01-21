//Currying is an advanced technique of working with functions.
//Currying  transforms a  function from callable as f(a, b, c) into callable as f(a)(b)(c).
//Currying transforms a function with multiple arguments f(a,b,c), into sequence of function with single argument f(a)(b)(c)
//Currying doesn’t call a function. It just transforms it.

function sum(a,b,c){
    return a+b+c;
}
console.log(sum(10,20,30));

//lets transform this with currying 

function sum1(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(sum1(10)(20)(30));

//lets see currying with arrow function

let sum2=(a)=>(b)=>(c)=>a+b+c;
console.log(sum2(10)(20)(30));

//infinite currying --transforms into a function which u can call  as many time u want for infinite  arguments 

function product(a){
    return function(b){
        if(b) return product(a*b);
        else return a;
    }
}

console.log(product(10)(10)(10)());//() last call with no argument is necessary for executing inifinite currying
console.log(product(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)());