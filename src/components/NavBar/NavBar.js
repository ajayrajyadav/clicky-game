import React from "react";
import './NavBar.css';
import GameMessage from '../GameMessage';

const Navbar = (props) => {
    return(
        <div className='header'>
            <ul>
                <li><h2 className='title animated shake'>Clicky-Game</h2></li>
                <GameMessage score={props.score} topScore={props.topScore} />
                <li id='score'>Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </div>
    )
}

export default Navbar;