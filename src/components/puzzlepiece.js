import React from "react";

// renders individual puzzle pieces
function PuzzlePiece () {
  const tileArray = [];
  for (let index = 0; index < 15; index++) tileArray.push(index);

  return(
    <>
      {tileArray.map( (index) =>
        <div className="puzzle-piece" key={index}>
          {index + 1}
        </div>
      )}
    </>
  );
}

export default PuzzlePiece;
