import React, { Component } from "react";

// renders individual puzzle pieces
class PuzzlePiece extends Component {
  handleClass (index) { return (index !== 0) ? "puzzle-piece" : ""}

  gameStatus (tiles) {
    if (tiles.join() === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0') {
      setTimeout(() => {
        alert("You Wins");
        window.location.reload();
      }, 300);
    }
  }

  render () {
    this.gameStatus(this.props.tiles);
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
