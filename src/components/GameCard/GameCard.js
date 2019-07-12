import React from "./node_modules/react";
import "./GameCard.css";

const GameCard = props => (
    <div 
        role="img" 
        aria-label="click item" 
        className={`gameCard ${props.animate? "animated wobble": ""}`}
        style={{ backgroundImage: `url($props.image`}}
        onClick={ () => props.handleClick(props.id)}
    >
    </div>
)

export default GameCard;