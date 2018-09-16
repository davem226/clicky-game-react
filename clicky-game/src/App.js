import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Top from "./components/Top";
import Instructions from "./components/Instructions";
import Image from "./components/Image";
import birds from "./birds.json";
import './App.css';

export default class App extends Component {
  state = {
    score: 0,
    topScore: "N/A",
    info: "Click an Image to Begin!",
    birds: birds,
    clickedBirds: []
  };

  componentDidMount() {
    this.setState({
      birds: this.randomizeOrder(this.state.birds)
    });
  };

  processClick = (id) => {
    const selectedBird = this.state.birds.filter(bird => bird.id === id);
    if (this.state.clickedBirds.includes(selectedBird)) {
      this.setState({
        score: 0,
        info: "You Guessed Incorrectly!",
        birds: this.randomizeOrder(this.state.birds),
        clickedBirds: []
      });
    }
    else {
      this.setState({
        score: this.state.score++,
        info: "You Guessed Correctly!",
        birds: this.randomizeOrder(this.state.birds),
        clickedBirds: this.state.clickedBirds.push(selectedBird)
      });
      if (this.state.score > this.state.topScore || this.state.topScore === "N/A") {
        this.updateTopScore();
      }
    }
  };

  updateTopScore = () => {
    this.setState({ topScore: this.state.score });
  };

  randomizeOrder = array => {
    const randomArray = [];
    const dummyArr = array
    const l = array.length;
    while (randomArray.length < l-1) {
      const n = Math.floor(Math.random() * dummyArr.length);
      randomArray.push(dummyArr.splice(n,1));
    }
    randomArray.push(dummyArr[0]);
    return randomArray;
  };

  render() {
    return (
      <Wrapper>
        <Top
          title="Clicky Game"
          info={this.state.info}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Instructions
          title="Clicky Game!"
          text="Click on an image to earn points, but don't click on any more than once!"
        />
        {this.state.birds.map(bird => (
          <Image
            processClick={this.processClick}
            id={bird.id}
            image={bird.image}
            species={bird.species}
          />
        ))}
      </Wrapper>
    );
  }
}