/*like in other languages we have pass by value and pass by reference in c++/java here in javascript we have shallow copy(copy the reference/address) and deep copy(copying the values)*/
const playerProfile1 = {
    name: 'Alice',
    level: 10,
  };
  
  //shallow copy 
  const copyPlayerProfile1= playerProfile1;//address of object is copied 
  
  copyPlayerProfile1.name="sachin";
  console.log(playerProfile1);
  console.log(copyPlayerProfile1);
  //as the address is copied so any change in copy will reflect in the original object 
  

  //********************************************deep copy *********************************************************/
  //type 1--when there is no nested object or array inside the original object/array ****deep copy can be done by using Object.assign() and spread opeartor   
  const playerProfile2 = {
      name: 'Alice',
      level: 10,
    };
console.log('//a)by using the spread opertor ... which copies the values only ');
const deepPlayerProfile2= {...playerProfile1};

deepPlayerProfile2.name="sachin";
console.log(playerProfile2);
console.log(deepPlayerProfile2);//no chnage in original array

console.log("//by using the Object.assign()");
const deepPlayer2=Object.assign({},playerProfile2);
deepPlayer2.name="seema";
console.log(playerProfile2);
console.log(deepPlayer2);//no chnage in original array
  


//type 2 --when there are nested object/arrays then we have json.parse(json.stringyfy(obj/array)) but this method also has some limitation as it ignores function and undefined and changes the date object to string value
console.log("json method");
const playerProfile3 = {
    name: 'Alice',
    level: 10,
    achievements: [
      {
        title: 'Fast Learner',
        emoji: '🚀'
      },
      {
        title: 'Treasure Hunter',
        emoji: '💰'
      }
    ],
    multiply:function(){
        return a*blur;
    },
    value:undefined,
    date:new Date(),
  };

const deepPlayer3=JSON.parse(JSON.stringify(playerProfile3));
deepPlayer3.level=456789;
console.log(playerProfile3);
console.log(deepPlayer3);//here values like functions and undefined are ignored and also our date is converted into string thats why this also is not the perfect method to deep copy 
//we have some external libaries like lodash lets use the cdn for it in the html file 
const lodashCopy=_.cloneDeep(playerProfile3);

console.log(playerProfile3);
console.log(lodashCopy);//perfect deep copy is made with everything remain intact

//ye niche wala function maine abhi yad ni kiya hai ye manual method hai
const deepCopy = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const newObj = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        newObj[key] = deepCopy(obj[key]);
    }

    return newObj;
}

const deepCopiedObject = deepCopy(playerProfile3);

console.log(playerProfile3);
console.log(deepCopiedObject);



