// const numbers = [1, 2, 3, 4, 5];
// //
// // const q1= numbers.map((value) => {return value * value})
// // console.log(q1)
// const q2 = numbers.filter((value) =>value > 2 )
// // console.log(q2)
// // const q3 = numbers.forEach((value)=>console.log(value)    )
// // console.log(q3)
// // const q4 = numbers.find((value) => value / 3 == 1 )
// // console.log(q4)
// const q5 = q2.map((value) => value * value)
// console.log(q5)

const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
    { title: '1984', author: 'George Orwell', ratings: 4.7 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
    { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];

// const q1 = books.filter((value) => value.ratings > 4)
// const q2 = books.map((value) => value.title)
// const q3 = books.find((value) => value.title == "1984")
const q4 = books.sort((a,b) => b-a)
const ans = q4[0].title
console.log(ans)