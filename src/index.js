import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


const arrValues = [10,20,30,40,50];
ReactDOM.render(<App numbers={arrValues}/>, document.getElementById("root")) //The arrValues will pass as the props 

