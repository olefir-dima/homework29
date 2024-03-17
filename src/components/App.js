// App.js
import React, { Component } from "react";
import Counter from "./Counter";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Counter App</h1>
        <Counter initialCount={0} />
      </div>
    );
  }
}

export default App;
