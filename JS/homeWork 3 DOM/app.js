console.log("it is working")

const containerSelectorEl=document.querySelector(".container")
const mainHeadingEl=document.querySelector("#main-heading")
const secondaryHeadingEl=document.querySelector(".ingredients")
const ingredientListEl=document.querySelector(".list-ingredients")

let recipeName = prompt("Enter the name of the recipe:");

let input = prompt("How many ingredients do we need for the recipe?");
let numberOfIngredients = Number(input);

    if (Number.isNaN(numberOfIngredients) || numberOfIngredients <= 0) {
        alert("Please enter a valid number greater than zero for the ingredients.");
    }

let ingredientsList = `<h1> ${recipeName} </h1>`;
ingredientsList += "<h2>Ingredients:</h2>";
ingredientsList += "<ul>";


for (let i = 0; i < numberOfIngredients; i++) {
    let ingredient = prompt(`Enter ingredient   ${i+1}  :`);
    ingredientsList += `<li> ${ingredient} </li>`;
}


ingredientsList += "</ul>";

containerSelectorEl.innerHTML = ingredientsList;

document.body.appendChild(containerSelectorEl);