import { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      human1: { name: "ouss" },
      human2: { name: "tiff" },
      human3: { name: "idrissov" },
    };
  }

  render() {
    return (
      <div className="app">
        <h1>{this.state.human1.name}</h1>
        <h1>{this.state.human2.name}</h1>
        <h1>{this.state.human3.name}</h1>
      </div>
    );
  }
}
export default App;
