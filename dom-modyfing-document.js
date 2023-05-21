'use strict';
//1.
// createTextNode vs innerHTML vs textContent
// importance: 5
// We have an empty DOM element elem and a string text.

// Which of these 3 commands will do exactly the same?

// elem.append(document.createTextNode(text)) --this one
// elem.innerHTML = text
// elem.textContent = text--this one

//_______________________________________________________________


//3. Why does "aaa" remain?
// importance: 1
// In the example below, the call table.remove() removes the table from the document.

// But if you run it, you can see that the text "aaa" is still visible.

// // Why does that happen?
// <table id="table">
//     aaa
//     <tr>aaa
//       <td>Test</td>
//     </tr>
//   </table>
  
//   <script>
//     
//     alert(table); // the table, as it should be
  
//     table.remove();
//     // why there's still "aaa" in the document?
//     //That's because this HTML document is incorrect and when browser tries to fix it, text is placed before the table element.
//   </script>
    
// </body>
// </html>

//___________________________________________________________________

//2. Clear the element
// importance: 5
// Create a function clear(elem) that removes everything from the element.

// <ol id="elem">
//   <li>Hello</li>
//   <li>World</li>
// </ol>

// <script>
    
// function clear(elem) {        
      
//     while(elem.lastChild)
//          elem.removeChild(elem.lastChild);
//  }
//  clear(elem);

//   clear(elem); // clears the list
// </script>

//____________________________________________________________________
// Create a list
// importance: 4
// Write an interface to create a list from user input.

// For every list item:

// Ask a user about its content using prompt.
// Create the <li> with it and add it to <ul>.
// Continue until the user cancels the input (by pressing Esc or via an empty entry).
// All elements should be created dynamically.

// If a user types HTML-tags, they should be treated like a text.
/* <script>       

const ulNew= document.createElement('ul');
const title= document.createElement('h3');     
title.textContent= 'Create a list';
document.body.insertAdjacentElement('afterbegin', ulNew); 
ulNew.insertAdjacentElement('beforebegin', title);
let promtList;
do
{
promtList = prompt('Enter the text for list item'); 
console.log(prompt); 
if(promtList!==' ' &&  promtList!==''&& promtList!==null){    
 
 let newLi= document.createElement('li');
 newLi.insertAdjacentHTML('afterbegin', promtList);      
 ulNew.insertAdjacentElement("beforeend",newLi);} 

}
while(promtList);
</script> */

//____________________________________________________________________________________

// Create a tree from the object
// importance: 5
// Write a function createTree that creates a nested ul/li list from the nested object.

let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };

  console.log(data);

  
let container= document.getElementById('tree');

  function createTree (container, data){
    let dataKeys = Object.keys(data);
    console.log(dataKeys);

   if(dataKeys.length > 0){
    const parentUL= document.createElement('ul');
    container.insertAdjacentElement('afterbegin', parentUL);
    
    
    dataKeys.forEach((element)=>{
if(dataKeys.length > 0){
    let newparentLi= document.createElement('li');
    parentUL.insertAdjacentElement('beforeend', newparentLi);
    
newparentLi.insertAdjacentHTML('afterbegin',element);
}
    })
}

let newData= Object.values(data);
    console.log(newData);
for(let i=0; i < newData.length; i++){

}
    
 
  }
createTree(container, data);