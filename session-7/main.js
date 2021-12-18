function changeName() {
  console.log("Clicked");
}

const getCount = () => {
  let count = document.getElementById("display").textContent;
  return parseInt(count);
};

const increament = () => {
  const currentCount = getCount();
  document.getElementById("display").textContent = currentCount + 1;
};

const decreament = () => {
  const currentCount = getCount();
  document.getElementById("display").textContent = currentCount - 1;
};

const reset = () => {
  document.getElementById("display").textContent = 0;
};

const increaseBtn = document.getElementById("inc-btn");
increaseBtn.addEventListener("Click", increament);

const decreaseBtn = document.getElementById("dec-btn");
decreaseBtn.addEventListener("Click", decreament);

const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", reset);
