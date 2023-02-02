/*
1. Get click to register on console.
    1a. grab the button using javascript
    1b. return console output
    if statement - if not a number, else...
    if correct guess, else... 
2. console to output the user response inside of smaller text fields
    2a. if the guess is incorrect, show alert that guess is either too
        high or tooo low. 
    2b. If guess correct, return "Congratulations!"
    2. get input text field to return in the console.
3. Get the values to appear somewhere
4. Limit the number of values
    */
const inputField = document.getElementById("text-field");
const clickButton = document.getElementById("click-button");
const inputList = document.querySelector("ul");

const inputArray = [];
let correctAnswer = Math.floor(Math.random() * 100).toString(); //This generates random number between 0 - 100
console.log("The correct answer is: ", correctAnswer);

clickButton.addEventListener("click", function () {
  const inputFieldValue = inputField.value;
  console.log("This is the input field value: ", inputFieldValue);

  // if (inputFieldValue === correctAnswer) {
  //     console.log("You're right!");
  // } else {
  //     console.log("You're wrong!");
  // }

  const listItem = document.createElement("li");
  listItem.textContent = inputField.value;
  inputList.appendChild(listItem);

  inputArray.push(inputFieldValue);
  console.log(inputArray);

  //Create a counter to limit the number of guesses. How do we keep count?
  //If counter is less than 5, then.. it continues
  //If counter is 5, stop
  const countArray = inputArray.length;
  console.log(countArray, "This is the countarray");
  let counter = countArray;
  console.log("The Counter is:", counter);

  if (counter < 5) {
    counter++;
    console.log("You have more guesses");
  } else if (counter >= 5) {
    console.log("You're out of guesses");
  }
});
