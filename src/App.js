import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ourUsers: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { ourUsers: users };
        });
      });
  }
  onSearchChange = (event) =>
    this.setState(() => {
      return { searchField: event.target.value.toLowerCase() };
    });
  render() {
    const filteredList = this.state.ourUsers.filter((user) => {
      return user.name.toLowerCase().includes(this.state.searchField);
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
        <CardList users={filteredList} />
      </div>
    );
  }
}

export default App;
