const isSquareInside = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;
const knightMoveLogic = [
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
];

const getValidMoves = (x, y) => {
  const movesArr = [];
  knightMoveLogic.forEach(([addX, addY]) => {
    const moveSquare = [x + addX, y + addY];
    if (isSquareInside(moveSquare)) movesArr.push(moveSquare);
  });

  return movesArr;
};

const createAdjacencyList = () => {
  const boardArr = [];

  for (let i = 0; i < 8; i++) {
    const colArr = [];
    for (let j = 0; j < 8; j++) {
      colArr.push(getValidMoves(i, j));
    }
    boardArr.push(colArr);
  }

  return boardArr;
};

const possibleMoves = createAdjacencyList();

export default possibleMoves;
