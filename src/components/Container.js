import React, { Component } from "react";
import Header from "./Header";
import ImageCard from "./ImageCard";
import images from "./images.json";

class Container extends Component {
    state = {
        images,
        title: "CLICK A ROCK & ROLL HALL OF FAMER TO BEGIN... BUT DON'T CLICK THEM TWICE!",
        score: 0,
        topScore: 0
    };

    componentDidMount() {
        this.imgShuffle(this.state.images);
    }

    titleCorrect() {

        setTimeout(() => {
            this.setState({
                title: ""
            })
                ;
        }, 1000);

    }



    imgPick = id => {
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
                topScore: newTopScore,
                title: "GOOD GUESS!",
            }, () => {
                    this.titleCorrect()
                })

        } else if (correctGuess === false) {
            const images = this.state.images.map(image => {
                const imgCopy = { ...image }


                if (imgCopy.picked === true) {
                    imgCopy.picked = false
                }

                return imgCopy
            }
            );

            this.setState({
                images: this.imgShuffle(images),
                title: "YOU ALREADY PICKED THAT ROCKER! BACK TO ZERO - CLICK AGAIN",
                score: 0,
            })
        }

        if (this.state.topScore === 11) {

            const images = this.state.images.map(image => {
                const imgCopy = { ...image }


                if (imgCopy.picked === true) {
                    imgCopy.picked = false
                }

                return imgCopy
            }
            );

            this.setState({
                images: this.imgShuffle(images),
                title: "YOU GOT THEM ALL! CLICK TO PLAY AGAIN!",
                score: 0,
                topScore: 0
            })
        }


    };

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
                <Header title={this.state.title} score={this.state.score} topScore={this.state.topScore} />
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
