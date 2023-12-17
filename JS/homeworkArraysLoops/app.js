console.log("Hello Borche and Hristina")


/*
HOMEWORK #1
Create a function called tellStory()
The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
The function should return one big string with a story made from the arguments
Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
The value that is returned from the function should be printed in the console or in alert.
*/

function tellStory(storyArray){
    let [name,mood,activity]=storyArray
    if (storyArray.length !== 3 ) return "You must type in `name`,`moood` and `activity`";
    // if ((storyArray)!== "string") return `incorrect input type`;
    if(typeof name !== "string") return "Wrong input type, type in `name`"
    if (typeof mood !== "string") return "Wrong input type, type in `mood`"
    if(typeof activity !== "string") return "Wrong input type, type in `activity`"
    return `This is ${name}. ${name} is a nice person. Today He is ${mood}. He is ${activity} all day.`
    
}

let stringArray= [`Filip`,`Happy`,`Working`]
console.log(tellStory(stringArray))


function tellStoryTwo(name,mood,activity){
    
    if(typeof name !== "string") return "Wrong input type"
    if (typeof mood !== "string") return "Wrong input type"
    if(typeof activity !== "string") return "Wrong input type"
    return `This is ${name}. ${name} is a nice person. Today He is ${mood}. He is ${activity} all day.`
}

console.log(tellStoryTwo( `Filip`,`Angry`,`Working`))

/*
 HOMEWORK #2
Write a function that will take an array of 5 numbers as an argument 
and return the sum.

Print it in the console or in alert

BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number.
 If one of the numbers of the array is invalid show an error message instead of a result
*/


function sumOfArray(numArray){
    console.log(numArray)
let sum=0
for(let i=0; i < numArray.length; i++){
sum += numArray[i]
}
return `The result is ${sum}`;
}

let fiveNumArray=[1,1,1,1,1]

console.log(sumOfArray(fiveNumArray))


function validateNumber(numArray){
    for (let i = 0; i < numArray.length; i++){
         
        if(typeof numArray[i] === `number`)  console.log(numArray[i]) 
        if(typeof numArray[i] !== `number`)  console.log(`error message`) 
        
    }
}
let numberArray=[1,true,undefined,4,5,6,"hello"]

validateNumber(numberArray)

/*
HOMEWORK #3
Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC !
*/

function stringsGathering(stringArr){
    let result = "" ;
    for (let i=0; i <= stringArr.length; i++) {
        result += stringArr[i];
        if ( i !== stringArr.length - 1) 
        result += " "
    }
    return result;
}
let arrayOfString=["Hello", "there", "students", "of", "SEDC", "!"]
console.log(stringsGathering(arrayOfString))

/* 
HOMEWORK #4
Title: Looping structures

Description:
Write a loop in javascript that goes from 1-20 that will print each number in the console
 and add "number is even" after every even number and add "number is odd" after every odd number
 */

 function countToTwenty() {
   
let result=0

  while(result<20){
    console.log(result)
    if(result % 2 === 0){
        console.log(`${result} is Even`) 
    }
    if(result % 2 !== 0){
        console.log(`${result} is Odd`) 
    }
    result++
}
  return result;
  }

console.log(countToTwenty())

/*
HOMEWORK #5
Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it
*/


function calculateMaxMinSum(numArray) {
    let internalNumberArray=[];

    for(let num of numArray){
        if(typeof num !== "number"){
        continue
    } 
    if(Number.isNaN(num)) {
        continue
    }
    else if(typeof num === "number"){
        internalNumberArray.push(num)
    }
}

      let counter = 0;
      let max = internalNumberArray[0];
      let min = internalNumberArray[0];
      while (counter < internalNumberArray.length) {
        let currentNumber = internalNumberArray[counter];
        if (currentNumber > max) max = currentNumber;
        if (currentNumber < min) min = currentNumber;
      
        counter++;
      }

      for(let i=0;i<internalNumberArray.length;i++) {
        counter += internalNumberArray[i]
        }

       return `Max:${max}, Min:${min}, Sum:${counter}`
    }
    let numbersArray=[123,200,"",555,false,20,NaN,664,6000,undefined,true,"apple"]
    console.log(calculateMaxMinSum(numbersArray))



    /* 
    HOMEWORK #6
Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
*/

function getFullName(firstNameArr, lastNameArr) {
    
    if (firstNameArr.length !== lastNameArr.length) {
        return "Number of First Names must be equal to number of Last Names";
      }
  
    let fullName=[]
    for(let i=0 ; i < firstName.length; i++){
    let result= `${i+1}. ${firstNameArr[i]} ${lastNameArr[i]}`
    fullName.push(result)
    }
   return fullName
  }
  let firstName=["Bob", "Jill","Philip"]
let lastName=["Gregory", "Wurtz","Lahm"]
  console.log(getFullName(firstName,lastName))
  

    


