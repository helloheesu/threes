export default class Board {
  public el: HTMLDivElement;

  constructor(
    private container: HTMLDivElement,
    public rowNum: number,
    public colNum: number
  ) {
    const containerStyle = getComputedStyle(this.container);
    const containerWidth = parseInt(containerStyle.width);
    const containerHeight = parseInt(containerStyle.height);

    const margin = 10;
    const cellWidth = (containerWidth - margin * (colNum + 1)) / colNum;
    const cellHeight = (containerHeight - margin * (rowNum + 1)) / rowNum;

    this.el = document.createElement("div");
    this.el.classList.add("board");

    for (let rowIndex = 0; rowIndex < rowNum; rowIndex++) {
      for (let colIndex = 0; colIndex < colNum; colIndex++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellHeight}px`;
        cell.style.top = `${margin + rowIndex * (cellHeight + margin)}px`;
        cell.style.left = `${margin + colIndex * (cellWidth + margin)}px`;

        this.el.appendChild(cell);
      }
    }

    this.container.appendChild(this.el);
  }
}
