//Click Counter
//-----
//Elements from HTML
const countButton = document.querySelector("#countButton");
const count = document.querySelector("#count");

//Start Counter
let number = 0;

//Increment Count on Button Press
countButton.addEventListener("click", function () {
    number = number + 1;
    count.textContent = number;
});
//-----

//Text Toggler
//-----
//Elements from HTML
const toggleButton = document.querySelector("#toggleButton");
const toggleText = document.querySelector("#toggleText");

//Toggle Hidden on Button Press
toggleButton.addEventListener("click", function () {
    toggleText.classList.toggle("hidden");
});
//-----

//Live Input Echo
//-----
//Elements from HTML
const echoInput = document.querySelector("#echoInput");
const echoText = document.querySelector("#echoText");

//Copy User Input to Text
echoInput.addEventListener("input", function () {
    echoText.textContent = echoInput.value;
});
//-----

//Dynamic List
//-----
//Elements from HTML
const listInput = document.querySelector("#listInput");
const addButton = document.querySelector("#addButton");
const myList = document.querySelector("#myList");

//Add Item to List
addButton.addEventListener("click", function () {
    //Get User Input
    const text = listInput.value;
    //New List Element
    const newItem = document.createElement("li");
    //Copy User Input to Element
    newItem.textContent = text;
    //Append Element to List
    myList.appendChild(newItem);
    //Clear Input
    listInput.value = "";
});
//-----
