export const INITIAL_VALUES = [1, 2];

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
    this.setVisible(true);
  }

  getValue(): number {
    return this.value;
  }

  isVisible(): boolean {
    return this.visible;
  }

  setVisible(visible: boolean) {
    if (this.visible === visible) {
      return;
    }

    this.visible = visible;
    this.el.style.visibility = visible ? "visible" : "hidden";
  }

  merge(srcCard: Card) {
    const valueA = this.value;
    const valueB = srcCard.value;

    if (valueA + valueB === 3) {
      this.setValue(valueA + valueB);
    } else if (valueA !== valueB || valueA === 1 || valueA === 2) {
      return false;
    } else {
      this.setValue(this.value * 3);
    }

    srcCard.setVisible(false);

    return true;
  }
}
