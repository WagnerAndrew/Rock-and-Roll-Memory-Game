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

    componentDidMount() {
        this.imgShuffle(images);
    }
    

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
            const { topScore, score } = this.state
            let newScore = score + 1;
            let newTopScore = Math.max(newScore, topScore)

            this.setState({
                images: this.imgShuffle(images),
                score: newScore,
                topScore: newTopScore
            })
        } else if (correctGuess === false) {

            this.state.images.map(image => image.picked = false);

            this.setState({
                images: this.imgShuffle(images),
                score: 0
            })

            

        }
    };

    // imgPickReset = imgPickReset => {
    //     imgPickReset.map(image =>  { image.picked = false } ) return imgPickReset}

    imgShuffle = imgShuffle => {
        for (let i = imgShuffle.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [imgShuffle[i], imgShuffle[j]] = [imgShuffle[j], imgShuffle[i]];
        }

        return imgShuffle
    };


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
