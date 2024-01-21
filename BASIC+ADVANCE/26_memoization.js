/*Memoization in javascript is an optimization technique, to reduce the runtime of the application 
The process consists of using an extra space (cache) for the reduction of expensive function calls (a function that recursively calls itself and it has some overlapping problem).
By using memoization, we store the results that were calculated in the previously called subproblems. Then if the same subproblem is raised, we again use the stored value which reduces the time complexity as it removes the extra effort to calculate again and again for the same problem.*/
//fibonacci series--0  1  1  2  3  5  8  13 21 34 55    f(0th term )=0 and f(1st term)=1 
function fibo(n){//0th ter
    if(n==0 || n==1) return n;

    return fibo(n-1)+fibo(n-2);
}
console.time();
console.log(fibo(12));
console.timeEnd();
//lets use memoization 


console.log("after memoization");
const memo={};
function memoizedFibo(n)
{
    if(n==0 || n==1) return n;

    if(memo[n]) return memo[n];

    return memo[n]=fibo(n-1)+fibo(n-2);
}
console.time();
console.log(memoizedFibo(10));
console.timeEnd();


console.time();
console.log(memoizedFibo(12));
console.timeEnd();

console.log(memo);




console.log("lets see the memoization with closures"); //mujhe iska jyada use samajh ni aaya baki upar wala acha example hai


function sumOfNdigits(n){
    let sum=0;
    for(let i=1;i<=n;i++) sum=sum+i;
    return sum;
}
console.time();
console.log(sumOfNdigits(15));//120
console.timeEnd();

function memoSum(){
    const cache={};
    return function(n){
        if(cache[n]) 
        {
         console.log("saved value return kar rhe hai");   
            return cache[n];
        }
        else {
            console.log("memo nhi hai");
            cache[n]=sumOfNdigits(n);
        }
        return cache[n];
    }
}

let memoizedSum=memoSum();
console.time();
console.log(memoizedSum(15));
console.timeEnd();

console.time();
console.log(memoizedSum(15));
console.timeEnd();

