const colorParent = document.getElementById("colors");
colorParent.addEventListener("click", (event) => {
  const selectedDiv = document.getElementById("selected");

  // console.log(selectedDiv);

  selectedDiv.style.backgroundColor = event.target.id;
  selectedDiv.textContent = `Selected Div :` + event.target.id;
});
