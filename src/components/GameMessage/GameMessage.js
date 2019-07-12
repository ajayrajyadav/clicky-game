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
            newState.message = "correct"
        }else{
            newState.message = "incorrect"
        }

        if (score !== this.props.score || this.state.message !== newState.Message) {
            this.setState(newState);
        }
    }

    messageObj = () => {
        if(this.state.message === 'correct'){
            return {
                updatedMessage: 'You Guessed right',
                updateAnimation: 'animated pulse'
            }
        }else if(this.state.message === 'incorrect'){
            return {
                updatedMessage: 'W R O N G',
                updateAnimation: 'animated wobble'
            } 
        }else{
            return {
                updatedMessage: 'Click Character To Begin',
                updateAnimation: ''
            }
        }
    }

    render(){
        return(
            <li
                className={`gameMessage ${this.state.animating? this.messageObj.updateAnimation: ""} ${this.state.animating? this.state.message: "black"}`}
                id={`${this.state.message}`}
                onAnimationEnd={() => this.setState()}
            >
            </li>
        );
    }
}

export default GameMessage;