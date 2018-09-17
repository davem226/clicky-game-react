import React from "react";
import "./Image.css";

const Image = props => {
    return (
        <div className="image">
            <img
                alt={props.species}
                src={props.image}
                onClick={() => {
                    props.processClick(props.id);
                }}
            />
        </div>
    )
}
export default Image;