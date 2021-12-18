const para = document.createElement("p");

// console.log(para);

// para.textContent = "Hello";

para.innerHTML = "Hello";

const textDiv = document.createElement("div");
const paraString = "<p>Text from Para</p>";

textDiv.innerHTML = paraString;
document.body.append(textDiv);
console.log(document.body.children);
// document.body.prepend(textDiv);
// console.log(textDiv.innerHTML);

// Activity1.html javascript code
