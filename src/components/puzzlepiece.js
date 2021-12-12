import React, { Component } from "react";

// renders individual puzzle pieces
class PuzzlePiece extends Component {
  handleClass (index) { return (index !== 0) ? "puzzle-piece" : ""}

  render () {
    this.props.gameStatus(this.props.tiles);
    return(
      <>
        {this.props.tiles.map( (index) =>
          <div
            className={this.handleClass(index)}
            key={index}
            data-number={index}
            onClick={this.props.gameMove}>
              {(index !== 0) ? index : ""}
          </div>
        )}
      </>
    );
  }
}

export default PuzzlePiece;
