import "./game.css";

import Board from "./Board";
import Card, { INITIAL_VALUES } from "./Card";
import { isDirection } from "./PositionCalculator";
import { Direction } from "../enum";

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

    document.addEventListener("keyup", ({ key }) => {
      const m = key.match(/Arrow(\w*)/);
      if (!m || !isDirection(m[1])) {
        return;
      }

      board.move(m[1] as Direction);
    });
  }
}
