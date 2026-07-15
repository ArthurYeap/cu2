const user ={
    name : "John",
    age: 84
}
const anotherUser ={
    anotherName : "Lucas",
    anotherAge: 2
}
const name = user.name
const age = user.age
console.log(name)
console.log(age)
const { anotherName,  anotherAge } = anotherUser;
console.log(anotherName); // Prints "Lucas"
console.log(anotherAge);  // Prints 2

const student = {
    studentName : "Rena",
    studentAge : 15,
    studentGrade : "Diploma"
}
const{studentName,studentAge,studentGrade} = student
console.log(studentGrade)

const player = {
    playerName: "Lebron James",
    playerAge : 30,
    game : "Basketball",
    team : {
        teamName: "Cleveland Cavaliers",
        position: "Small Forward"
    }
}
const{playerName, playerAge, game , team:{teamName,position}} = player
console.log(position)

const colors = ["red", "green", "yellow"]
const[firstColor,secondColor,thirdColor] = colors
console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
const[iWantFirstOne,,andSecondOne] = colors
console.log(iWantFirstOne)
console.log(andSecondOne)

const greetPerson = () =>{
    console.log(`Hello, ${person.name}.You are ${person.age} years old`)
}
const person = {
    personName:"Mia",
    personAge:24,
}
greetPerson(person)

// Add curly braces to destructure the incoming object
const destructureGreetPerson = ({ personName, personAge }) => {
    console.log(`Hello, ${personName}. You are ${personAge} years old`);
};

destructureGreetPerson(person); // Prints: Hello, Mia. You are 24 years old

destructureGreetPerson(person)

const{personName,personAge,profession= "student"} = person
console.log(personName)
console.log(personAge)
console.log(profession)

const fruits = ["apple","orange"]
const [firstFruit,secondFruit,thirdFruit ="strawberry"] = fruits
console.log(firstFruit)
console.log(secondFruit)
console.log(thirdFruit)

const guy = {
    name: "Arthur"
}; const { newAge = 18 } = guy;

console.log(newAge);