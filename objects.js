const mySym= Symbol("key1");
const newObj={
    name:"shubham",
    email:"shubham@mail.com",
    phnNo:554845151,
    marks:[4,5,5,6,],
    [mySym]:"newsym"
}
console.log(newObj.marks)
console.log(newObj["name"])
console.log(typeof newObj[mySym])