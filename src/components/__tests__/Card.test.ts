import Card from "../Card";

describe("Card.ts", () => {
  describe("mergeable", () => {
    test("1 + 1 != mergeable", () => {
      const cardA = new Card(1);
      const cardB = new Card(1);
      const merged = cardA.merge(cardB);
      expect(merged).toBe(false);
    });
    test("2 + 2 != mergeable", () => {
      const cardA = new Card(2);
      const cardB = new Card(2);
      const merged = cardA.merge(cardB);
      expect(merged).toBe(false);
    });
    test("1 + 2 = 3", () => {
      const cardA = new Card(1);
      const cardB = new Card(2);
      const merged = cardA.merge(cardB);
      expect(merged).toBe(true);
      expect(cardA.getValue()).toBe(3);
    });
    test("2 + 1 = 3", () => {
      const cardA = new Card(2);
      const cardB = new Card(1);
      const merged = cardA.merge(cardB);
      expect(merged).toBe(true);
      expect(cardA.getValue()).toBe(3);
    });
    test("3 + 3 = 9", () => {
      const cardA = new Card(3);
      const cardB = new Card(3);
      const merged = cardA.merge(cardB);
      expect(merged).toBe(true);
      expect(cardA.getValue()).toBe(9);
    });
    test("3 + 9 != mergeable", () => {
      const cardA = new Card(3);
      const cardB = new Card(9);
      const merged = cardA.merge(cardB);
      expect(merged).toBe(false);
    });
    test("9 + 9 = 27", () => {
      const cardA = new Card(9);
      const cardB = new Card(9);
      const merged = cardA.merge(cardB);
      expect(merged).toBe(true);
      expect(cardA.getValue()).toBe(27);
    });
  });
});
