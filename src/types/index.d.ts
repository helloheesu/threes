type DomPosition = {
  top: number;
  left: number;
};
type DomSize = {
  width: number;
  height: number;
};

type CellPosition = {
  row: number;
  col: number;
};

interface Renderer {
  setPosition(el: HTMLDivElement, cellPosition: CellPosition);
}
