export default class Cell {
  public el: HTMLDivElement;
  private content: any = null;

  constructor(
    private container: HTMLDivElement,
    public row: number,
    public col: number,
    private renderer: Renderer
  ) {
    this.el = document.createElement("div");
    this.el.classList.add("cell");

    this.container.appendChild(this.el);

    this.renderer.setPosition(this.el, { row: this.row, col: this.col });
  }

  isEmpty(): boolean {
    return !this.content;
  }

  fill(content: any) {
    this.content = content;
  }
}
