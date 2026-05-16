// Task 1.

const input = dacument.getElementById("inputField");
const input = dacument.getElementById("output");

input.addEventListener("input", () => {
  output.textContent = input.value;
});

// Task 2.

const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = document.getElementById("name").value;
  console.log("Submitted Name:", nameValue);
});

// Task 3.

const list = document.getElementById("itemList");

list.addEventListener("click", (e) => {
  if(e.target.tagName === "LI") {
    alert("You clicked: " + e.target.textContent);
  }
});

//   Task bonus
  const addBtn = document.getElementById("addItem");

  addBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item " + 
    (list.children.length + 1);
    list.appendChild(newItem);
});

