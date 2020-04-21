import Game from "./components/GameManager";

const mainContainer = document.getElementById("game") as HTMLDivElement;

new Game({
  container: mainContainer,
  row: 4,
  col: 4,
  initialCardCount: 4,
  newCardProbability: 0.9,
});
