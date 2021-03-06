import "./game.css";

import Board from "./Board";
import { INITIAL_VALUES, getMergeableValue } from "./Card";
import {
  Direction,
  isDirection,
  getOppositeDirection,
} from "../types/Direction";
import CardPool from "./CardPool";

let board: Board;
let cardPool: CardPool;

const getRandomElement = <T>(array: Array<T>): T => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

const insertRandomCards = (cardCount: number) => {
  for (let i = 0; i < cardCount; i++) {
    const card = cardPool.generateCard(
      INITIAL_VALUES[i % INITIAL_VALUES.length]
    );
    const position = board.getRandomEmptyPosition();
    board.fill(position, card);
  }
  board.render();
};

const getNextValues = (): number => {
  const cardValues = cardPool.getVisibleCards().map((card) => card.getValue());
  const values = cardValues
    .filter((value) => INITIAL_VALUES.includes(value))
    .map((value) => getMergeableValue(value));

  return getRandomElement(values.length ? values : INITIAL_VALUES);
};

const move = (direction: Direction, newCardProbability: number) => {
  const movedCells = board.move(direction);
  if (movedCells.length && Math.random() <= newCardProbability) {
    const oppositeDirection = getOppositeDirection(direction);
    const emptyEdgeCells = board
      .getEdgeCells(oppositeDirection)
      .filter((cell) => cell.isEmpty());
    const position = getRandomElement(emptyEdgeCells).getPosition();

    const value = getNextValues();
    const card = cardPool.generateCard(value);

    board.fill(position, card);
  }
  board.render();
};

const initGame = (
  container: HTMLDivElement,
  row: number,
  col: number,
  initialCardCount: number,
  newCardProbability: number
) => {
  board = new Board(container, row, col);
  cardPool = new CardPool(board.renderer);

  insertRandomCards(initialCardCount);

  document.addEventListener("keyup", ({ key }) => {
    const m = key.match(/Arrow(\w*)/);
    if (!m || !isDirection(m[1])) {
      return;
    }

    const direction = m[1] as Direction;
    move(direction, newCardProbability);
  });
};

export default initGame;
