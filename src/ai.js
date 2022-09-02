import Player from "./player";

const ai = () => {
  const prototype = Player("ai");

  let aiAtk = () => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    return [x, y];
  };

  function aiShip(length) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    let dir = Math.round(Math.random());

    if (dir === 0) {
      dir = "h";
      if (board.placeShip(x, y, length, dir) == false) return false;
    }

    if (dir === 1) {
      dir = "v";
      if (board.placeShip(x, y, length, dir) == false) return false;
    }
  }

  let aiFleet = () => {
    for (let i = 0; i < 2; ) {
      if (aiShip(1) == false) continue;
      i++;
    }
    for (let i = 0; i < 2; ) {
      if (aiShip(2) == false) continue;
      i++;
    }
    for (let i = 0; i < 2; ) {
      if (aiShip(3) == false) continue;
      i++;
    }
    for (let i = 0; i < 2; ) {
      if (aiShip(4) == false) continue;
      i++;
    }
  };
  return Object.assign({}, prototype, { aiAtk, aiFleet });
};

export default ai;
