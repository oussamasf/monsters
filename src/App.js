import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      humans: [],
      searchFied: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { humans: users };
        });
      });
  }
  onSearchChange = (event) =>
    this.setState(() => {
      return { searchFied: event.target.value.toLowerCase() };
    });
  render() {
    const filteredList = this.state.humans.filter((human) => {
      return human.name.toLowerCase().includes(this.state.searchFied);
    });
    return (
      <div
        className="app"
        style={{
          border:
            filteredList.length === 0
              ? "3px solid red"
              : "3px solid greenyellow",
        }}
      >
        <input
          className="search-bar"
          placeholder="search..."
          onChange={this.onSearchChange}
        />
        {filteredList.map((human) => {
          return <h1 key={human.id}>{human.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
