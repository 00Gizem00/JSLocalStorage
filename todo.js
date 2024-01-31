let btn = document.querySelector("#myBtn");
let btn2 = document.querySelector("#myBtn2");
let textbox = document.querySelector("#myTextField");
let list = document.querySelector("#todoList");


function updateUI() {
    // clear the list
    list.innerHTML = "";
    // get the todo list from local storage
    const todo = JSON.parse(localStorage.getItem("todoList")) || [];
    // iterate over the todo list and create list items
    todo.forEach(item => {
      let li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }
  
  btn.addEventListener("click", function () {
    // get the textbox value
    let value = textbox.value;
    // check if the value is not empty
    if (value === '') {
        return;
    }
    if (value) {
      // get the todo list from local storage or create an empty array
      let todo = JSON.parse(localStorage.getItem("todoList")) || [];
      // push the value to the todo list
      todo.push(value);
      // store the todo list in local storage
      localStorage.setItem("todoList", JSON.stringify(todo));
      // update the UI
      updateUI();
      // clear the textbox value
      textbox.value = "";
    }
  });
  
  // add an event listener for the document load event
  document.addEventListener("DOMContentLoaded", function () {
    // update the UI on load
    updateUI();
  });

document.getElementById('myBtn2').addEventListener("click", function () {
    localStorage.clear();
    updateUI();
});
