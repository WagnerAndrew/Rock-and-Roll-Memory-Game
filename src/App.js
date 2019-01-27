import React, { Component } from "react";
// import Image from "./components/Image";
import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    images,
    score: 0,
    topScore: 0,
    picked: false

  };
 
  imgPick = event=> {

    const type = event.target.attributes.getNamedItem('data-type').value;
    console.log ("Type is: ", type)

    if (type === "false") {
      
      this.setState({
        // picked: true,
        score: this.state.score + 1,
        topScore: this.state.topScore + 1
      })
    } else {
      this.setState({
        score: 0
      })
    }
  };

 
  render() {
    return (
      <>
        <header>
          <h2 className="text-wrap">Click a Rock & Roll Hall of Famer to begin... But don't click them twice!</h2>
          <h3 className="text-wrap">Score {this.state.score} | Top Score: {this.state.topScore}</h3>
        </header>

        <div className="wrapper">

          {this.state.images.map(image => (

            <div className="card">
              <div className="img-container">
                <img
                  id={image.id}
                  key={image.id}
                  alt={image.name}
                  src={image.image}
                  data-type={this.state.picked}
                  onClick={this.imgPick}
                />
              </div>
            </div>

          ))}

        </div>
      </>
    )
  }
}

export default App;
