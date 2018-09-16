import React from "react";
import "./Image.css";

export default Image = props => {
    <div className="image">
        <img
            alt={props.species}
            src={props.image}
            onClick={() => {
                props.processClick(props.id);
            }}
        />
    </div>
}