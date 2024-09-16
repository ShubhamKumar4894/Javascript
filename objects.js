const mySym= Symbol("key1");
const newObj={
    name:"shubham",
    email:"shubham@mail.com",
    phnNo:554845151,
    marks:[4,5,5,6,],
    [mySym]:"newsym"
}
// console.log(newObj.marks)
// console.log(newObj["name"])
// console.log(typeof newObj[mySym])

//Object.freeze(newObj);
// newObj.email="nfbfyuwgbu"
// console.log(newObj.email)
// newObj.func= function(){
//     console.log("hello")
// }
// console.log(newObj.func())

const user={
    email:"shubh@mail",
    age:15,
    surname:{
        name:"shubham",
        caste:"yadav"
    }

}
// console.log(user.surname);

// const obj1={1:'a',2:'b'}
// const obj2={3:'c',4:'d'}
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)
const{email}=user
console.log(email)
console.log(email)