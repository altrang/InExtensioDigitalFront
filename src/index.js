import React from "react";
import ReactDOM from "react-dom";

import MainContainer from "./MainContainer";

import "./index.css";

function App() {
  return (
    <div className="App">
      <h1>Hello InExtensoDigital</h1>
      <MainContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
