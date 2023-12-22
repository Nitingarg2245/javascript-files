/* the NEW keyword in javasciprt 
1)it creates an empty object 
2)It binds this keyword of constructor function or of a class  to the newly created object(as we did with call,apply nd bind ) , which by default looks in the global window for its value and gives wrong and unexpected outputs.
3)assign properties and method using this keyword to the new created object
4)Return the newly created object */

//JavaScript Constructor Function --In JavaScript, a constructor function is used when we need to  create more than 1 object with same keys but different values otheriwse for one object we can simply use the object literals{}

function User(name,age){//Note: It is considered a good practice to capitalize the first letter of your constructor function.
    this.name=name;
    this.age = age;
    this.greet=function(){
        console.log(this.name,this.age);
    }
}
const user1={};
User.call(user1,"nitn",25);
console.log(user1);
user1.greet();

// with new keyword 
var user2 =new User("John",25);
var user3 =new User("nitin",26);
console.log(user2);
user3.greet();

//Each object created from the constructor function is unique. You can have the same properties as the constructor function or add a new property to one particular object
user2.habit="smoking";//this is unique to user 2 no other object can access this
console.log(user2.habit);
console.log(user3.habit);//undefined

//adding new properties using object  prototype--You can also add properties and methods to a constructor function using a prototype
User.prototype.grade="A";
console.log(user2.grade);
console.log(user3.grade);

//JavaScript Built-in Constructors
const a=new Object({key:1});// A new Object object
const b=new String("hello");// A new string object
const c=new Number(1);// A new number object
const d=new Boolean(true);// A new boolean object
console.log(a,b,c,d);
//Note: It is recommended to use primitive data types and create them in a normal way, such as const name = 'John';, const number = 57; and const count = true;You should not declare strings, numbers, and boolean values as objects because they slow down the program.

/*Classes are one of the features introduced in the ES6 version of JavaScript.
A class is a blueprint for the object. You can create an object from the class.
You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house. House is the object.
Since many houses can be made from the same description, we can create many objects from a class.
JavaScript class is similar to the Javascript constructor function, and it is merely a syntactic sugar.
Instead of using the function keyword, you use the class keyword for creating JS classes.. The properties are assigned in a constructor function. For example*/
//at line 9 the constructor function is defined below is how we can do the same with class
class userCreation{
    constructor(name,age){
        console.log("new object created");
        this.name=name;
        this.age = age;
    }
    //It is easy to define methods in the JavaScript class. You simply give the name of the method followed by () unlike the constructor function at line 9
    greet(){
        console.log(this.name,this.age);
    }
}
const user4=new userCreation("sahil",18);//jab bhi new objcet bnega constructor function apne aap call ho jayega 
console.log(user4);
user4.greet();
//A class should be defined before using it. Unlike functions and other JavaScript declarations, the class is not hoisted ,Classes always follow 'use-strict'. All the code inside the class is automatically in strict mode.