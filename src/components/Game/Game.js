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

    componentDidMount(){
        this.setState({ data: this.shuffleArray(this.state.data)});
    }

    function shuffleArray(data) {
        let newArray = data.sort(function(a,b){return 0.5 - Math.random()});
        return newArray;
    }
    render(){
        return();
    }
}

export default Game;