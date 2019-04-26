import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <span onClick={() => props.clickedFriend(props.id)} className="clicked">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </span>
  );
}

export default FriendCard;
