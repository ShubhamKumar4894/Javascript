function setUserName(username){
    this.username=username;
}

function createUser(username,mail,password){
    setUserName.call(this,username);//ye apna this as a reference bhejega
    this.mail=mail;
    this.password=password;

}

const userOne= new createUser("shubham","shubh@mail.com",123);

console.log(userOne);