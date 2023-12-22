//In JavaScript, the this keyword is a special identifier that is automatically defined within the scope of every function. Its value is determined by how the function is called, and it refers to the object on which the function is invoked

//1-------------Global Context:
console.log(this);//as u can see see this refers to the global object in the browser and -->{} in node enviroment  until some other objects invoke it
window.a=1;//global object mai ek property add kar di
console.log(this.a); 

//2-------------this inside a function 
function hello(){
    console.log(this);//window objct
    console.log(this.name);//will give u undefined
}
hello();//as it is just a functional call without the involvement of any object so it will be taken as window.hello() where this refers to the global object 

//we can avoid this default this behaviour by using "use strict"
function hello1(){
    "use strict"
    console.log(this);//undefined
}
hello1();

//3-----------this inside a method--a function inside an object is called method of that object 
const person={
    name:"nitin",
    age:25,
    sex:this,//this here is not inside any function so it will act as global object 
    // info:function(){
    //     console.log(this.name);
    // }
    //easy way to write the key with function 
    info(){
        console.log(this.name);
    }
} 
console.log(person.sex);
person.info();

//4--------------this inside a constructor function --a function which is used create object using new keyword 
function User(name,age){
    this.name=name;
    this.age=age;
}
const user1=new User("nitin",25);
const user2=new User("ashish",26);
console.log(user1);
console.log(user2);

//5------------------this Inside Inner Function of a method
const user = {
    name : 'Jack',
    age: 25,
    greet() {
        console.log(this);        // {name: "Jack", age ...}
        console.log(this.age);  // 25
        // inner function
        function innerFunc() {
            // this refers to the global object
            console.log(this);       // Window { ... }
            console.log(this.age);    // undefined
        }
        innerFunc();//here this is defined under innerfunc that's true but this  fn is not invokd by any object so it will refer to global object 
    }
}
user.greet();

//6----------this Inside Arrow Function --Arrow functions do not have their own this. When you use this inside an arrow function, this refers to its parent function  scope object.
const newuser = {
    name : 'Jack',
    age: 25,
    greet:()=> {//there is no parent function so it will refer to global object 
        console.log(this);        // window object 
        console.log(this.age);  // undefined
    }
        
}
newuser.greet();

const newuser1 = {
    name : 'Jack',
    age: 25,
    hi(){
        greet=()=> {//parent function for arrow function exist  
            console.log(this);        // this here refers to the newuser1
            console.log(this.age);  // 25
        }
        greet();
    }
        
}
newuser1.hi();




//call apply and bind method --In JavaScript, the call(), apply(), and bind() methods are used to explicitly(manually) set the value of this in a function to some object of choice. They allow you to control the context in which a function is invoked.

//The call() method is used to invoke a function with a specified this value and arguments provided individually.
function greeting1(name){
    console.log(`hello ${name},this is ${this.name} on the other side of call`);
}
const obj1={name:"nitin"};
//greeting.call(name of the obj jisko this se refer karwana hai ,arguments seprated by comma)
greeting1.call(obj1,"Kiran");

//********************************************************************************* */
//the apply() method is similar to call(), but it takes arguments as an array.(yad rkhne ki trick apply mai a ka mtalab arguments as array)

function greeting2(name,age){
    console.log(`hello ${name} of age ${age},this is ${this.name} on the other side of call`);
}
const obj2={name:"nitin"};
//greeting.call(name of the obj jisko this se refer karwana hai ,arguments in array)
greeting2.apply(obj2,["Kiran",25]);

//******************************************************************************* */
// the bind() method returns a new function with a specified this value and initial arguments,seprated by comma It doesn't invoke the function immediately but allows you to invoke it later
function greeting3(name){
    console.log(`hello ${name},this is ${this.name} on the other side of call`);
}
const obj3={name:"nitin"};
//greeting.call(name of the obj jisko this se refer karwana hai ,arguments seprated by comma)
const bound=greeting3.bind(obj3,"Kiran");
bound();