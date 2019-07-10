import React, {Component} from "react";
import "./GameMessage.css"

class GameMessage extends Component {
    state = {
        animating: false,
        message: ''
    }

    componentDidUpdate(prevProps) {
        let newState = {
            animating: true 
        }

        const {score, topScore} = prevProps;

        if(score === 0 && topScore === 0){
            newState.message = "";
        }else if(score !== 0 && topScore > 0){
            newState.message = "Right"
        }else{
            newState.message = "W R O N G"
        }
    }
}