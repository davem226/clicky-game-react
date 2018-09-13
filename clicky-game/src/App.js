import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Top from "./components/Top";
import Instructions from "./components/Instructions";
import Image from "./components/Image";
import birds from "./birds.json";
import './App.css';

export default class App extends Component {
  state = {
    score = 0,
    topScore = "N/A",
    birds,
    birdsGuessed = []
  };

  removeBird = id => {
    
  }

  render() {
    return (
      <Wrapper>
        <Top
          title
          guess
          score
          topScore
        />
        <Instructions
          title
          text
        />
        {this.state.birds.map(bird => (
          <Image
            image = {bird.image}
          />
        ))}  
      </Wrapper>
    );
  }
}