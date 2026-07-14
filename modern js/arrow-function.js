const sayHello =() => {
    console.log("Hello World")
}
sayHello();

const multiply = (num1,num2) =>{return num1 *num2}
console.log(multiply(5,6))
//!callback

const list = [2,4,6,7]
const list2 =list.filter(num => num > 5)//this is an callback
console.log(list2)

const list3 = list.filter((function (num){return num < 5}))
console.log(list3)