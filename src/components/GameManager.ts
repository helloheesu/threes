import "./game.css";

import Board from "./Board";
import { INITIAL_VALUES } from "./Card";
import {
  Direction,
  isDirection,
  getOppositeDirection,
} from "../types/Direction";
import CardPool from "./CardPool";

type Props = {
  container: HTMLDivElement;
  row: number;
  col: number;
  initialCardCount: number;
  newCardProbability: number;
};
export default class GameManager {
  constructor({
    container,
    row,
    col,
    initialCardCount,
    newCardProbability,
  }: Props) {
    const board = new Board(container, row, col);
    const cardPool = new CardPool(board.renderer);

    for (let i = 0; i < initialCardCount; i++) {
      const card = cardPool.generateCard(
        INITIAL_VALUES[i % INITIAL_VALUES.length]
      );
      const position = board.getRandomEmptyPosition();
      board.fill(position, card);
    }
    board.render();

    document.addEventListener("keyup", ({ key }) => {
      const m = key.match(/Arrow(\w*)/);
      if (!m || !isDirection(m[1])) {
        return;
      }

      const direction = m[1] as Direction;
      const movedCells = board.move(direction);
      if (movedCells.length && Math.random() <= newCardProbability) {
        const oppositeDirection = getOppositeDirection(direction);
        const emptyEdgeCells = board
          .getEdgeCells(oppositeDirection)
          .filter((cell) => cell.isEmpty());
        const position = emptyEdgeCells[
          Math.floor(Math.random() * emptyEdgeCells.length)
        ].getPosition();

        const index = Math.floor(Math.random() * INITIAL_VALUES.length);
        const card = cardPool.generateCard(INITIAL_VALUES[index]);

        board.fill(position, card);
      }
      board.render();
    });
  }
}
