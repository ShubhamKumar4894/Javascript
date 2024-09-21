// const month=12;
// switch(month){
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("feb")
//         break;
//     case 3:
//         console.log("march")
//         break;
//     case 4:
//         console.log("april")
//         break;
//     default:
//         console.log("any")
// }

//Nullish coalescing operator (??)
// let val1= null??7;
// console.log(val1)
// let val2= undefined??7;
// console.log(val2)
// let val3= 0??7;
// console.log(val3)
const arr=[1,2,3,4]
// for(let i=0;i<4;i++){
//     console.log("shubham")
// }
// for(const num of arr){
//     console.log(num)
// }

const map1= new Map();
map1.set(1,"shub");
map1.set(2,"ank");
map1.set(3,"pawan");
console.log(map1.get(1));

for(const [key,val] of map1){
    console.log(key ,"-", val)
}