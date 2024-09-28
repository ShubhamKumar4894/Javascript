// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("this is new promise");
//         resolve();
//     },1000)
    
// }).then(function(){
//     console.log("promise resolved");
// })

// const promiseThree= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name:"shub",email:"shubh@mail.com"});
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
//     console.log(user.email);
// })

// const promiseFour= new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error= false;
//         if(!error){
//             resolve({name:"shubham", mail:"shubh@mail.com"});
//         }else{
//             reject('Error: something went wrong');
//         }
//     },1000)
// });
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.mail;
// }).then((email)=>{
//     console.log(email);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>console.log("request is serviced"));

// const promiseFive= new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error= true;
//         if(!error){
//             resolve({name:"shubham", mail:"shubh@mail.com"});
//         }else{
//             reject('Error: something went wrong');
//         }
//     },1000)
// });

// async function resolvePromiseFive(){
    
//     try{
//         const response=await promiseFive;
//         console.log(response);
//     }
//     catch (error){
//         console.log(error);
//     }
// };
// resolvePromiseFive();

// async function reqFuncton(){
//     try {
//         const response= await fetch("https://jsonplaceholder.typicode.com/users");
//         const data=await response.json();//json also takes time;
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// reqFuncton();    

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=> console.log(data))
.catch((error)=> console.log(error));