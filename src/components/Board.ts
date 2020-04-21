import Cell from "./Cell";
import GridCalculator from "./GridCalculator";
import { Direction, getOppositeDirection } from "../types/Direction";
import Card from "./Card";

export default class Board {
  public el: HTMLDivElement;
  private cells: Cell[] = [];
  public renderer: Renderer;

  constructor(
    private container: HTMLDivElement,
    public rowNum: number,
    public colNum: number
  ) {
    this.el = document.createElement("div");
    this.el.classList.add("board");
    this.container.appendChild(this.el);

    this.renderer = new GridCalculator(this.el, rowNum, colNum, 10);

    for (let rowIndex = 0; rowIndex < rowNum; rowIndex++) {
      for (let colIndex = 0; colIndex < colNum; colIndex++) {
        this.cells.push(new Cell(this.renderer, rowIndex, colIndex));
      }
    }
  }

  getNextPosition(
    { row, col }: CellPosition,
    direction: Direction
  ): CellPosition {
    switch (direction) {
      case Direction.Left:
        return {
          row,
          col: col - 1,
        };
      case Direction.Right:
        return {
          row,
          col: col + 1,
        };
      case Direction.Up:
        return {
          row: row - 1,
          col,
        };
      case Direction.Down:
        return {
          row: row + 1,
          col,
        };
      default:
        break;
    }
  }

  getRandomEmptyPosition(): CellPosition {
    const emptyCells = this.cells.filter((cell) => cell.isEmpty());
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const cell = emptyCells[randomIndex];
    return { row: cell.row, col: cell.col };
  }

  fill({ row, col }: CellPosition, content: Card) {
    this.cells[row * this.colNum + col].fill(content);
  }

  render() {
    this.cells.forEach((cell) => {
      const content = cell.getContent();
      if (!content) {
        return;
      }

      const position = cell.getPosition();
      this.renderer.setPosition(content.el, position);
    });
  }

  getEdgeCells(direction: Direction): Cell[] {
    switch (direction) {
      case Direction.Left:
        return this.cells.filter((cell) => cell.col === 0);
      case Direction.Right:
        return this.cells.filter((cell) => cell.col === this.colNum - 1);
      case Direction.Up:
        return this.cells.filter((cell) => cell.row === 0);
      case Direction.Down:
        return this.cells.filter((cell) => cell.row === this.rowNum - 1);
      default:
        break;
    }
  }

  move(direction: Direction) {
    const edgeCells = this.getEdgeCells(direction);
    const oppositeDirection = getOppositeDirection(direction);

    const pullNextCell = (cell: Cell) => {
      const position = { row: cell.row, col: cell.col };

      const nextPosition = this.getNextPosition(position, oppositeDirection);
      const nextCell = this.cells[
        nextPosition.row * this.colNum + nextPosition.col
      ];

      if (!nextCell) {
        return;
      }

      nextCell.mergeContentInto(cell);
      pullNextCell(nextCell);
    };

    edgeCells.forEach((cell) => pullNextCell(cell));
  }
}
