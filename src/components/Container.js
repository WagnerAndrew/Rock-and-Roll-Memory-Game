import React, { Component } from "react";
import Header from "./Header";
import ImageCard from "./ImageCard";
import images from "./images.json";

class Container extends Component {
    state = {
        images,
        score: 0,
        topScore: 0,
    };

imgPick = id => {
        console.log("ID is: ", id)

        let correctGuess = false;

        const images = this.state.images.map(image => {
            const imgCopy = { ...image }

            if (imgCopy.id === id) {
                if (imgCopy.picked === false) {
                    imgCopy.picked = true
                    correctGuess = true
                }
            }
            return imgCopy
        }
        );
        if (correctGuess === true) {
            const {topScore, score} = this.state
            let newScore = score + 1;
            let newTopScore = Math.max(newScore, topScore)

            this.setState({ 
                images: this.imgShuffle(images),
                score: newScore,
                topScore: newTopScore            
            })
        } else if (correctGuess === false) {
            this.setState({ score: 0 })
        }

        
};

imgShuffle = imgCopy => {

            // var j, x, i;
            // for (i = imgCopy.length - 1; i > 0; i--) {
            //     j = Math.floor(Math.random() * (i + 1));
            //     x = imgCopy[i];
            //     imgCopy[i] = imgCopy[j];
            //     imgCopy[j] = x;
         
                for (let i = imgCopy.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [imgCopy[i], imgCopy[j]] = [imgCopy[j], imgCopy[i]];
                }
               
            



            return imgCopy;
        
}

    render() {
        return (
            <>
                <Header score={this.state.score} topScore={this.state.topScore} />
                <div className="wrapper">
                    <ImageCard
                        results={this.state.images}
                        imgPick={this.imgPick}
                    />
                </div>
            </>
        );
    }
}

export default Container;
