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

  return { name, playerTurn, atk };
};

const Ai = () => {
  return "amogus";
};

export default Player;
