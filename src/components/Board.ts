export default class Board {
  public el: HTMLDivElement;

  constructor(
    private container: HTMLDivElement,
    public rowNum: number,
    public colNum: number,
    private renderer: Renderer
  ) {
    this.el = document.createElement("div");
    this.el.classList.add("board");

    for (let rowIndex = 0; rowIndex < rowNum; rowIndex++) {
      for (let colIndex = 0; colIndex < colNum; colIndex++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        this.el.appendChild(cell);

        this.renderer.setPosition(cell, { row: rowIndex, col: colIndex });
      }
    }

    this.container.appendChild(this.el);
  }
}
