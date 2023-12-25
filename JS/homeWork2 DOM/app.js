console.log("It is working")

// HOMEWORK PART 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

const mainContainerEl=document.querySelector(".main-container")
const listSelectorEl=document.querySelector(".my-list")

function arraySum(numberArray){
    let sum=0
    for(i=0;i<numberArray.length;i++){
        sum +=  numberArray[i]
   }
    let mathEquasion=document.createElement(`p`)
        mathEquasion.innerText = `2+5+6+7+1=21`
        mainContainerEl.appendChild(mathEquasion)
  
    return sum
}




let numArray=[2,5,6,7,1]
        for (i = 0; i < numArray.length; ++i) {
            let li = document.createElement('li');
            li.innerText = numArray[i];
            listSelectorEl.appendChild(li);
        
        }

    
console.log(arraySum(numArray))