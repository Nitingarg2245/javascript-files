console.log("this is standard console");
//console.info() is a method similar to console.log(), but I recommend you to use console.info() to print any information required for debugging purposes instead of printing the values.
console.info("this is info method ");
//To get the console.debug() method output, you need to enable the Verbose debug level in dev tools in the dropdown 
console.debug("this is debug method ");
//just select the all levels to see all 3 values of console

//The console.warn() method helps us to display a warning message in the console. in yellow colour
console.warn("you entered the wrong value");

// The console.error() method helps us to display a error message in the consol in red colour.
console.error("404");

//The console.assert() method is different from the previously discussed methods. It will only print the message in the console if the expression is evaluated as false. Therefore, you need to pass a Boolean expression as a method parameter.
console.assert(5==6,"hello");
console.assert(5==5,"hello");//will not print anything
console.assert(document.getElementById("test"),"nothing is found with id ");

//We can use the console.count() method as a log counter. It logs the number of times the console.count() method has been called in the script. For example, if you use it inside a loop, you can find the number of times that loop is executed.
for(let i=1;i<1500;i=7*i)console.count();//so it will run for 4 times

//time and timeEnd methods 
// You can use the console.time() method to measure the execution time of the functions. It helps you improve application performance by identifying low-performing functions. For example, if you need to measure the performance of a for loop, you can use the console.time() method as shown below.
console.time("for_loop_execution_time");
for(let i=0;i<1500000;i++){}
console.timeEnd("for_loop_execution_time")//Execution duration will print in milliseconds in the console

//group ----groupcollapsed---groupend
console.group("first group");
console.log("item1");
console.log("item2");
console.log("item3");
console.group("second group")
console.log("item1");
console.log("item2");
console.log("item3");
console.groupCollapsed("3rd group")//it will remain collapsed until clicked upon to check inside of it
console.log("item1");
console.log("item2");
console.log("item3");
console.groupEnd();//end of group collapsed 
console.groupEnd();//end of 2nd group
console.log("item4");
console.groupEnd();//end of ist group
console.log("item5");//out of all groups

//table method------When you have a complex set of objects, you will either use the console.log() method or scroll through the list of objects to inspect the issue. However, you can use the console.table() method to improve the debugging process in such situations. You can use it to report tabular versions of arrays and objects to the console. The tabular data format works beautifully, allowing you to understand your data better and debug your code quickly. You may also sort columns very fast. This method uses any object type, arrays, arrays of arrays, arrays of objects, and nested objects as a parameter.

//array
const arr1=["delhi","mumbai","kolkata","karnal"];
console.table(arr1);

//array of arrys
const arr2=[["delhi","mumbai"],["kolkata","karnal"]];
console.table(arr2);

//array of objects
const arr3=[{name:"sachin",class:"A",average:78},{name:"kohli",class:"A++",average:87},{name:"shubman gill",class:"A++",average:88}];
console.table(arr3);

//nested object
const obj={
    player1:{name:"sachin",class:"A",average:78},
    player2:{name:"dravid",class:"B",average:90},
    player3:{name:"sehwag",class:"C",average:65}
}
console.table(obj);

//The clear() method helps you clean your browser console after all the debugging processes. You can use the console.clear() method before your debugging and at the end of it. It will ensure that no other printed messages are displayed in the console.
// console.clear();
