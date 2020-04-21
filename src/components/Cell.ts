import Card from "./Card";

export default class Cell {
  public el: HTMLDivElement;
  private content: Card = null;

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

  fill(content: Card) {
    this.content = content;
  }

  empty() {
    this.content = null;
  }

  mergeContentInto(destinationCell: Cell) {
    const srcContent = this.content;
    const destinationContent = destinationCell.content;

    if (!srcContent) {
      return;
    }

    if (!destinationContent) {
      destinationCell.fill(this.content);
      this.empty();
      return;
    }

    if (!destinationContent.isMergable(srcContent)) {
      return;
    }

    destinationContent.merge(srcContent);
    this.empty();
  }
}
