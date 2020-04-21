export enum Direction {
  Left = "Left",
  Right = "Right",
  Up = "Up",
  Down = "Down",
}

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
