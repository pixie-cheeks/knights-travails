import possibleMoves from './board-data.js';
import Queue from './queue.js';

const isSameSquare = ([x1, y1], [x2, y2]) => x1 === x2 && y1 === y2;

const knightMovesRec = ([x1, y1], [x2, y2], queue) => {};

const knightMoves = (fromSquare, toSquare) =>
  knightMovesRec(fromSquare, toSquare, new Queue());

console.log(possibleMoves[3][3]);
