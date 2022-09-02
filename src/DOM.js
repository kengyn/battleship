function renderBoards(p1, p2) {
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("row-p1");
    row.setAttribute("id", `p1-row${i}`);
    document.querySelector(".player-board").appendChild(row);

    p1.board.board[i].forEach((e, j) => {
      let cell = document.createElement("div");
      cell.classList.add("cell-p1");
      cell.setAttribute("id", `p1-row${i}-cell${j}`);
      row.appendChild(cell);
    });
  }
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("row-p2");
    row.setAttribute("id", `p2-row${i}`);
    document.querySelector(".op-board").appendChild(row);

    p2.board.board[i].forEach((e, j) => {
      let cell = document.createElement("div");
      cell.classList.add("cell-p2");
      cell.setAttribute("id", `p2-row${i}-cell${j}`);
      row.appendChild(cell);

      cell.addEventListener("click", (e) => {
        renderAttackP1(e, i, j, p1, p2);
      });
    });
  }
}

function renderFleet(player) {
  document.querySelectorAll(".cell-p1").forEach((e, i) => {
    let x, y;
    let pos = "" + i;

    if (i < 10) {
      x = 0;
      y = i;
    } else {
      pos = pos.split("");
      x = pos[0];
      y = pos[1];
    }

    if (!player.board.board[x][y]) return;
    else e.classList.add("fleet");
  });
}
function renderAttackP1(e, pos1, pos2, p1, p2) {
  let attack = p1.atk(p2, pos1, pos2);
  if (!attack) return;
  if (attack === "miss") e.target.classList.add("miss");
  if (attack === "hit") {
    e.target.classList.add("hit");
    p2.board.board[pos1][pos2].ship.domTargets.push(e.target);

    if (p2.board.board[pos1][pos2].ship.isSunk())
      p2.board.board[pos1][pos2].ship.domTargets.forEach((e) =>
        e.classList.add("sunk")
      );
    return;
  }
}

export { renderBoards, renderFleet };
