//Prototypes are the mechanism by which JavaScript objects inherit features from one another.
//hindi mai smjhe to papa hai prototype jha se bche inherit karte hai and in javascript har chiz ka final baap object hi niklega 
//When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.
//object ka prototype dekhna hai to objcet.__proto__ use krenge 
//function ka prototype ke liye function.prototype use krenge
let person = {
    name: "John Doe",
    age:43,
    occupation:"Software Engineer"
}
console.log(person.__proto__);//ye final object hai jo sabka final papa hai last mai iske bad null milga
console.log(person.__proto__.__proto__);//papa ka prototype check krenge to null aayega
console.log(person.protype);//.prototype objcet pe kam ni karta function pe karta hai

let person1 = {
    branch: "ece",
    grade:"A",
    Stack:"javascript",
    __proto__:person,//iske papa set kar diye
}
console.log(person1.age);//ab person 1 apne papa ki bhi sari properties use kar skta hai 

let person2= {
    __proto__:person1,//is se ye person 2 apne papa person 1 aur uske papa person ki property acces kar lega
   
}
// Object.setPrototypeOf(person2,person1);//aisi bhi set kar skte hai prototype 
console.log(person2.grade);
console.log(person2.name);//this is called prototypical inheritence


//in javascript every primitive and non-primitive data type at the end is a child of object as u can see below
let arr=[];
console.log(arr);
console.log(arr.__proto__);//[[Prototype]]:Array(0) which has all the array property and methods
console.log(arr.__proto__.__proto__);//[[Prototype]]:Object whi final sabka baap yhi hai
console.log(arr.__proto__.__proto__.__proto__);//ab null hai iske bad to 

//if u want to add some property in list of bydefault properties of array 
// arr.prototype.hi="hello mr array";//doesnt work ,u have to add it to the constructor function 
Array.prototype.hi="hello mr array";//u have to add it to the constructor function 
console.log(arr.hi);

let str="hello";
console.log(str);
console.log(str.__proto__);//[[Prototype]]:String which has all the string property and methods
console.log(str.__proto__.__proto__);//[[Prototype]]:Object whi final sabka baap yhi hai
console.log(str.__proto__.__proto__.__proto__);//ab null hai iske bad to 

let bool=true;
console.log(bool);
console.log(bool.__proto__);//[[Prototype]]:Bolean which has all the boolean property and methods
console.log(bool.__proto__.__proto__);//[[Prototype]]:Object whi final sabka baap yhi hai
console.log(bool.__proto__.__proto__.__proto__);//null hai iske bad to 

let arr1=new Array();//we can also use constructor function still the same result for array as above
console.log(arr1);

//let see how  prototype work with functions
function func(){};
console.log(func.prototype);//it gives us an object 
console.log(func.prototype.__proto__);//[[Prototype]]:Object whi final sabka baap yhi hai
console.log(func.__proto__);//not the right way to check prototypes for functions


function User(name,age)
{
    this.name=name;
    this.age=age;
    this.greet=()=>{
        console.log("hellow world");
    }
}
let user=new User("nitin",29);
console.log(user);
console.log(user.__proto__);//{constructor: ƒ}we have an object with the constructor function as key value pair 
console.log(user.__proto__.__proto__);//[[Prototype]]:Object whi final sabka baap yhi hai
console.log(User.prototype==user.__proto__);

/*lets set the function prototype to mere dwara bnaya gya  object 
User.prototype=person2;
let user1=new User("garg",20);
console.log(user1);//user 1 ka prototype=> empty person 2 object ,iska prototype=>person 1 object ,iska prototype =>person objct ,iska prototype=>baap of all objects 
console.log(user1.grade);*/

//but i dont want ki ye greet wala function har object mai alag se copy ho to hmm isko apne constrctor fn ke prototype mai define kar denge jis se bs ye link rahega
function craeteUser(name,age)
{
    this.name=name;
    this.age=age;
}

craeteUser.prototype.greet=function(){
    console.log(`hello ${this.name}`);
}
let user1=new craeteUser("rakesh",36);
console.log(user1);//now we dont have that copy of function greet in every objcet we have linkd it
user1.greet();

