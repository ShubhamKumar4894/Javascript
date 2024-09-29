function createUser(username, score){
    this.username=username;
    this.score=score;
}
createUser.prototype.printMe=function(){
    console.log(this.username);
}
createUser.prototype.increment=function(){
    this.score++;
}
const userOne= new createUser("Shubham",55);
const userTwo= new createUser("Ankit",60);
userOne.printMe();
userTwo.increment();
console.log(userTwo.score)