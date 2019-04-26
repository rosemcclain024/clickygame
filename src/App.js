import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends,
    clickedId: [],
    score: 0,
    topScore: 0
  };

  clickedFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
  
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

  render() {
    return (

    

      <Wrapper>
          <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand">Navbar</a>
          </nav>
        
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
            <h1 class="display-4">F.R.I.E.N.D.S Clicker Game!</h1>
            <p class="lead">Click on an image to start! Try not to click the same friend twice :) Good luck!</p>
            </div>
          </div>
        
        <Title></Title>
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
