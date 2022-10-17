// adding element through JS
const title = document.createElement("h1");
title.innerText = "Hi!";
title.style.color = "red";

const p = document.createElement("p");
p.innerText = "I'm using JS to add HTML elements!";

// adding element through JS + IDs
const otherTitle = document.createElement("h1");
otherTitle.setAttribute("id", "myName");
otherTitle.innerText = "My name is XX";

// mention that the order of the elements here is how they'll appear on our page
document.body.appendChild(title);
document.body.appendChild(otherTitle);
document.body.appendChild(p); // emphasis on the appendChild to be able to display it
// document.body.appendChild(otherTitle);

// this can now be called with getElementById
const gettingOtherTitleWithId = document.getElementById("myName");
console.log(gettingOtherTitleWithId.innerText);

/// AT THIS POINT YOU CAN ADD A CSS FILE AND CHANGE IT
/// USING THE ID
