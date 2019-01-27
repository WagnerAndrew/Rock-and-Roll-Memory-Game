import React from "react";

function ImageCard(props) {
    return (
        <>
            {props.results.map(result => (

                <div className="card" onClick={() => props.imgPick(result.id)} key={result.id}>
                    <div className="img-container">
                        <img
                            id={result.id}
                            alt={result.name}
                            src={result.image}
                        />
                    </div>
                </div>

            ))}
        </>
    );
}

export default ImageCard;
