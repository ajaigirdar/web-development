// Get references to the buttons and the list

const addItemBtn = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");
const changeColorBtn = document.getElementById("changeColorBtn");


// add a new line

function addListItem() {
    const newItem = document.createElement("li");
    newItem.textContent = `item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
}

addItemBtn.addEventListener("click", addListItem);


// background color

colors = ['red', 'yellow', 'blue', 'green', 'purple']
function randomColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = randomColor();
}

changeColorBtn.addEventListener("click", changeBackgroundColor);


