import { Direction } from "../enum";

export const getNextPosition = (
  { row, col }: CellPosition,
  direction: Direction
): CellPosition => {
  switch (direction) {
    case Direction.Left:
      return {
        row,
        col: col - 1,
      };
    case Direction.Right:
      return {
        row,
        col: col + 1,
      };
    case Direction.Up:
      return {
        row: row - 1,
        col,
      };
    case Direction.Down:
      return {
        row: row + 1,
        col,
      };
    default:
      break;
  }
};

export const getOppositeDirection = (direction: Direction): Direction => {
  switch (direction) {
    case Direction.Left:
      return Direction.Right;
    case Direction.Right:
      return Direction.Left;
    case Direction.Up:
      return Direction.Down;
    case Direction.Down:
      return Direction.Up;
    default:
      break;
  }
};

export const isDirection = (arg: any): arg is Direction => {
  switch (arg) {
    case Direction.Left:
    case Direction.Right:
    case Direction.Up:
    case Direction.Down:
      return true;
    default:
      return false;
  }
};
