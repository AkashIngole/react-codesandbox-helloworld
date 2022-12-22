import React from "react";
import ReactDOM from "react-dom";

const name = 'Arjun';


ReactDOM.render(
  <>
    <h1>Hello World!</h1>
    <p> This is a pararaph inside render </p>
    <p> This is another tag in div element of render method</p>
    <h1>My name is {name}</h1>
    <p>My lucky number is {5 + 4} </p>
    <p>The random number is {Math.random()}</p>
  </>,
  document.getElementById("root")
);

// Traditional way using javascript
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hey World!";
// document.getElementById("root").appendChild(h1);
