<?php
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible"
          content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Revision</h1>
    <script>
        let cat1 = "George";
        let cat2 = "Layla";
        let dog1 = "Ruffle";
        console.log(`my cats ${cat1} and ${cat2} are very cute`);

        let light ="green";

        if (light == "green"){
            console.log("go");
        }else if(light == "red"){
            console.log("stop");
        }else if(light == "yellow"){
            console.log("GO FASTTTT");
        }

        let hoursNeeded = 10;
        let ageNeeded = 0;

        // for (i = 0; i <= hoursNeeded ; i++){
        //     console.log(`shakty has sleep ${i} hours`)
        //     ageNeeded++
        //     console.log(`Ur mom is ${ageNeeded + i} `)
        // }

        // let i = 0; while(i <= hoursNeeded ){
        //     console.log(`shakty has sleep ${i} hours`)
        //     ageNeeded += 2
        //     console.log(`Ur mom is ${ageNeeded} `)
        //     i++;
        // }

        function addTwoNum(num1,num2){
            // console.log(`Total: ${num1 + num2}`)
            return num1 + num2;
        }

        console.log(addTwoNum(2,6))

        function rectangleArea(num1,num2){
            // console.log(`Total: ${num1 + num2}`)
            return num1 * num2;
        }

        console.log(rectangleArea(10,10))

        // function rectanglePerimeter(num1,num2){
        //     // console.log(`Total: ${num1 + num2}`)
        //     return (num1 + num2) * 2;
        // }
        //
        // console.log(rectanglePerimeter(20,10))

        const bodycount =(num1,num2) => {return num2 * num1};
        console.log(bodycount(3,6))

        let organs = ['Heart','Brain','Genitals','Toungue','Spine','Nose'];
        // console.log(organ)
        organs.forEach((organs) => {
            console.log(organs)
        })

        let myProfile = {
            name : "Joe",
            age : 67,
            height : 190,
            race : "Malaysian",
            hobbies : ['Fishing',"Badminton","Boxing","Cooking"]
        }
        let myFriendProfile = {
            name : "Ballton",
            age : 11,
            height : 120,
            race : "Japanese",
            hobbies : ['Coding',"Running","Swimming","Reading"]
        }
        console.log(myProfile);

        // for(let key in myProfile){
        //     console.log(`${key}: ${myProfile[key]}`)
        //     console.log(key)
        //     console.log(myProfile[key])
        // }

        for(let key in myProfile){
            if (key === "hobbies"){
                console.log(`${key}: ${myProfile[key][1]}`)
                console.log(key)
                console.log(myProfile[key][1])
            }else{
                console.log(`${key}: ${myProfile[key]}`)
                console.log(key)
                console.log(myProfile[key])
            }
        }

        const meAndMyFriendProfile =[myProfile, myFriendProfile]
        console.log(meAndMyFriendProfile)

        const Pokemon = [
            {
                Name:'Pikachu',
                Type:'Electric',
                Color :'Yellow'
            },
            {
                Name:'Eevee',
                Type:'Normal',
                Color :'Brown'
            }
        ]
        // console.log(Pokemon)
        Pokemon.push({   Name:'Bulbasaur',
            Type:'Grass',
            Color :'Green'});

        console.log(Pokemon);
        Pokemon.forEach((value, index, array)=>{

            console.log(`My number ${index} Pokemon is ${value.Name} the type is ${value.Type} .Color is ${value.Color}`)
        })
        let username = window.prompt("What's your usernmae?");
        console.log(username)
    </script>
</body>
</html>
