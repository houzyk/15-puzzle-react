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
    if (tile.classList.contains('puzzle-piece')) {
      // this.state.tiles.findIndex(t => t == tile.dataset.key);
    }
    return false
  }

  gameWin () {
    if (this.state.tiles.join() === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0') {
      alert("You Win!");
    }
  }


  gameMove = (e) => {
    // if (this.moveAllow(e.currentTarget)) {

    // }
    this.gameWin();
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
