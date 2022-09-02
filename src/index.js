import Player from "./player";
import { renderBoards, renderFleet } from "./DOM";
let p1 = Player("me");
let p2 = Player("ai");
renderBoards(p1, p2);
p1.randFleet();
p2.randFleet();
renderFleet(p1);
