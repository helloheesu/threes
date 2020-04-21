import Card, { isMergeable } from "../Card";

describe("Card.ts", () => {
  describe("isMergeable", () => {
    test("1 + 1 = false", () => {
      expect(isMergeable(1, 1)).toBe(false);
    });
    test("2 + 2 = false", () => {
      expect(isMergeable(2, 2)).toBe(false);
    });
    test("1 + 2 = true", () => {
      expect(isMergeable(1, 2)).toBe(true);
    });
    test("2 + 1 = true", () => {
      expect(isMergeable(2, 1)).toBe(true);
    });
    test("3 + 3 = true", () => {
      expect(isMergeable(3, 3)).toBe(true);
    });
    test("6 + 6 = true", () => {
      expect(isMergeable(6, 6)).toBe(true);
    });
    test("3 + 1 = false", () => {
      expect(isMergeable(3, 1)).toBe(false);
    });
    test("1 + 3 = false", () => {
      expect(isMergeable(1, 3)).toBe(false);
    });
    test("3 + 6 = false", () => {
      expect(isMergeable(3, 6)).toBe(false);
    });
  });
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
    test("3 + 3 = 6", () => {
      const cardA = new Card(3);
      const cardB = new Card(3);
      const merged = cardA.merge(cardB);
      expect(merged).toBe(true);
      expect(cardA.getValue()).toBe(6);
    });
    test("3 + 6 != mergeable", () => {
      const cardA = new Card(3);
      const cardB = new Card(6);
      const merged = cardA.merge(cardB);
      expect(merged).toBe(false);
    });
    test("6 + 6 = 12", () => {
      const cardA = new Card(6);
      const cardB = new Card(6);
      const merged = cardA.merge(cardB);
      expect(merged).toBe(true);
      expect(cardA.getValue()).toBe(12);
    });
  });
});
