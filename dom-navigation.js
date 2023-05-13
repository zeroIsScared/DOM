'use strict';
// For each of the following, give at least one way of how to access them:;

// The <div> DOM node?

const divNode= document.body.childNodes[1];


console.log(divNode);


const divElement = document.body.firstElementChild;

const divElement1= document.body.children[0];

console.log(divElement);

console.log(divElement1);
// The <ul> DOM node?
const ulElement= document.body.children[1];
console.log(ulElement);

const ulNode= document.body.childNodes[3];
console.log(ulNode);
// The second <li> (with Pete)?
//const body = getElementByTagName('body');
const ul = document.body.children[1];
const peteElement = ul.lastElementChild;
const peteElement1 = document.querySelectorAll('LI')[1];
console.log(ul, peteElement, );
console.log( peteElement );
console.log(peteElement1);

//_________________________________________________________________________

// The sibling question
// importance: 5
// If elem – is an arbitrary DOM element node…

// Is it true that elem.lastChild.nextSibling is always null?  true
// Is it true that elem.children[0].previousSibling is always null ? false






