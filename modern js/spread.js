const nums1 =[1,2,4]
const nums2 =[12,22,7]
const numsCombined =[...nums1, ...nums2]
console.log(numsCombined)
const numsCombinedWithoutSpread =[nums1,nums2]
console.log(numsCombinedWithoutSpread)

const original =["this", "is" ,"not" ,"yellow"]
const copy =[...original]
console.log(copy)
console.log(original)

const person ={
    name: "Jacky",
    age: 20
}
const student = {
    ...person,
    grade: "Diploma"
}
console.log(student)
const copyOfStudent ={...student}
console.log(copyOfStudent)

const sum = (a,b,c) => {
    return a+b+c
}
const nums = [3,4,7,5,8,0,2]
console.log(sum(...nums))