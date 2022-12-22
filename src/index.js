import React from "react";
import ReactDOM from "react-dom";

const name = "Arjun";

const fname = "Akash";
const lname = "Ingole";

const todaysDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

console.log("Using template literals...");
console.log(`My name is ${name}`);

ReactDOM.render(
  <>
    <h1>Hello World!</h1>
    <p> This is a pararaph inside render </p>
    <p> This is another tag in div element of render method</p>
    <h1>My name is {name}</h1>
    <p>My lucky number is {5 + 4} </p>
    <p>The random number is {Math.random()}</p>
    <p>{`My name is ${fname} ${lname}`}</p>
    <p>Todays date = {todaysDate}</p>
    <p>Current Time = {currentTime}</p>
  </>,
  document.getElementById("root")
);

// Traditional way using javascript
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hey World!";
// document.getElementById("root").appendChild(h1);
