import React from "react";

// renders individual puzzle pieces
function PuzzlePiece () {
  const tiles = [];
  for (let index = 0; index < 16; index++) {
    let random = Math.round(Math.random() * 15);
    while (tiles.includes(random)) (random = Math.round(Math.random() * index));
    tiles.push(random);
  }

  const handleClass = (index) => {
    return (index !== 0) ? "puzzle-piece" : "";
  }

  return(
    <>
      {tiles.map( (index) =>
        <div
          className={handleClass(index)}
          key={index}>
            {(index !== 0) ? index : ""}
        </div>
      )}
    </>
  );
}

export default PuzzlePiece;
