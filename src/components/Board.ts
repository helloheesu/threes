import Cell from "./Cell";
import GridCalculator from "./GridCalculator";

export default class Board {
  public el: HTMLDivElement;
  private cells: Cell[] = [];
  private renderer: Renderer;

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

  getRandomEmptyPosition(): CellPosition {
    const emptyCells = this.cells.filter((cell) => cell.isEmpty());
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const cell = emptyCells[randomIndex];
    return { row: cell.row, col: cell.col };
  }

  fill(position: CellPosition, content: Component) {
    const { row, col } = position;
    this.cells[row * this.colNum + col].fill(content);
    this.renderer.appendChild(content.el);
    this.renderer.setPosition(content.el, position);
  }
}
