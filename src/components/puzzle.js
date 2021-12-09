import React from "react";
import PuzzlePiece from "./puzzlepiece";

// renders puzzle board
function Puzzle () {
  return(
    <div className="puzzle">
      <PuzzlePiece />
    </div>
  );
}

export default Puzzle;
