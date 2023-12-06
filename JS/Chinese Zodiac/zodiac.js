console.log("Say hello")
let userInput=prompt("Type in year of birth")
let typedInValue=Number(userInput)
let result=(typedInValue-4)%12
console.log(userInput,typedInValue,result,)
if(result===0){
    console.log("Your Zodiac is Rat");
} else if(result===1){
    console.log("Your Zodiac is Ox");
} else if(result===2){
    console.log("Your Zodiac is Tiger")
} else if (result===3){
    console.log("Your Zodiac is Rabbit");
} else if (result===4){
    console.log("Your Zodiac is Dragon");
} else if (result===5){
    console.log("Your Zodiac is Snake");
} else if (result===6){
    console.log("Your Zodiac is Horse");
} else if (result===7){
    console.log("Your Zodiac is Goat");
} else if (result===8){
    console.log("Your Zodiac is Monkey");
} else if (result===9){
    console.log("Your Zodiac is Rooster");
} else if (result===10){
    console.log("Your Zodiac is Dog");
} else if (result===11){
    console.log("Your Zodiac is Pig");
} 
