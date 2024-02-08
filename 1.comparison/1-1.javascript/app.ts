const inputEl = document.querySelector("input")! as HTMLInputElement;
const buttonEl = document.querySelector("button")! as HTMLButtonElement;
const listEl = document.querySelector("ul")! as HTMLUListElement;

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement("li");
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = "";
}

buttonEl.addEventListener("click", addGoal);
