//arrays are the DS in JS which store differnet or same  type of values in it 
const arr1=[1,2,3,4];
const arr2=[1,2,3,4,"harry",false,undefined,null,BigInt(500)];
const marks={
    rahul:95,nitin:100
}
const arr3=[function add(){},marks,1,2,3,"ramesh"]
//with above 3 arrys it is clear that arrays can hold any thing as its values even other arrys ,objects or functions as well and the data type of array remains object always 
console.log(arr1,typeof arr1);           
console.log(arr2,typeof arr2);           
console.log(arr3,typeof arr3);  
//how to check if something is object or array
console.log(Array.isArray(arr2));//true means it is an arry
//if we try to reassign an array to arr1 it will throw error but we can change the values inside the array
// arr1=[2,3]//Assignment to constant variable.error 
arr1[2]=9;
console.log(arr1); 

//array methods 
let a=arr1.toString();
console.log(a,typeof a);

let b=arr1.join();//join without seprator simply converts it into string as toString method
console.log(b,typeof b);

let c=arr1.join("");//with seprator no space
console.log(c,typeof c);

let d=arr1.join("--");//with seprator --
console.log(d,typeof d);

let e=arr1.push(5);//it pushes the element in the last and return the lenght of the array
console.log(e,arr1);
//agar un logo ko shift karna hai to thoda push to karna padega {unshift==push}
//unshift front mai element insert karta hai  and push last mai 
let f=arr1.unshift(12);//it pushes the element in the front and return the lenght of the array
console.log(f,arr1);

let g=arr1.pop();//removes the last element and returns it
console.log(g,arr1); 
//{shift==pop}
let h=arr1.shift();//removes the first element and returns it
console.log(h,arr1); 

//array elements can be deleted using the delete operator
delete arr1[1];//will create an empty space after deletion 
console.log(arr1);
arr1[1]=2;
console.log(arr1);

const arr4=arr1.concat(arr2);//u can concat as my arrays as u want
console.log(arr4);//returns a new arry doesnt change the existing one

const arr5=[222,3,42,111];
console.log(arr5.sort());//sort the original array and returns the modified array but the problem is here sorting is not like in c++ or java,javascript  sorts in lexicographical/dictionery or more specifically as per ascii character values  way which has its + or -ves like for array of names it work fine so we will use compare as a call back function 

function compare(a,b){
    // return a-b;//a-b will be used for ascending order as we move from a to b chote se bda 
    return b-a;//it will be used for descending order as we move from b to a bde se chota
}

// console.log(arr5.sort(compare));
//or a shorter way
const sorted=arr5.sort((a,b)=>a-b);
console.log(sorted);

//slice method is cutting out the part of an array without modifying it 
//splice here p ko man lo  plus or adding something new with the operation of slice and modifies the original

console.log(arr5.slice(2));//2nd index se leke last index tak sara extract kar dega
console.log(arr5);//slice se original array mai no change

console.log(arr5.slice(0,3));//0th index se leke excluding 3rd index tak sara extract kar dega
console.log(arr5);//slice se original array mai no change

console.log(arr5.splice(2,2,15,16,17));//2nd index se start hoke 2 element delete kar do fir 15,16,17 add kar do
console.log(arr5);//modifies the original//[3, 42, 15, 16, 17]

//find method--return the the first value that satisfy the condition in the call back function 
console.log(arr5.find(value=>value>10));//42

console.log(arr5.reverse());

//every method---returns true when all the array value satisfy the call back function condition
console.log(arr5.every((value)=>value>2));//true
console.log(arr5.every((value)=>value>4));//false

//some method--return true if atleast one value satisfy the call back function condition
console.log(arr5.some((value)=>value>40));//true
console.log(arr5.some((value)=>value>45));//false

//looping in arrays
console.log("//classic approach");
for(let i=0;i<arr5.length;i++)console.log(arr5[i]);

//for of is used for traversing the array values whereas for in used for traversing the arrays index

console.log("//using for of loop");
for(let i of arr5)console.log(i);//best approach for traversal

console.log("//using for in loop");
for(let i in arr5) console.log(arr5[i]);

//Array.from() is used to convert any object into arrays
console.log("Array.from() method dekhte hai");
let name="harry";
const arr6=Array.from(name);//ye string se array bna dega
console.log(arr6,typeof arr6);

//array cloning 
//Why Can’t I Use = to Copy/clone an Array?
// Because arrays in JS are reference values, so when you try to copy it using the = it will only copy the reference to the original array and not the value of the array. To create a real copy of an array, you need to copy over the value of the array under a new value variable. That way this new array does not reference to the old array address in memory.with = copying any change in one array will reflect in both jo hmme nhi chaiye

let fruits=["apple","orange","banana"];
let cloneFruit1=fruits.slice();//first method
console.log(cloneFruit1);

let cloneFruit2=[].concat(fruits);//2nd method
console.log(cloneFruit2);

let cloneFruit3=[...fruits];//spread operator introduced in ECMA-6//3rd way
console.log(cloneFruit3);

let cloneFruit4=[...cloneFruit1,...cloneFruit2,...cloneFruit3];
console.log(cloneFruit4);

let arr7=[[1,2,3],[4,5]];//2d array
let cloneArr7=[...arr7];
cloneArr7.push(8);
console.log(cloneArr7);
console.log(arr7);

let cloneFruit5=Array.from(fruits);//4th way
console.log(cloneFruit5);

//spread operator --The JavaScript spread operator (...) allows us to quickly copy all  elements  of an existing array or object into another array or object.
//Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. 
//Only iterable values, like Array and String, can be spread in array literals[]  and argument lists. objects can't spread in [] but in object literal {} we can spared all primitive and non primitive type
let ex1=[1,2,3,4];
let ex2="nitin";
let ex3=[...ex1,...ex2,5,6];
console.log(ex3);

//Array destructuring
// Destructuring means to break down a complex structure into simpler parts. With the syntax of destructuring, you can extract smaller fragments from objects and arrays. It can be used for assignments and declaration of a variable.
let arr8=[1,2,3,4,5];
let [var1,var2, ,...rest]=arr8;//with this we have decalred and assigned values to var1,var2 variable and with , , the value 3 is skipped  and rest opertor is also used that will take the remaining values of array and craete a new array the rest operator has to be used as the last argument where ever it is used 
console.log(var1,var2,rest);

//rest operator with function
function num(a,b,...rest){
console.log(a,b,rest);
console.log(Array.isArray(rest));
}
num(1,2,3,4,5);

//fill method
//craete an array using constructor and fill method
const myArray=new Array(5).fill(-1);
console.log(myArray);
// console.log(arr8.fill(value to be filled,starting index,ending index +1));
console.log(arr8.fill(10,0,4));
