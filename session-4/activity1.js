function add(parent, childTag, text) {
  const list = document.getElementById("elem");
  const li = document.createElement(childTag);

  li.textContent = text; // adding the text to list item
  list.appendChild(li); // appending the list item to the ordered list
}

add("elem", "li", "Feeling Lonely🙁"); //calling function
add("elem", "li", "Just DO something");
add("elem", "li", "which distracts your attention 🤘🏻");
