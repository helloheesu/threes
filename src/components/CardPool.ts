import Card from "./Card";

const poolSize = 10;

export default class CardPool {
  private cards: Card[];

  constructor(private renderer: Renderer) {
    this.cards = new Array(poolSize);
    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i] = new Card();
      this.renderer.appendChild(this.cards[i].el);
    }
  }

  generateCard(value: number): Card {
    const card = this.cards.find((card) => !card.isVisible());
    if (card) {
      card.setValue(value);
      return card;
    }

    const newCard = new Card(value);
    this.renderer.appendChild(newCard.el);
    this.cards.push(newCard);
    return newCard;
  }
}
