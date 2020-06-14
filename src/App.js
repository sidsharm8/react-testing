import React, { useState } from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false,
    };
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
      error: false,
    });
  };

  decrementCounter = () => {
    const newCounter = this.state.counter - 1;
    if (newCounter >= 0) {
      this.setState({
        counter: newCounter,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    const { counter, error } = this.state;
    return (
      <div className="App" data-testid="component-app">
        <h1 data-testid="counter-display">Counter : {counter}</h1>
        {error ? (
          <h1 style={{ color: "red" }} data-testid="error-message">
            Counter can't go below zero
          </h1>
        ) : (
          ""
        )}

        <button data-testid="increment-button" onClick={this.incrementCounter}>
          Increment Counter
        </button>
        <button data-testid="decrement-button" onClick={this.decrementCounter}>
          Decrement Counter
        </button>
      </div>
    );
  }
}
/* const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter(counter + 1);
  return (
    <div className="App" data-testid="component-app">
      <h1 data-testid="counter-display">Counter : {counter}</h1>
      <button data-testid="increment-button" onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
}; */

export default App;
