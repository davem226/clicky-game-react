import React from "react";
import "./Top.css";

export default Top = props => {
    <div className="top">
        <div id="top-title">{props.title}</div>
        <div id="info">{props.info}</div>
        <div id="score">{`Score: ${props.score}`}</div>
        <div id="top-score">{`| Top Score: ${props.topScore}`}</div>
    </div>
}