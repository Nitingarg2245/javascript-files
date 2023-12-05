//what are iterables ---jinpe hmm for of loop lga skte hai jaisi ki arrays,set,map and string but not objects
//what are array like objects--jinke pas lenght property hoti hai and jinko index se access kar skte hai like string


//A set is a collection of items that are unique i.e. no element can be repeated.
// Set in ES6 are ordered: elements of the set can be iterated in the insertion order. but can't be accessed using index
//The set can store any type of value whether primitive or objects.
let set1=new Set([1,1,23,55,55,15,24]);//array is paased in the set
console.log(set1);
let set2=new Set("heeeellllo");//string is paased in the set
console.log(set2);
//as u can see in the console all the repeated values are ignored and onlu unique values are maintained

//for checking the size of set 
console.log(set1.size);

//for adding new elements to the set
set1.add(90)//this add method return the modified  set and that's why support chaining
console.log(set1);
console.log(set1.add(11).add(12));

//deleting elements from the set
console.log(set1.delete(1));//returns true if the element is found and deleted 
console.log(set1.delete(2));//returns false if the element is not  found for deletion
console.log(set1);

//to check that if this set has any element or not we use set.has()
console.log(set1.has(23));////returns true if the element is found
console.log(set1.has(19));////returns false if the element is not  found

//let use for of loop
for(let each of set1)console.log(each);//working fine

//clear method
set2.clear();
console.log(set2);

//***********************maps******************************************** */
/*A Map holds key-value pairs where the keys can be any datatype.
Object	                                Map
Not directly iterable	----------------Directly iterable using for of loop
Do not have a size property	------------Have a size property
Keys must be Strings (or Symbols)	----Keys can be any datatype
Keys are not well ordered	------------Keys are ordered by insertion
Have default keys	--------------------Do not have default keys*/


//Method	Description

//new Map()	Creates a new Map object
let map1=new Map();

// set()	Sets the value for a key in a Map
map1.set(1,"nitin");
let arr=[1,2];
map1.set(arr,"garg");
console.log(map1.size);//size is a property not a method 

// get()	Gets the value for a key in a Map
console.log(map1.get(1));//in get the key to be used as it is without any quotes 
console.log(map1.get(arr));
console.log(map1.get([1,2]));//here this[1,2] will create a new address different from arr so result in undefined

// clear()	Removes all the elements from a Map
map1.clear();
console.log(map1);
map1.set(1,"nitn");
map1.set(2,"nitn garg");


// delete()	Removes a Map element specified by a key return true after deletion 
console.log(map1.delete(1));
console.log(map1.delete(3));
console.log(map1);


// has()	Returns true if a key exists in a Map
console.log(map1.has(2));
map1.set(1,"nitn");
map1.set(3,"niki");
console.log(map1);


// forEach()	Invokes a callback for each key/value pair in a Map
map1.forEach(function(value,key,map){
    console.log("key:"+key +"\nvalue:"+value);
})


// entries()	Returns an iterator object with the [key, value] pairs in a Map
console.log(map1.entries());

// keys()	Returns an iterator object with the keys in a Map
console.log(map1.keys());

// values()	Returns an iterator object of the values in a Map
console.log(map1.values());

//for of loop 
for(let each of map1)console.log(each);//each will give key-value pair in array form

//modify a key-value pair in the map
map1.set(3,"nikhil");
console.log(map1);//so key-3 is modified
//lets try to add a same key-value pair
map1.set(3,"nikhil");//there will be no change in the existng map it ignores duplicates
console.log(map1);