

// ----------------
/*
class myClass{
    num1 = 10
    num2 = 20
    sumNum(){
        let sum = this.num1 + this.num2
        console.log(sum)
    }
    constructor(a,b){
        console.log(a+b)
    }

    static addTwo(){
       let  a=1
        let b=5
        console.log(a+b)
    }
}

let myObj = new myClass(1,2)
console.log(myObj.num1)
myClass.addTwo()

*/

// -----------------Inheritance
class father{

    static addTwo(){
       let  x = 20
        let y = 20
        let sum = x + y
        console.log(sum)
    }
    constructor() {
        console.log("father")
    }
}
class son extends father{

    static addTwo(){
        let x = 5
        let y = 3
        let sum = x + y
        console.log(sum)
    }
constructor() {
    super();
    console.log("son")
}
}
// let F = new father()
// let S = new son()
// console.log(S.x)
// console.log(F.y)
// F.addTwo()
// S.addTwo()
// father.addTwo()     // static alling
// son.addTwo()    // static call


//----Debug
function myFun(){
    let x= 1
    let y = 1
    let z = 2
    let sum = x+y+z
    let sub = z-x
    let mul = x*y*x
}
myFun()