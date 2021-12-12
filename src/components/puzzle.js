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
      const tileIndex = this.state.tiles.findIndex(t => t == tile.dataset.number);
      const zeroTileIndex = this.state.tiles.findIndex(t => t === 0);

      // Helper Functions
      const handleCornerCase = (tile1, tile2) => {
        return (zeroTileIndex === tileIndex + tile1) || (zeroTileIndex === tileIndex + tile2);
      }

      const handleRangeCase = (tile1, tile2, tile3) => {
        return (zeroTileIndex === tileIndex + tile1) || (zeroTileIndex === tileIndex + tile2) || (zeroTileIndex === tileIndex + tile3);
      }

      // Move Checks
      switch (tileIndex) {
        case 0: return handleCornerCase(1, 4); // top left
        case 3: return handleCornerCase(-1, 4); // top right
        case 12: return handleCornerCase(1, -4); // btm left
        case 15: return handleCornerCase(-1, -4); // btm right
        default:
            if (tileIndex < 3) return handleRangeCase(-1, 4, 1); // top range
            if (tileIndex === 4 || tileIndex === 8) return handleRangeCase(1, -4, 4); // left range
            if (tileIndex === 7 || tileIndex === 11) return handleRangeCase(-1, -4, 4); // right range
            if (tileIndex > 12) return handleRangeCase(-1, -4, 1); // btm range
          return (zeroTileIndex === tileIndex - 1) || (zeroTileIndex === tileIndex - 4) || (zeroTileIndex === tileIndex + 1) || (zeroTileIndex === tileIndex + 4); //  middle group
      }
    }
    return false
  }

  gameStatus () {
    if (this.state.tiles.join() === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0') {
      setTimeout(() => {
        alert("You Wins");
        window.location.reload();
      }, 300);
    }
  }

  gameMove = (e) => {
    this.gameStatus();
    if (this.moveAllow(e.currentTarget)) {
      // this.setState(
      //   {}
      // );
    }
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
