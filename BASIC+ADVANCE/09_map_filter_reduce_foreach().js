//Map, reduce, and filter are all array methods in JavaScript. Each one will iterate over an array and perform a transformation or computation. Each will return a new array based on the result of the function. and each one will have a call back function inside them

//lets understand the foreach() first
const arr1=[5,10,15,25];
//syntax 
arr1.forEach((currentValue,index,array)=>{
console.log(currentValue,index,array);
arr1[index]=35;
});
console.log(arr1);//for each doesnot craete a new array it only traverse and modify the original array 

//unlike foreach() map ,reduce and filter crates a new array  without changing the original array and the syntax for map ,reduce and filter is almost same 


console.log("map");
const arr2=[25,100,15,250];
const newarr2=arr2.map((currentValue,index,array)=>{
    return currentValue*4;
});
console.log(newarr2);
//if there is only one statement in arrow function like above  return currentValue*4; then there is a shoter way to do the same work
const arr3=[25,100,15,250];
const newarr3=arr3.map((currentValue,index,array)=>currentValue*4);
console.log(newarr3);
//also these parameters in arrow function are just to  show the syntax but we can use map with only currentValue also as index and array parametrs are of no use unless specified
//shortest way possible 
const arr4=[25,100,15,250];
const newarr4=arr4.map((value)=>value*4);
console.log(newarr4);

//agar map ne kuch return nhi kiya to undefined value ko ek array ban jayega [undefined,undefined ,,,and so on ]
console.log("filter ");
//filter return a new array of values which satisfy a particluar condition 
//those above 3 parametrs(currentValue,index,array) are used here also but we will be using the shortes method ie only value
const arr5=[25,100,15,250];
const newarr5=arr5.filter((value)=>value>50);//arr5.filter(value=>value>50);more shorter
console.log(newarr5);
//value >50 return true for 100,250 only jiske liye true return hoga whi filter out honge

console.log("reduce");
//the reduce method reduces the set of array values to a single value or create an object out it ,it has one extra parameter in the call back function than that of map and filter 

const arr6=[25,100,15,250];
const newarr6=arr6.reduce((accumulator,currentValue,index,array)=>{
    return accumulator+currentValue;//accumulator stores the result of the previous calculation 
},50);//this 50 here is optional to initialize the accumlator otherwise it will be 0
console.log(newarr6);//it has the final accumulator value 

//lets create an object using the reduce method out of array
const alpha=['a','a','b','c','d','d'];
const countAlpha=alpha.reduce((obj,value)=>{
    if(!obj[value])obj[value]=1;
    else obj[value]++;
    return obj;
},{});//here obj is initilized with {} only then your program is working as obj is aacting an an object
console.log(countAlpha);

