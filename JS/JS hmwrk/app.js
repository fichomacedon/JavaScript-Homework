console.log("hello")

let visitorInput=prompt("Enter your money amount")
let typeInValue=Number(visitorInput)
if(visitorInput===null){
  console.log("Try again");
} else if(typeInValue >= 50) {
  console.log("Go to a restaraunt");
}else {
  console.log("Go to sleep you are tired")
}

console.log(visitorInput, typeInValue)

/* EXERCISE - #1
Decription: Using prompt() display a dialog box that prompts the visitor for input. Will return null on 'Cancel' or the value provided on 'Ok'
Action: Ask the user how much money he has, and depending on the value, suggest to him what he should do */
