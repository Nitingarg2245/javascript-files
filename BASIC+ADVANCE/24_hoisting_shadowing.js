//JavaScript Hoisting refers to the process whereby the interpreter   moves the declaration of functions, variables to  the top of their scope, prior to execution of the code.
/* u write---------------
    console.log(x);
    f1();
    var x=5;
    function f1(){
        console.log("f1");
    }

    what interpreter does  as it encounters the code it simply moves the dexlaration of variabee and function to the top of the scope(here global )
    var x=5;
    function f1(){
        console.log("f1");
    }
    console.log(x);
    f1();

    there are 3 types of hoisting
    type1) ("Value hoisting")---Being able to use a variable's value in its scope before the line it is declared.
    type2)("Declaration hoisting")-----Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. 
    type3)---The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
    */

    //type1--function exhibit type 1 hoisting 
    f1();//5
    function f1(){
        var x=5;
        console.log(x);
    }

    //type 2 --variables with var key word 
    console.log(x);//undefined
    var x=5;

    //type3 -- let and const exhibit type 3 where it has been alloted memeory but remains uninitialized until the code executes (the peroid for which they remiain uninitialized is called temporal dead zone )
    console.log(y);//ReferenceError: Cannot access 'y' before initialization
    let y=5;



    //showding in javascript
    //In programming, shadowing occurs when a variable declared in a certain scope (e.g. a local variable) has the same name as a variable in an outer scope (e.g. a global variable). When this happens, the outer variable is said to be shadowed by the inner variable.
    