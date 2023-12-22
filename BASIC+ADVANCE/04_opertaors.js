//arithmatic opertaors
let a=45,b=4;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);//ye chiz achi koi float ka chakkar ni hai direct accurate value aati hai
console.log("a%b=",a%b);//remainder modulo 
console.log("a**b=",a**b);//exponentiation a^b
console.log("a++",a++);//pehle a ki  value use hogi fir increment hogi
console.log("a=",a); 
console.log("--a",--a);//pehle decremnet hogi fir use hogi  

//assignment operator 
let x=10;
x+=2;//x=x+2
console.log(x);
x-=3;
console.log(x);
x=x*5;
console.log(x);//and so on isi tarike se 

//comparison operator 
x=50;let y=60,z="50";
console.log(x==y);//false --only the data is compared not its type
console.log(x==z);//true --only the data is compared not its type
console.log(x!=y);//true --only the data is compared not its type
console.log(x!=z);//false --only the data is compared not its type

console.log(x===y);//false -- data and type both  compared 
console.log(x===z);//false --data and type both  compared 
console.log(x!==y);//true --(data || type)(true|| false)=true 
console.log(x!==z);//true --(data || type)(false || true)=true 
console.log(x<=z);//true
console.log(x>z);//false
console.log(y>z);//true

//ternary operator //alternate to if else statement in one line
let age =21;
age>18?console.log("u can vote"):console.log("bhag ja yha se");

// logical operator '
 x=true , y=false;
 console.log(x&&y);//false
 console.log(x||y);//true
 console.log(!x);//true ka false kar dega 