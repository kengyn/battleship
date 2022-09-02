import Player from "./player";

const ai = () => {
  const prototype = Player("ai");

  let aiAtk = () => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    return [x, y];
  };

  return Object.assign({}, prototype, { aiAtk, aiFleet });
};

export default ai;
