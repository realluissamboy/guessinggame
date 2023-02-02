/*
1. Get click to register on console.
    1a. grab the button using javascript
    1b. return console output
2. console to output the user response inside of smaller text fields
    2a. if the guess is incorrect, show alert that guess is either too
        high or tooo low. 
    2b. If guess correct, return "Congratulations!"

2. get input text field to return in the console.
*/


const clickButton = document.getElementById('click-button');

// function onClick(){
//     console.log("I've been clicked")
// }

clickButton.addEventListener('click', function(){ //I forgot to link my js to html
    console.log("I've been clicked!")
})


// let's select some elements from the html

/**Snipper of morning lecture */
// const textField = document.querySelector("input");
// const croissantButton = document.querySelector("#croissant-button");
// const entriesList = document.querySelector("ul");
// const h1 = document.querySelector("h1");

// const entriesArray = [];
// const correctAnswer = "tea";

// console.log(textField, croissantButton, entriesList, h1);

// // let's see what happens when you click the button
// croissantButton.addEventListener("click", function () {
//   const textFieldValue = textField.value;

//   console.log(textFieldValue);

//   if (textFieldValue === correctAnswer) {
//     h1.textContent = "Your answer is correct!";
//     console.log("Your answer is correct!");
//   } else {
//     h1.textContent = "Wrong answer";
//     console.log("Wrong answer");
//   }

//   // add value to the unordered list
//   const listItem = document.createElement("li");
//   listItem.textContent = textField.value;
//   entriesList.appendChild(listItem);

//   entriesArray.push(textFieldValue);
//   console.log(entriesArray);
// });