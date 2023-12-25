console.log("It is working")


// HOMEWORK PART 1
// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed


const h1SelectorEl=document.getElementById("mainHeading")
const paragraphSelectorEl=document.querySelector(".paragraph")
const divContainerEl=document.querySelector(".second-div")
const secondParagraphEl=document.querySelector(".second")
const h1EL = document.getElementsByTagName("h1")[1]
const h3SelectorEl=document.getElementsByTagName("h3")[0]


h1SelectorEl.innerText="Text is Changed"
paragraphSelectorEl.innerText="This is changed also"
secondParagraphEl.innerText="Im changed too"
secondParagraphEl.nextElementSibling.innerText="Im changed three"
h1EL.innerText="Hello there"
h3SelectorEl.innerText="Im done"



