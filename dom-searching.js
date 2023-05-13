'use strict';
// Search for elements
// importance: 4
// Here’s the document with the table and form.

// How to find?…

// The table with id="age-table".
const table = document.getElementById('age-table');
table.style.color = 'red';
// All label elements inside that table (there should be 3 of them).
const labels= document.querySelectorAll('td>label');

alert(labels.length);



// The first td in that table (with the word “Age”).
let td= document.querySelectorAll("td")[0];
td.style.color= 'blue';
// The form with name="search".
const form= document.getElementsByName('search')[0];
form.style.backgroundColor = 'orange';
// The first input in that form.
const firstInput= document.querySelector('form >label>input');
firstInput.style.backgroundColor='purple';
// The last input in that form.
const lastInput = document.querySelector('form>input');
lastInput.style.backgroundColor= 'pink';
// Open the page table.html in a separate window and make use of browser tools for that.