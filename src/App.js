import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Thing from "./example";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "ousf",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>{this.state.name} is this</p>

          <button
            onClick={() => {
              this.setState({ name: "yay" });
            }}
          >
            change name
          </button>
        </header>
        <Thing />
      </div>
    );
  }
}

export default App;
