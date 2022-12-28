import { Component } from "react";
import "./App.css";

class Sandlag extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: "",
    };
  }
  componentDidMount() {}
  render() {
    const filteredUsers = this.state.users.filter((user) => {
      return user.name.includes(this.state.searchField);
    });
    return (
      <div className="sand">
        <input
          className="search-2"
          placeholder="search.."
          onChange={(event) => {
            this.setState(() => {
              return { searchField: event.target.value };
            });
          }}
        />
        {filteredUsers.map((user) => {
          return <h1 key={user.id}>{user.name}</h1>;
        })}
      </div>
    );
  }
}
export default Sandlag;
