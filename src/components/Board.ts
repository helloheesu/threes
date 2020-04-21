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
}
