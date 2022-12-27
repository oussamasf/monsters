import { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      humans: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { humans: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  render() {
    const filterdHumans = this.state.humans.filter((human) => {
      return human.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="app">
        <input
          className="search-box"
          type="search"
          placeholder="search humans"
          onChange={(event) => {
            this.setState(() => {
              return { searchField: event.target.value };
            });
          }}
        />
        {filterdHumans.map(function (human) {
          return <h1 key={human.id}>{human.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
