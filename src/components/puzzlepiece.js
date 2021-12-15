import React from "react";

function PuzzlePiece (props) {
  const handleClass = (index) => { return (index !== 0) ? "puzzle-piece" : ""}

  const gameStatus = (tiles) => {
    if (tiles.join() === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0') {
      setTimeout(() => {
        alert("You Wins");
        window.location.reload();
      }, 300);
    }
  }

  gameStatus(props.tiles);

  return (
    <>
      {props.tiles.map( (index) =>
        <div
          className={handleClass(index)}
          key={index}
          data-number={index}
          onClick={props.gameMove}>
            {(index !== 0) ? index : ""}
        </div>
      )}
    </>
  );
}

export default PuzzlePiece;
