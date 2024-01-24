console.log("Say hello")
let userInput=prompt("Type in year of birth")
let typedInValue=Number(userInput)
let result=(typedInValue-4)%12
let ifNumberIsInvalid=Number.isNaN(typedInValue)
let zodiac=""
const zodiacEl=document.querySelector(".zodiac")
console.log(userInput,typedInValue,result,)
if(result===0){
    zodiacEl.style.color = "green"
    zodiacEl.innerText= `Your Zodiac is Rat `
    console.log("Your Zodiac is Rat");
} else if(ifNumberIsInvalid){
    console.log("Type a valid number");
}else if(result===1){
    zodiacEl.style.color = "purple"
    zodiacEl.innerText= `Your Zodiac is Ox `
    console.log("Your Zodiac is Ox");
} else if(result===2){
    zodiacEl.style.color = "orange"
    zodiacEl.innerText= `Your Zodiac is Tiger `
    console.log("Your Zodiac is Tiger")
} else if (result===3){
    zodiacEl.style.color = "white"
    zodiacEl.innerText= `Your Zodiac is Rabbit `
    console.log("Your Zodiac is Rabbit");
} else if (result===4){
    zodiacEl.style.color = "darkorange"
    zodiacEl.innerText= `Your Zodiac is Dragon `
    console.log("Your Zodiac is Dragon");
} else if (result===5){
    zodiacEl.style.color = "lightbrown"
    zodiacEl.innerText= `Your Zodiac is Snake `
    console.log("Your Zodiac is Snake");
} else if (result===6){
    zodiacEl.style.color = "darkgrey"
    zodiacEl.innerText= `Your Zodiac is Horse `
    console.log("Your Zodiac is Horse");
} else if (result===7){
    zodiacEl.style.color = "grey"
    zodiacEl.innerText= `Your Zodiac is Goat `
    console.log("Your Zodiac is Goat");
} else if (result===8){
    zodiacEl.style.color = "red"
    zodiacEl.innerText= `Your Zodiac is Monkey `
    console.log("Your Zodiac is Monkey");
} else if (result===9){
    zodiacEl.style.color = "darkorange"
    zodiacEl.innerText= `Your Zodiac is Rooster `
    console.log("Your Zodiac is Rooster");
} else if (result===10){
    zodiacEl.style.color = "brown"
    zodiacEl.innerText= `Your Zodiac is Dog `
    console.log("Your Zodiac is Dog");
} else if (result===11){
    zodiacEl.style.color = "hotpink"
    zodiacEl.innerText= `Your Zodiac is Pig `
    console.log("Your Zodiac is Pig");
} 
