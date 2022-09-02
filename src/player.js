import Gameboard from "./gameboard";

const Player = (name) => {
  let board = Gameboard();
  let turn = false;

  let playerTurn = (op) => {
    turn = true;
    op.turn = false;
  };

  let atk = (player, x, y) => {
    return player.board.receiveAttack(x, y);
  };

  function randShip(length) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    let dir = Math.round(Math.random());

    if (dir === 0) {
      dir = "h";
      if (board.placeShip(length, x, y, dir) == false) return false;
    }

    if (dir === 1) {
      dir = "v";
      if (board.placeShip(length, x, y, dir) == false) return false;
    }
  }

  let randFleet = () => {
    for (let i = 0; i < 2; ) {
      if (randShip(1) == false) continue;
      i++;
    }
    for (let i = 0; i < 2; ) {
      if (randShip(2) == false) continue;
      i++;
    }
    for (let i = 0; i < 2; ) {
      if (randShip(3) == false) continue;
      i++;
    }
    for (let i = 0; i < 2; ) {
      if (randShip(4) == false) continue;
      i++;
    }
  };

  return { name, board, playerTurn, atk, randFleet };
};

export default Player;
