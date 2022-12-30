import { Component } from "react";
import "./card-list.style.css"
class CardList extends Component {
  render() {
    const {users} = this.props;
    return (
      <div className="card-list">
        {users.map(function(user){
          const {id , name , email} = user;
          return <div className="card-container"  key={id}>
          <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`user : ${name} `} />
          <h2>{name}</h2>
          <p>{email}</p>
          </div>
        })}
      </div>
    )
  }
}

export default CardList;