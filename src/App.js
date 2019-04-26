import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedId: [],
    score: 0,
    topScore: 0
  };

  clickedFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    let array = this.state.friends;
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    // return array;

    // Set this.state.friends equal to the new friends array
    this.setState({ friends: array });

    //inside this is going to push the id to the clickedId array within the state that will increase the score and then on the same 
    //split function into conditionals !!
    //loop through the clickedFriends, if then's 
    //array for if id of clicked friend is equal to the id of the alreadyclicked then you lose
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        
        <Title>Your choice! Try not to click on the same F.R.I.E.N.D. twice!</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickedFriend={this.clickedFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
