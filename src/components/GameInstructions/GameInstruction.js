import React from "react";
import { Jumbotron } from 'reactstrap';
import "./Instructions.css";

const GameInstructions = (props) => (
    <div className="jumbo">
        <Jumbotron style = {{'background-image': `url(assets/images/mario-background.gif)`}}>
            <h3 className="animated fadeInDown instructions">{props.message}</h3>
        </Jumbotron>
    </div>
);

export default GameInstructions
