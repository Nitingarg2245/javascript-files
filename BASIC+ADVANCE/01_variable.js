//variables are the container used for storing the data 
//const,var,let are 3 ways through which we can decalre the variables 
// Block Scope: ES6 introduced the let and const keywords, which allow variables to have block scope. This means that variables defined within a block of code (such as within an if statement or a for loop) can only be accessed within that block. unlike var which has functional scope 


var a=3;//global scope 
let b=7;//global scope 
const c=7;//global scope

function blockScope()
{
    var d=3;//function scope 
    let e=7;//function scope 
    const f=7;//function scope
    {
        var g=9// bs yhi pe difference aa gya var ka yha pe functional scope hoga  ye var pure function mai chlega but let and const bs in {} mai chlenge 
        let h=10;//block scope 
        const i=12;//block scope
    }
    console.log(g);
    // console.log(h);//error-h is not defined wo bs apne block mai hi chlega

}
blockScope();
var a=4;
console.log(a);//var can be redeclared and reassigned

