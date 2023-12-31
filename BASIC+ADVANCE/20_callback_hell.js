//call back is a function which is passed as an argument to another function 

// function fn1(){
//     console.log("1st opertion");
// }
// function fn2(){
//     console.log("2nd opertion");
// }
// function fn3(){
//     console.log("3rd opertion");
// }
// function fn4(){
//     console.log("4th opertion");
// }
// function fn5(){
//     console.log("5th opertion");
// }
// fn1();fn2();fn3();fn4();fn5(); 
//above we have all synchronous operations  easily carried out in line by line but what if we have some async opertaions that take some time lets see 

// function fn1(){
//     setTimeout(()=>console.log("1st opertion"),0);
// }
// function fn2(){
//     console.log("2nd opertion");
// }
// function fn3(){
//     console.log("3rd opertion");
// }
// function fn4(){
//     console.log("4th opertion");
// }
// function fn5(){
//     console.log("5th opertion");
// }
// fn1();fn2();fn3();fn4();fn5(); 
// 2nd opertion
//  3rd opertion
//  4th opertion
// 5th opertion
//  1st opertion  async code
//but yr hmm chate hai ki hmara code line by line hi execute ho agar async code milta  hai to pehle wo execute ho jaye bad mai hi baki code ho 

// function fn1(){
//     setTimeout(()=>{
//         console.log("1st opertion")
//         fn2();fn3();fn4();fn5(); 
//     },0);
// }
// function fn2(){
//     console.log("2nd opertion");
// }
// function fn3(){
//     console.log("3rd opertion");
// }
// function fn4(){
//     console.log("4th opertion");
// }
// function fn5(){
//     console.log("5th opertion");
// }
// fn1();//output is 1 2 3 4 5 this is correct but what if 2nd fn is also a async code 

// function fn1(){
//     setTimeout(()=>{
//         console.log("1st opertion")
//         fn2();
//     },0);
// }
// function fn2(){
//    setTimeout(() => {
//     console.log("2nd opertion");
//     fn3();fn4();fn5(); 
//    }, 2000);

// }
// function fn3(){
//     console.log("3rd opertion");
// }
// function fn4(){
//     console.log("4th opertion");
// }
// function fn5(){
//     console.log("5th opertion");
// }
// fn1();//this worked what if sara code hi async hota

// function fn1(){
//     setTimeout(()=>{
//         console.log("1st opertion")
//         fn2();
//     },0);
// }
// function fn2(){
// setTimeout(() => {
//     console.log("2nd opertion");
//     fn3();
// }, 2000);

// }
// function fn3(){
//    setTimeout(() => {
//     console.log("3rd opertion");
//     fn4();
//    }, 2000);
// }
// function fn4(){
//     setTimeout(() => {
//         console.log("4th opertion");
//         fn5();
//     }, 2000);
// }
// function fn5(){
//     setTimeout(() => {
//         console.log("5th opertion");
//     }, 2000);
// }
// fn1();//so f2 is called in the async part of fn1 and f3 is callaed in asycn part of f2 and so on and code worked this type of structure is called callback hell means callbacks inside another callback 
//we can also do the above work by explicity using a cb function

function fn1(cb){
    setTimeout(()=>{
        console.log("1st opertion")
       cb();
    },0);
}
function fn2(cb){
setTimeout(() => {
    console.log("2nd opertion");
    cb();
}, 100);

}
function fn3(cb){
   setTimeout(() => {
    console.log("3rd opertion");
    cb();
   }, 100);
}
function fn4(cb){
    setTimeout(() => {
        console.log("4th opertion");
        cb();
    }, 100);
}
function fn5(cb){
    setTimeout(() => {
        console.log("5th opertion");
        cb();
    }, 100);
}
function fn6(cb){
    setTimeout(() => {
        console.log("6th opertion");
        cb();
    }, 100);
}
function fn7(cb){
    setTimeout(() => {
        console.log("7th opertion");
        cb();
    }, 100);
}
function fn8(cb){
    setTimeout(() => {
        console.log("8th opertion");
        cb();
    }, 100);
}
function fn9(cb){
    setTimeout(() => {
        console.log("9th opertion");
        cb();
    }, 100);
}
function fn10(cb){
    setTimeout(() => {
        console.log("10th opertion");
    }, 100);
}
// fn1(function(){
//     fn2(function(){
//         fn3(function(){
//             fn4(function(){
//                 fn5(function(){
//                     fn6(function(){
//                         fn7(function(){
//                             fn8(function(){
//                                 fn9(fn10)
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });
//is callback hell se bchne ke liye we can use promises which will do our work and provide much cleaner code   
//this structure is called pyramid of doom  and callback hell 

function fn1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("1st opertion")
        },0);
    })
}
function fn2(){
    return  new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("2nd opertion");
        })
        
    }, 100);
}
function fn3(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("3rd opertion");
        }, 500);
    })
}
function fn4(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("4th opertion");
        }, 100);
    })
}
function fn5(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("5th opertion");
        }, 800);
    })
}
function fn6(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("6th opertion");
        }, 100);
    })
}
fn1()
.then((res)=>{
    console.log(res);
    return fn2();
})
.then((res)=>{
    console.log(res);
    return fn3();
})
.then((res)=>{
    console.log(res);
    return fn4();
})
.then((res)=>{
    console.log(res);
    return fn5();
})
.then((res)=>{
    console.log(res);
    return fn6();
})
.then((res)=>{
    console.log(res);
})
//this code is much cleaner then callback hell u can read about promises in file 21
