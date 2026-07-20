const greet =(callback) =>{
    console.log("LEBRONNNNN")
    callback()
}
greet( () => {
    console.log("676767676767")
})

const noCallbackGreeting = (name) => {
    console.log(`my name is ${name}`)
}

const ex = (callback,num1,num2) =>{
    const result = num1 + num2 ;
    callback(result)
}

ex((result) => {
    console.log(result ** 2) },5,9)

const dummyDownload =(url,callback) =>{
    console.log("hahahhahahaahhahahahhaha")
    setTimeout(() => {
        console.log(`Downloaded Data from ${url}`)
        callback()
    },2000)
}

dummyDownload('http://google.com' , () =>{
    console.log("Jojo kimina bouoken eyes of heaven")
})


