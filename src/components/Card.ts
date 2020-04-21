export const INITIAL_VALUES = [1, 2];
const isMergable = (valueA: number, valueB: number) => {
  return (valueA + valueB) % 3 === 0;
};

export default class Card {
  public el: HTMLDivElement;
  public visible: boolean = false;
  private value: number;

  constructor(value?: number) {
    this.el = document.createElement("div");
    this.el.classList.add("card");

    if (!value) {
      return;
    }
    this.setValue(value);
  }

  setValue(value: number) {
    this.value = value;
    this.el.innerText = `${value}`;
    this.visible = true;
  }

  isVisible(): boolean {
    return this.visible;
  }

  isMergable(srcCard: Card) {
    return isMergable(this.value, srcCard.value);
  }

  merge(srcCard: Card) {
    this.value += srcCard.value;
  }
}
