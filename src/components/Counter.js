// Counter.js
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount || 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  reset = () => {
    this.setState({
      count: this.props.initialCount || 0,
    });
  };

  render() {
    return (
      <div className="counter">
        <button onClick={this.decrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
        <br />
        <button className="reset-button" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
