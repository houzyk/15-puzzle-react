import React, { Component } from "react";

// renders individual puzzle pieces
class PuzzlePiece extends Component {
  constructor (props) {
    super(props);
    const tiles = [];
    for (let index = 0; index < 16; index++) {
      let random = Math.round(Math.random() * 15);
      while (tiles.includes(random)) (random = Math.round(Math.random() * index));
      tiles.push(random);
    }
    this.state = { tiles: tiles }
  }

  handleClass (index) {
    return (index !== 0) ? "puzzle-piece" : "";
  }

  handleClick (e) {
    
  }

  render () {
    return(
      <>
        {this.state.tiles.map( (index) =>
          <div
            className={this.handleClass(index)}
            key={index}
            data-number={index}
            onClick={this.handleClick}>
              {(index !== 0) ? index : ""}
          </div>
        )}
      </>
    );
  }
}

export default PuzzlePiece;
