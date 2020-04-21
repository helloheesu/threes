export const INITIAL_VALUES = [1, 2];

export const getMergeableValue = (value: number): number => {
  if (value === 1) {
    return 2;
  }
  if (value === 2) {
    return 1;
  }
  return value;
};

export const isMergeable = (valueA: number, valueB: number): boolean => {
  const mergeableValue = getMergeableValue(valueA);
  return valueB === mergeableValue;
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

    if (!isMergeable(valueA, valueB)) {
      return false;
    }

    this.setValue(valueA + valueB);
    srcCard.setVisible(false);

    return true;
  }
}
