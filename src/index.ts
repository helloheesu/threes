import initGame from "./components/GameManager";

const mainContainer = document.getElementById("game") as HTMLDivElement;
initGame(mainContainer, 4, 4, 4, 1.0);
