import "./game.css";

import Board from "./Board";

type Props = {
  container: HTMLDivElement;
  row: number;
  col: number;
};
export default class GameManager {
  board: Board;

  constructor({ container, row, col }: Props) {
    this.board = new Board(container, row, col);
  }
}
