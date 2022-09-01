import Player from "../player";

describe("player functions", () => {
  let p1;
  let p2;
  beforeEach(() => {
    p1 = Player("Finn");
    p2 = Player("Bot");
  });

  test("player name", () => {
    expect(p1.name).toBe("Finn");
  });
  test("player end turn starts enemy turn", () => {
    p1.playerTurn(p2);
    p2.playerTurn(p1);
    expect(p1.turn).toBeFalsy;
    expect(p2.turn).toBeTruthy;
  });
  test.todo("player can attack on their turn");
});

describe("ai functions", () => {
  test.todo("ai end turn starts enemy turn");
  test.todo("ai attacks on their turn");
});
