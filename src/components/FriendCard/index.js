import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    // <div>
    //   <nav class="navbar navbar-light bg-light">
    //       <a class="navbar-brand" href="#">Clicky Game!</a>
    //     </nav>
    // </div>
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      {/* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div> */}
      <span onClick={() => props.clickedFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
