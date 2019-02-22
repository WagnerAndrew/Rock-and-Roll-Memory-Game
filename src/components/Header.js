import React from "react";

function Header(props) {
    return (
        <header className="text-white">
            <div className="row">
                <div className="col-sm-8 text-wrap d-flex justify-content-center">
                    <h5>{props.title}</h5>
                </div>
                <div className="col-sm-4 text-wrap d-flex justify-content-center">
                    <h5>SCORE {props.score} | TOP SCORE: {props.topScore}</h5>
                </div>
            
            </div>

        </header>
    );
}

export default Header;
