import Gameboard from "../gameboard";

let gb;
beforeEach(() => {
  gb = Gameboard();
});

describe("ship placement", () => {
  test("place horizontal ship(3) at [0][4]", () => {
    gb.placeShip(3, 4, 4, "h");
    expect(gb.board[4][4] && gb.board[4][5] && gb.board[4][6]).toBeTruthy();
  });

  test("place vertical ship(4) at [5][5]", () => {
    gb.placeShip(4, 5, 5, "v");
    expect(
      gb.board[5][5] && gb.board[6][5] && gb.board[7][5] && gb.board[8][5]
    ).toBeTruthy();
  });

  test("reject if over the edge vertically", () => {
    expect(gb.placeShip(4, 7, 1, "v")).toBe(false);
  });

  test("reject if over the edge horizontally", () => {
    expect(gb.placeShip(4, 0, 8, "h")).toBe(false);
  });

  test("reject if spot already taken", () => {
    gb.placeShip(3, 4, 4, "h");
    expect(gb.placeShip(3, 4, 5, "h")).toBe(false);
  });
});

describe("attacking", () => {
  test("attack hits", () => {
    gb.placeShip(2, 1, 1, "h");
    gb.receiveAttack(1, 1);
    expect(gb.board[1][1].ship.shipArr[0].hit).toBe(true);
    expect(gb.board[1][2].ship.shipArr[0].hit).toBe(true);
    expect(gb.board[1][1].ship.shipArr[1].hit).toBe(false);
    expect(gb.board[1][2].ship.shipArr[1].hit).toBe(false);
  });
  test("attack misses", () => {
    gb.placeShip(1, 1, 1, "v");
    gb.receiveAttack(1, 2);
    expect(gb.board[1][1].ship.shipArr[0].hit).toBe(false);
    expect(gb.board[1][2]).toBe("miss");
    expect(gb.missedShots[0]).toEqual([1, 2]);
  });

  test("report all ship sunked", () => {
    gb.placeShip(1, 1, 1, "v");
    gb.placeShip(1, 1, 4, "h");
    gb.receiveAttack(1, 1);
    gb.receiveAttack(1, 4);
    expect(gb.allShipsSunk()).toBe(true);
  });
  test("not all ship sunked", () => {
    gb.placeShip(1, 1, 1, "v");
    gb.placeShip(1, 1, 4, "h");
    gb.placeShip(1, 1, 8, "h");
    gb.receiveAttack(1, 1);
    gb.receiveAttack(1, 4);
    gb.receiveAttack(1, 9);
    expect(gb.allShipsSunk()).toBe(false);
  });
});
