import "./game.css";

import Board from "./Board";
import Card, { INITIAL_VALUES } from "./Card";

type Props = {
  container: HTMLDivElement;
  row: number;
  col: number;
};
export default class GameManager {
  constructor({ container, row, col }: Props) {
    const board = new Board(container, row, col);

    for (let i = 0; i < 4; i++) {
      const card = new Card(INITIAL_VALUES[i % INITIAL_VALUES.length]);
      const position = board.getRandomEmptyPosition();
      board.fill(position, card);
    }
  }
}
