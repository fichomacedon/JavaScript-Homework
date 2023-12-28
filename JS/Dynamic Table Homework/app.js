console.log("It Is Working")


/*
HOMEWORK
CREATE A DYNAMIC TABLE
Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :)

*/

const dynTableEl=document.querySelector(".dynTable")
const rowBtnEl=document.querySelector(".btn")
const colBtnEl=document.querySelector(".btnCols")
const inputRowsEl=document.querySelector(".inputNumberOfRows")
const inputColsEl=document.querySelector(".inputNumberOfColumns")
const errorMsgEl = document.querySelector(".error-msg");
function generateTableRow(number, table) {

    let inputHtml = "";
  
    for (let i = 0; i < number; i++) {
      inputHtml += `
      
          <tr>
          <td class="column"></td>
          </tr>
     
      `;
      
    }
  
    table.innerHTML+=inputHtml
  }

  rowBtnEl.addEventListener("click", function(){
    const inputRowsElValue = Number(inputRowsEl.value);

    if (Number.isNaN(inputRowsElValue) || inputRowsElValue <= 0) {
      errorMsgEl.innerText = "Invalid Number ";
      return;
    }

   
  
    
    generateTableRow(inputRowsElValue, dynTableEl);
    
  })

  function generateTableColumn(number, table) {

    let inputHtml = "";
  
    for (let i = 0; i < number; i++) {
      inputHtml += `
      
          
          
          <td class="column"></td>
          
     
      `;
      
    }
  
    table.innerHTML+=inputHtml
  }
    
  colBtnEl.addEventListener("click", function(){
    const inputColsElValue = Number(inputColsEl.value);

    if (Number.isNaN(inputColsElValue) || inputColsElValue <= 0) {
      errorMsgEl.innerText = "Invalid Number ";
      return;
    }
  
    
    generateTableColumn(inputColsElValue, dynTableEl);
  })

 

  

