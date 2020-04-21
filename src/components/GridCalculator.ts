export default class GridCalculator implements Renderer {
  private cellWidth: number;
  private cellHeight: number;
  constructor(
    container: HTMLDivElement,
    rowNum: number,
    colNum: number,
    private margin: number
  ) {
    const containerStyle = getComputedStyle(container);
    const containerWidth = parseInt(containerStyle.width);
    const containerHeight = parseInt(containerStyle.height);

    this.cellWidth = (containerWidth - this.margin * (colNum + 1)) / colNum;
    this.cellHeight = (containerHeight - this.margin * (rowNum + 1)) / rowNum;
  }

  private getPosition(rowIndex: number, colIndex: number): DomPosition {
    return {
      top: this.margin + rowIndex * (this.cellHeight + this.margin),
      left: this.margin + colIndex * (this.cellWidth + this.margin),
    };
  }

  private getSize(): DomSize {
    return {
      width: this.cellWidth,
      height: this.cellHeight,
    };
  }

  setPosition(el: HTMLDivElement, { row, col }: CellPosition) {
    const { width, height } = this.getSize();
    const { top, left } = this.getPosition(row, col);

    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.top = `${top}px`;
    el.style.left = `${left}px`;
  }
}
