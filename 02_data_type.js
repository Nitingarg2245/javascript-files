//data types are of 2 types 1)primitive and 2)non-primitive
//primitive data type is a simple data type which contains only one value trick to learn is NNSSBBU(there are  7 primitive data types in JS)
//null number string symbol bigint boolean undefined 
let a=null;
let b=5;
let c="hello";
let d=Symbol("hmm hai na");
let e=BigInt("500");
let f=true;
let g=undefined;
let h;//it will also work as undefined 

console.log(a,b,c,d,e,f,g,h);

//non primitive data type is complex data type which contain multiple values like objects
const person={
    age:5,
    name:"sonu",
    colour:"wheatish",
}
console.log(person);//printing the whole object
console.log(person.age);//accessing the 
console.log(person.name);
console.log(person.colour);

//Bigint data type --JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
let n=1000;
//2 ways to convert the number in Bigint
let n1=1000n;
let n2=BigInt(n);
console.log(n1,n2);
//Most operators support BigInts, however most do not permit operands to be of mixed types — both operands must be BigInt or neither:

// console.log(b*n1);//error-Cannot mix BigInt and other types, use explicit conversions
console.log(n1*n2);
//Addition (+) involving a string and a BigInt returns a string.
console.log(n1+"22");
// Division (/) truncates fractional components towards zero, since BigInt is unable to represent fractional quantities.
console.log(n1/3n);

//java script can precisely represent integers upto number.maxsafeinteger or minsafeinteger
let maxSafeValue=Number.MAX_SAFE_INTEGER;
let minSafeValue=Number.MIN_SAFE_INTEGER;
console.log(maxSafeValue,minSafeValue);//after these values javascript looses precision and thus pose a threat to secuity 
//so for bigger number than these we use BIGINT
let normalNum=9007199254709912345;
let bigNum=900719925474099123456n;
console.log(normalNum,bigNum);//as clear from the output u can see the normal number has lost precsion while the bigint number is precise 