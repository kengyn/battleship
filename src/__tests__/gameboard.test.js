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
  test("track misses", () => {
    gb.placeShip(1, 1, 1, "h");
    gb.receiveAttack(1, 1);
  });
});

test.todo("report all ship sunked");
test.todo("check for hit/miss");
