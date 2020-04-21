export const INITIAL_VALUES = [1, 2];
const isMergable = (valueA: number, valueB: number) => {
  return (valueA + valueB) % 3 === 0;
};

export default class Card implements Component {
  public el: HTMLDivElement;

  constructor(private value: number = INITIAL_VALUES[0]) {
    const el = document.createElement("div");
    el.classList.add("card");
    el.innerText = `${value}`;
    this.el = el;
  }

  isMergable(srcCard: Card) {
    return isMergable(this.value, srcCard.value);
  }

  merge(srcCard: Card) {
    this.value += srcCard.value;
  }
}
