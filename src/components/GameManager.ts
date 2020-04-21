import "./game.css";

import Board from "./Board";
import GridCalculator from "./GridCalculator";

type Props = {
  container: HTMLDivElement;
  row: number;
  col: number;
};
export default class GameManager {
  board: Board;
  renderer: Renderer;

  constructor({ container, row, col }: Props) {
    this.renderer = new GridCalculator(container, row, col, 10);
    this.board = new Board(container, row, col, this.renderer);
  }
}
