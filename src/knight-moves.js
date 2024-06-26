import possibleMoves from './board-data.js';
import Queue from './queue.js';

const isSameSquare = ([x1, y1], [x2, y2]) => x1 === x2 && y1 === y2;

const showPath = (path) => {
  const numberOfMoves = path.length - 1;
  const pluralSuffix = numberOfMoves === 1 ? '' : 's';
  console.log(
    `You made it in ${numberOfMoves} move${pluralSuffix}! Here's your path:`,
  );
  path.forEach((move) => console.log(move));
  return '';
};

const knightMoves = (fromSquare, toSquare) => {
  const queue = new Queue();
  const visitedSquares = [fromSquare];
  const path = [];

  possibleMoves[fromSquare[0]][fromSquare[1]].forEach((square) =>
    queue.enqueue({ square, parent: { square: fromSquare } }),
  );

  while (!queue.isEmpty()) {
    const squareObj = queue.dequeue();

    if (isSameSquare(squareObj.square, toSquare)) {
      let currentSquare = squareObj;
      while (currentSquare) {
        path.push(currentSquare.square);
        currentSquare = currentSquare.parent;
      }
      return showPath(path.reverse());
    }

    visitedSquares.push(squareObj.square);
    possibleMoves[squareObj.square[0]][squareObj.square[1]]
      .filter(
        (nextSquare) =>
          !visitedSquares.some((visitedSquare) =>
            isSameSquare(nextSquare, visitedSquare),
          ),
      )
      .forEach((nextSquare) =>
        queue.enqueue({ square: nextSquare, parent: squareObj }),
      );
  }

  return 'Not found';
};

console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([0, 0], [1, 2]));
console.log(knightMoves([0, 0], [4, 3]));
console.log(knightMoves([3, 3], [0, 0]));
console.log(knightMoves([0, 0], [7, 7]));
