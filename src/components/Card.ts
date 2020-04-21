export const INITIAL_VALUES = [1, 2];

export default class Card {
  public el: HTMLDivElement;

  constructor(private value: number = INITIAL_VALUES[0]) {
    const el = document.createElement("div");
    el.classList.add("card");
    el.innerText = `${value}`;
    this.el = el;
  }
}
