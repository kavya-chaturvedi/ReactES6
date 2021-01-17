import React from "react";
import ReactDOM from "react-dom";
//===Importing different functions except default==
//import PI, {doublePI, triplePI } from "./Math";

//==Importing all at once using wild card===
import * as PI from "./Math";

ReactDOM.render(
  <ul>
    <li>{PI.default}</li>
    <li>{PI.doublePI()}</li>
    <li>{PI.triplePI()}</li>
  </ul>,
  document.getElementById("root")
);
