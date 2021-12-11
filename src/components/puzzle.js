import React, { Component } from "react";
import PuzzlePiece from "./puzzlepiece";

// renders puzzle board
class Puzzle extends Component {
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

  moveAllow (tile) {

  }

  gameWin () {

  }


  gameMove (e) {
    // if (this.moveAllow(e.currentTarget)) {

    // }
    // this.gameWin();
  }

  render () {
    return(
      <div className="puzzle">
        <PuzzlePiece tiles={this.state.tiles} gameMove={this.gameMove}/>
      </div>
    );
  }
}

export default Puzzle;
