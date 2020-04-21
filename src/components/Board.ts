import Cell from "./Cell";

export default class Board {
  public el: HTMLDivElement;
  private cells: Cell[] = [];

  constructor(
    private container: HTMLDivElement,
    public rowNum: number,
    public colNum: number,
    renderer: Renderer
  ) {
    this.el = document.createElement("div");
    this.el.classList.add("board");

    for (let rowIndex = 0; rowIndex < rowNum; rowIndex++) {
      for (let colIndex = 0; colIndex < colNum; colIndex++) {
        this.cells.push(new Cell(this.el, rowIndex, colIndex, renderer));
      }
    }

    this.container.appendChild(this.el);
  }
}
