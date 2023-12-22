//loops are used to perform repeated actions
//types of loops  

//1)for loop
for(let i=1;i<=5;i++)console.log(i);

// 2)for in loop(used to traverse over the index of iterabale objects like arrays,strings or over the keys of an object)(trick to learn in for index and in comes first in the dixtionary than of and key comes before value in  the object )
console.log("the for in loop usage ");
let str="apple";
for(let i in str) console.log(i);//index traversed
const arr=[10,20,3,0];
for(let i in arr) console.log(i);//index traversed
const obj={
    a:1,b:2,c:3,
}
for(let i in obj) console.log(i);//object keys traversed

// 3)for of loop(used to traverse over each value of iterabale objects like arrays,strings)
console.log("the for of loop usage ");
for(let i of arr) console.log(i);
for(let i of str) console.log(i);


// 4)while loop
console.log("the while loop usage ");
let j=0;
while(j<5){
    console.log(j);j++;
}//j=5 hoga to out of loop ho jayega


// 5) do while loop 
console.log("the do while  loop usage ");
do{
    console.log(j);j++;
}
while(j<10);

//traverse over all the values of object using simple for and for in loop
let marks={
    nitin:95,sumit:80,sachin:45,
}
for(let i=0;i<Object.keys(marks).length;i++)//Object.keys(marks): This part retrieves an array containing the property names of the marks object.
{
    console.log("the marks of "+Object.keys(marks)[i] +   ' ' +marks[Object.keys(marks)[i]]);
}
//lets see how easy has for in loop made this thing
for(let key in marks)//for in loop is used to traverse over the keys of object 
{
    console.log("the marks of "+key+"are "+marks[key]);
}

