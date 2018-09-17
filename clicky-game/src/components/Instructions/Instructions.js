import React from "react";
import "./Instructions.css";

const Instructions = props => {
    return (
        <div className="instructions">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}
export default Instructions;