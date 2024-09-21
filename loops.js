const myObject= {
    js: "javascript",
    cpp: "cpp",
    java:"java",
    py:"python"
}

// for(const val in myObject){
//     console.log(`${val} has the value ${myObject[val]}`)
// }
// const arr=[1,2,3,4,5,6]
// for(const key in arr){
//     console.log(arr[key]);
// }

// const lang=["java","javascript","cpp","go","swift"]

// // lang.forEach((item)=>{
// //     console.log(item)
// // })

// lang.forEach((item,index,arrays)=>{
//     console.log(item,index,arrays);
// })

const numbers=[1,4,9,0,5,6,7,3]

// console.log(numbers.filter((num1)=>num1>=4))
// console.log(numbers.map((num)=>(num+=10)))

const nums=[0,1,2,3,4,5]

const initialval=0;
const val=nums.reduce((acc,currval)=>(acc+currval),0)
