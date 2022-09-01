import Ship from "./ship";

const Gameboard = () => {
  const board = [];
  for (let i = 0; i < 10; i++) {
    board[i] = [];
    for (let j = 0; j < 10; j++) {
      board[i].push(false);
    }
  }

  function validPlacement(length, x, y, dir) {
    if (dir === "h") {
      if (y + length > 10) return false;

      for (let i = 0; i < length; i++) {
        if (board[x][y + i].hasOwnProperty("ship")) return false;
      }

      return true;
    }
    if (dir === "v") {
      if (x + length > 10) return false;

      for (let i = 0; i < length; i++) {
        if (board[x + i][y].hasOwnProperty("ship")) return false;
      }

      return true;
    }
  }

  const placeShip = (length, x, y, dir) => {
    const ship = Ship(length);
    let shipPos = 0;

    if (board[x][y]) return false;

    if (dir === "h" && validPlacement(length, x, y, dir)) {
      for (let i = 0; i < length; i++) {
        board[x][y + i] = { ship, shipPos };
        shipPos++;
      }
    } else if (dir === "v" && validPlacement(length, x, y, dir)) {
      for (let i = 0; i < length; i++) {
        board[x + i][y] = { ship, shipPos };
        shipPos++;
      }
    } else {
      return false;
    }
  };

  const receiveAttack = (x, y) => {};

  return { board, placeShip, receiveAttack };
};

export default Gameboard;
