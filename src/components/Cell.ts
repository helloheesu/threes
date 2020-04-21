export default class Cell {
  public el: HTMLDivElement;
  private content: any = null;

  constructor(
    private renderer: Renderer,
    public row: number,
    public col: number
  ) {
    this.el = document.createElement("div");
    this.el.classList.add("cell");

    this.renderer.appendChild(this.el);
    this.renderer.setPosition(this.el, { row: this.row, col: this.col });
  }

  isEmpty(): boolean {
    return !this.content;
  }

  fill(content: any) {
    this.content = content;
  }
}
