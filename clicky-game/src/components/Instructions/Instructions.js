import React from "react";
import "./Instructions.css";

export default Instructions = props => {
    <div className="instructions">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
    </div>
}