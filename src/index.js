import React from "react";
import ReactDOM from "react-dom";
import PI from "./Math";
import { doublePI, triplePI } from "./Math";

ReactDOM.render(
  <ul>
    <li>{PI}</li>
    <li>{doublePI()}</li>
    <li>{triplePI()}</li>
  </ul>,
  document.getElementById("root")
);
