const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
    return;
  } else {
    let listItem = document.createElement("li");
    listItem.innerHTML = inputBox.value;
    listContainer.appendChild(listItem);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    listItem.appendChild(span);
  }
  inputBox.value = "";
  saveList();
}

listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveList();
    } else if (event.target.tagName === "SPAN") {
      let listItem = event.target.parentElement;
      listContainer.removeChild(listItem);
      saveList();
    }
  },
  false
);

function saveList() {
  localStorage.setItem("listContainer", listContainer.innerHTML);
}

function loadList() {
  listContainer.innerHTML = localStorage.getItem("listContainer");
}

loadList();
