import React, { Component } from "react";
import Container from "../Container/Container";
import GameCard from "../GameCard/GameCard";
import GameInstructions from "../GameInstructions/GameInstruction";
import NavBar from "../NavBar/Navbar";
import Footer from "../Footer/Footer"
import data from "../../data.json";

class Game extends Component {
    state = {
        data,
        score: 0,
        topScore: 0,
        message: "Click on an image to earn a point, don't click on any more than once!"
    };

    componentDidMount() {
        this.setState({ data: this.shuffleArray(this.state.data) });
    }

    shuffleArray = (data) => {
        return data.sort(function (a, b) { return 0.5 - Math.random() });
    }

    resetTheArray = newArray => {
        let resetData = data.map(element => ({ ...element, clicked: false }));
        return (this.shuffleArray(resetData));
    }

    rightGuess = newArray => {
        let newScore = this.state.score;
        newScore++;
        let newTopScore = Math.max(newScore, this.state.topScore);
        this.setState({
            data: this.shuffleArray(newArray),
            score: newScore,
            topScore: newTopScore,
            animation: "animation swing"
        })
    }

    wrongGuess = newArray => {
        this.setState({
            data: this.resetTheArray(newArray),
            score: 0
        })
    }

    gameCardClick = id => {
        let guessedRight = false;
        const newArray = this.state.data.map(element => {
            if (!element.id === id && !element.clicked) {
                element.clicked = true;
                guessedRight = true;
            }
            return element
        })
        if (guessedRight) {
            this.rightGuess(newArray)
        } else {
            this.wrongGuess(newArray);
        }
    }

    render() {
        return (
            <div className="fadeIn animated">
                <NavBar score={this.state.score} topScore={this.state.topScore}></NavBar>
                <GameInstructions message={this.state.message}></GameInstructions>
                <Container>
                    {
                        this.state.data.map(element => (
                            <div className="rollIn animated">
                                <GameCard
                                    key={element.id}
                                    id={element.id}
                                    image={element.image}
                                    animate={!this.state.score && this.state.topScore}
                                    clicked={element.clicked}
                                    hancleClick={this.gameCardClick}
                                ></GameCard>
                            </div>
                        ))
                    }
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Game;