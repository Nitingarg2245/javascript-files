//do check out the websited programiz and harry bhai ke notes 
//strings are used in JS to store sequence of characters
//string declaration
let name1="harry";//using double quotes
let name2='harry';//using single quoets
let name3=`harry`;//using backticks this is  called template literals escape ke niche wali key
console.log(name1);
console.log(name2);
console.log(name3);

let name4=name1+" bhai kaisi ho";//stabdard way of using variabels and text
console.log(name4);
//template literals let u use the varibales inside the string which is callled string interpolation
name4=`${name1} Bhai Kaisi Ho`
console.log(name4);
//remember if  u r wrapping the string inside single quotes then u can use word with double quotes inside it and vice-versa
let name5="harry 'bhai'";//will work fine
// let name6="harry "bhai"kaisi ho ";//will not  work 
console.log(name5);
//but template literals let u use both single as well as double quoted strings inside of it 
let name6=`harry bhai "kaisi" 'ho'`;
console.log(name6);

//accesing the charactrs of string 2 ways are there 
console.log(name1.charAt(4)); 
console.log(name1[4]); 

//string are immutable means u can not  make changes to the actual string but the  string methods can return modified strings without changing the original one
let name7="      how r u   ";
console.log(name1.concat(" ",name2, " ",name3));
console.log(name1.replace("harr","pyar"));
console.log(name7.trim());//will remove the extra spaces from front and back
console.log(name1.slice(2,4));//will provide a substring starting from index 2 upto index excliding 4 ie 3 tak
console.log(name1.slice(2));//will provide a substring starting from index 2 till the end of string
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.length);
console.log(name7.includes("how"));
console.log(name1.startsWith("h"));
console.log(name1.endsWith("y"));

console.log("convert a string to number");
let str="4568";
let n=Number(str);
console.log(n,typeof n);
console.log("converting a number to string ");
let n1=456;
//let str1=456+"";//adding any number with empty string convert that to the string 
let str1=String(n1);
console.log(str1,typeof str1)
