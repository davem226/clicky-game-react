import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Top from "./components/Top";
import Instructions from "./components/Instructions";
import Image from "./components/Image";
import birds from "./birds.json";
import './App.css';

export default class App extends Component {
  state = {
    score: 0,
    topScore: "N/A",
    info: "Click a Warbler to Begin!",
    birds: birds,
    clickedBirds: []
  };

  componentDidMount() {
    this.setState({
      birds: this.randomizeOrder(this.state.birds),
    });
  };

  processClick = (id) => {
    const selectedBird = this.state.birds.filter(bird => bird.id === id)[0];
    if (this.state.clickedBirds.includes(selectedBird)) {
      this.setState({
        score: 0,
        info: "You Guessed Incorrectly!",
        birds: this.randomizeOrder(this.state.birds),
        clickedBirds: []
      });
    }
    else {
      this.state.clickedBirds.push(selectedBird);
      if (this.state.score >= this.state.topScore || this.state.topScore === "N/A") {
        this.setState({ topScore: this.state.score + 1 });
      }
      this.setState({
        score: this.state.score + 1,
        info: "You Guessed Correctly!",
        birds: this.randomizeOrder(this.state.birds),
        clickedBirds: this.state.clickedBirds,
      });
    }
  };

  randomizeOrder = array => {
    const randomArray = [];
    const l = array.length;
    while (randomArray.length < l - 1) {
      const n = Math.floor(Math.random() * array.length);
      randomArray.push(array.splice(n, 1)[0]);
    }
    randomArray.push(array[0]);
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
          text="Click a warbler to earn points, but don't click any more than once!"
        />
        <Container>
          {this.state.birds.map(bird => (
            <Image
              processClick={this.processClick}
              id={bird.id}
              image={bird.image}
              species={bird.species}
            />
          ))}
        </Container>
      </Wrapper>
    );
  }
}