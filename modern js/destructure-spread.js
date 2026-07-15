const numbers = [1,2,3,4,5,6]
const[first,...rest]=numbers
console.log(first)
console.log(rest)

const user= {
    name : "Paul",
    age:67,
    height :160
}
const updatedUser={
    ...user,
    name:"Arthur",
    surname:"Yeap"
}
console.log(updatedUser)
const newUser = {
    id :1,
    name: "Laura",
    age:"44",
    gender:"Alien"
}
const printUserInfo = ({name,...rest}) => {
    console.log(name)
    console.log(rest)
}
printUserInfo(newUser)