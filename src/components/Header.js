import React from "react";

function Header(props) {
    return (
        <header>
            <h2 className="text-wrap">{props.title}</h2>
            <h3 className="text-wrap">Score {props.score} | Top Score: {props.topScore}</h3>
        </header>
    );
}

export default Header;
