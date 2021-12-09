import React from "react";

function PuzzlePiece () {

  const array = [];
  for (let index = 0; index < 15; index++) array.push(index);

  return(
    <>
      {array.map( (index) =>
        <div className="puzzle-piece" key={index}>
          {index + 1}
        </div>
      )}
    </>
  );
}

export default PuzzlePiece;
