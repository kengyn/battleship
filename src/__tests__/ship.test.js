import Ship from "../ship";

describe("ship functions", () => {
  let newShip;
  beforeEach(() => {
    newShip = Ship(3);
  });

  test("has length", () => {
    expect(newShip.getLength).toBe(3);
  });

  test("can be hit", () => {
    newShip.hit(2);
    expect(newShip.shipArr[2].hit).toEqual(true);
  });

  test("can be sunk", () => {
    newShip.hit(0);
    newShip.hit(1);
    newShip.hit(2);
    expect(newShip.isSunk()).toBe(true);
  });
});
