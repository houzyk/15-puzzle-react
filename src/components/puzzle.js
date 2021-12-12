import React, { Component } from "react";
import PuzzlePiece from "./puzzlepiece";

class Puzzle extends Component {
  constructor (props) {
    super(props);
    // renders random puzzle board
    const tiles = [];
    for (let index = 0; index < 16; index++) {
      let random = Math.round(Math.random() * 15);
      while (tiles.includes(random)) (random = Math.round(Math.random() * index));
      tiles.push(random);
    }
    this.state = { tiles: tiles }
  }

  moveAllow (tile, tileIndex, zeroTileIndex) {
    if (tile.classList.contains('puzzle-piece')) {
      return (zeroTileIndex === tileIndex - 1) || (zeroTileIndex === tileIndex - 4) || (zeroTileIndex === tileIndex + 1) || (zeroTileIndex === tileIndex + 4);
    }
    return false
  }

  gameMove = (e) => {
    const tileNumber = parseInt(e.currentTarget.dataset.number, 10);
    const tileIndex = this.state.tiles.findIndex(tile => tile === tileNumber);
    const zeroTileIndex = this.state.tiles.findIndex(tile => tile === 0);
    if (this.moveAllow(e.currentTarget, tileIndex, zeroTileIndex)) {
      const tiles = this.state.tiles;
      tiles[zeroTileIndex] = tileNumber;
      tiles[tileIndex] = 0;
      this.setState({tiles: tiles});
    }
  }

  render () {
    return(
      <div className="puzzle">
        <PuzzlePiece tiles={this.state.tiles} gameMove={this.gameMove} />
      </div>
    );
  }
}

export default Puzzle;
