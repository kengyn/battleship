import Player from "./player";
import renderBoards from "./DOM";
let p1 = Player("me");
let p2 = Player("ai");
renderBoards(p1, p2);
