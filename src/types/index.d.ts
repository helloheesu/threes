type DomPosition = {
  top: number;
  left: number;
};
type DomSize = {
  width: number;
  height: number;
};

interface Renderer {
  setPosition(el: HTMLDivElement, rowIndex: number, colIndex: number);
}
