//objects in JS store key-value pairs where keys are unique if u try to add a same name key again it will overwrite the previous one and all the keys are by default in string form so isme marzi hai aapki key ko double quotes mai likhna hai ya nhi dono chal jayenge
const person={
    name:"John",
    age:5,
    "branch":"ece",
    name:"nitin",
    "progress report":"positive"
}
console.log(person);//john ki jagah nitin aa jayega
// person=5;// error-Assignment to constant variable.

//2 ways to acces the object keys
console.log(person.age);
console.log(person["age"]);// is []  bracket se access karna hai to hmesha "" use krne pdenge as key is in string form by default but agar aapki key ek varaible mai store hai tab bs us variable ka name kafi hai
let key="age";
console.log(person[key]); 

//agar aapne progress report access karni hai to fir .method kam ni aayega becvause wha space aa gya
console.log(person["progress report"]);

//there are 2 ways of adding  a key to the object
person.colour="white";
person["grade"]="A";
console.log(person);

//2 ways to iterate over objects  for of  loop and for in loop
//first we should know that Object.keys() will give u array of all the keys of the object
let keysArray=Object.keys(person);
console.log(keysArray);
//for of array ke liye hota to pehle array create kar lia 
for(let key of keysArray)console.log(key+":"+person[key]);

console.log("--------------for in loop"); //sidha object ki keys ko traverse karta hai
for(let key in person)console.log(key+":"+person[key]);

//spread operator --The JavaScript spread operator (...) allows us to quickly copy all  elements  of an existing array or object into another array or object.
//Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. 
//Only iterable values, like Array and String, can be spread in array literals[]  and argument lists. objects can't spread in [] but in object literal {} we can spared all primitive and non primitive type

let obj1={
    x:30,
    class:"a"
}
let obj2={
    x:25,
    class:"b"
}
let obj3={...obj1,...obj2};//keys are overwrite by obj2
console.log(obj3);
let obj4={...[1,2,3,4],..."hello"};
console.log(obj4);//isme jo 1234 se index key bni wo bhi overwrite ho jayegi by hello
let obj5={...[1,2,3,4,5]};
console.log(obj5);
//another way of cloning
let newobj1=Object.assign({},obj1);
console.log(newobj1);

//object destructing
let obj6={
    name:"John",
    age:30,
    city:"New York"
}
let {x,y}=obj6;
console.log(x,y);//matlab array ki tarah kuch bhi variable ka name nhi rakh skte key:variable name use karna hoga
let{name,age}=obj6;//key wala same name chal jayega
console.log(name,age);

let {name:x1,age:y1}=obj6;
console.log(x1,y1);

//array of objects very useful in real world application
let users=[
    {name:"John",age:30,city:"New York"},
    {name:"sachin",age:32,city:"New berkshere"},
    {name:"Johncena",age:20,city:"london"},
]
for(let user of users) {
    console.log(user);
    console.log(user.name);
}


//optional chaining-The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
// console.log(obj6.name.address.street);
//lets see what happened here obj6 is there then .name is there after that .adrees is not defined and we are trying to access .street of an undefined value  error-Cannot read properties of undefined
console.log(obj6?.name?.address?.street);//it returns undefined jaisi hi use pehla undefined milega to address pe aate hi wo aage movie ni krega and pehle jo error aa rha tha wo bhi ni aayega