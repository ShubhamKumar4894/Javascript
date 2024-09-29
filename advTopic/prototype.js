let Myname="shubham     ";
// console.log(Myname.length);
// console.log(Myname.trim().length);

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`)
}

Myname.truelength();
let Student={
    hisName:"shubham",
    class:12,
    stream:"PCM",

    getStream: function(){
        console.log(`his stream is ${this.stream}`)
    }
};

//console.log(Student.branch());

Object.prototype.branch= function(){
    console.log("branch is also present");
}

// Student.branch();