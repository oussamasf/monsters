import { Component } from "react";

class Thing extends Component {
  constructor() {
    super();
    this.state = {
      thing: "FfFF",
    };
  }
  render() {
    return (
      <div>
        <p>hello {this.state.thing}</p>
        <button
          onClick={() => {
            this.setState({ thing: "world" });
          }}
        >
          click me
        </button>
      </div>
    );
  }
}

export default Thing;
