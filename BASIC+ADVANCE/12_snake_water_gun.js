//before making this game lets understand the concept of Math.random()
//Math.random() returns a number bewteen 0 and 1  
//0<=number<1   number will always be <1 
//the returned value is in decimal form to convert it into a integer form we weill use Math.floor()
console.log(Math.random());
console.log(Math.floor(Math.random()*3));//this will give 0,1 or 2
//agar array ke elements ko randomly access karna hai to math.random()*arr.lenght will give random array index if the lenght =3 so it will generate index 0,1,2
//proper math.random() function takes min and max as paramters and the values are returned both inclusive max or min
function getRandomValue(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(getRandomValue(5,10));

//lets make our game 
const arr=["S","W","G"];
let idx=Math.floor(Math.random()*arr.length);
let machine=arr[idx];
let user =prompt('Enter your choice FOR SNAKE="S" ,FOR WATER="W",FOR GUN="G"')

function winner (user,machine){
    if(user==machine) return "match tied can not be decided "
    else if(user=="S" && machine=="W") return user;
    else if(user=="S" && machine=="G") return machine;
    else if(user=="W" && machine=="S") return machine;
    else if(user=="W" && machine=="G") return user;
    else if(user=="G" && machine=="W") return machine;
    else if(user=="G" && machine=="S") return user;
}
let win=winner(user,machine);
alert(`user has choosen==${user} ----machine has choosen==${machine}---winner == ${win}`);