(()=>{"use strict";const t=t=>{let e=(()=>{const t=[],e=[];for(let e=0;e<10;e++){t[e]=[];for(let r=0;r<10;r++)t[e].push(!1)}function r(e,r,o,i){if("h"===i){if(o+e>10)return!1;for(let i=0;i<e;i++)if(t[r][o+i].hasOwnProperty("ship"))return!1;return!0}if("v"===i){if(r+e>10)return!1;for(let i=0;i<e;i++)if(t[r+i][o].hasOwnProperty("ship"))return!1;return!0}}return{board:t,missedShots:e,placeShip:(e,o,i,s)=>{const a=(t=>{const e=[];for(let r=0;r<t;r++)e.push({hit:!1});const r=e.length;return{shipArr:e,getLength:r,hit:t=>(e[t].hit=!0,e),isSunk:()=>{if(e.every((t=>1==t.hit)))return!0},domTargets:[]}})(e);let l=0;if(t[o][i])return!1;if("h"===s&&r(e,o,i,s))for(let r=0;r<e;r++)t[o][i+r]={ship:a,shipPos:l},l++;else{if("v"!==s||!r(e,o,i,s))return!1;for(let r=0;r<e;r++)t[o+r][i]={ship:a,shipPos:l},l++}},receiveAttack:(r,o)=>{if(t[r][o].hasOwnProperty("ship")){let e=t[r][o].shipPos;return t[r][o].ship.hit(e),e="hit",e}return t[r][o]="miss",e.push([r,o]),t[r][o]},allShipsSunk:()=>{let e=[];for(let r of t)for(let t of r)t.hasOwnProperty("ship")&&e.push(t.ship.isSunk());return e.every((t=>1==t))}}})(),r=!1;function o(t){let r=Math.floor(10*Math.random()),o=Math.floor(10*Math.random()),i=Math.round(Math.random());return(0!==i||(i="h",0!=e.placeShip(t,r,o,i)))&&(1!==i||(i="v",0!=e.placeShip(t,r,o,i)))&&void 0}return{name:t,board:e,playerTurn:t=>{r=!0,t.turn=!1},atk:(t,e,r)=>t.board.receiveAttack(e,r),randFleet:()=>{for(let t=0;t<2;)0!=o(1)&&t++;for(let t=0;t<2;)0!=o(2)&&t++;for(let t=0;t<2;)0!=o(3)&&t++;for(let t=0;t<2;)0!=o(4)&&t++}}};function e(t,e,r,o,i){let s=o.atk(i,e,r);if(s)return"miss"===s&&t.target.classList.add("miss"),"hit"===s?(t.target.classList.add("hit"),i.board.board[e][r].ship.domTargets.push(t.target),void(i.board.board[e][r].ship.isSunk()&&i.board.board[e][r].ship.domTargets.forEach((t=>t.classList.add("sunk"))))):void 0}let r=t("me"),o=t("ai");!function(t,r){for(let e=0;e<10;e++){let r=document.createElement("div");r.classList.add("row-p1"),r.setAttribute("id",`p1-row${e}`),document.querySelector(".player-board").appendChild(r),t.board.board[e].forEach(((t,o)=>{let i=document.createElement("div");i.classList.add("cell-p1"),i.setAttribute("id",`p1-row${e}-cell${o}`),r.appendChild(i)}))}for(let o=0;o<10;o++){let i=document.createElement("div");i.classList.add("row-p2"),i.setAttribute("id",`p2-row${o}`),document.querySelector(".op-board").appendChild(i),r.board.board[o].forEach(((s,a)=>{let l=document.createElement("div");l.classList.add("cell-p2"),l.setAttribute("id",`p2-row${o}-cell${a}`),i.appendChild(l),l.addEventListener("click",(i=>{e(i,o,a,t,r)}))}))}}(r,o),r.randFleet(),o.randFleet(),function(t){document.querySelectorAll(".cell-p1").forEach(((e,r)=>{let o,i,s=""+r;r<10?(o=0,i=r):(s=s.split(""),o=s[0],i=s[1]),!1!==t.board.board[o][i]&&e.classList.add("fleet")}))}(r)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQy9CLEdBRU4sQ0FDRixDQzNCQWEsQ0FBYWQsRUFBSUMsR0FDakJELEVBQUdMLFlBQ0hNLEVBQUdOLFlEMkJILFNBQXFCRCxHQUNuQmEsU0FBU1EsaUJBQWlCLFlBQVlULFNBQVEsQ0FBQ1QsRUFBR3JDLEtBQ2hELElBQUlLLEVBQUdDLEVBQ0hTLEVBQU0sR0FBS2YsRUFDWEEsRUFBSSxJQUNOSyxFQUFJLEVBQ0pDLEVBQUlOLElBRUplLEVBQU1BLEVBQUl5QyxNQUFNLElBQ2hCbkQsRUFBSVUsRUFBSSxHQUNSVCxFQUFJUyxFQUFJLEtBR3VCLElBQTdCbUIsRUFBT3BDLE1BQU1BLE1BQU1PLEdBQUdDLElBQ3JCK0IsRUFBRU8sVUFBVUMsSUFBSSxRQUFRLEdBRWpDLENDMUNBWSxDQUFZakIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNoaXAgPSAoc2l6ZSkgPT4ge1xuICBjb25zdCBzaGlwQXJyID0gW107XG4gIGxldCBkb21UYXJnZXRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgc2hpcEFyci5wdXNoKHsgaGl0OiBmYWxzZSB9KTtcbiAgfVxuXG4gIGNvbnN0IGdldExlbmd0aCA9IHNoaXBBcnIubGVuZ3RoO1xuXG4gIGNvbnN0IGhpdCA9IChwb3MpID0+IHtcbiAgICBzaGlwQXJyW3Bvc10uaGl0ID0gdHJ1ZTtcbiAgICByZXR1cm4gc2hpcEFycjtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKHNoaXBBcnIuZXZlcnkoKHgpID0+IHguaGl0ID09IHRydWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgc2hpcEFyciwgZ2V0TGVuZ3RoLCBoaXQsIGlzU3VuaywgZG9tVGFyZ2V0cyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9IChuYW1lKSA9PiB7XG4gIGxldCBib2FyZCA9IEdhbWVib2FyZCgpO1xuICBsZXQgdHVybiA9IGZhbHNlO1xuXG4gIGxldCBwbGF5ZXJUdXJuID0gKG9wKSA9PiB7XG4gICAgdHVybiA9IHRydWU7XG4gICAgb3AudHVybiA9IGZhbHNlO1xuICB9O1xuXG4gIGxldCBhdGsgPSAocGxheWVyLCB4LCB5KSA9PiB7XG4gICAgcmV0dXJuIHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJhbmRTaGlwKGxlbmd0aCkge1xuICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGxldCBkaXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuXG4gICAgaWYgKGRpciA9PT0gMCkge1xuICAgICAgZGlyID0gXCJoXCI7XG4gICAgICBpZiAoYm9hcmQucGxhY2VTaGlwKGxlbmd0aCwgeCwgeSwgZGlyKSA9PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChkaXIgPT09IDEpIHtcbiAgICAgIGRpciA9IFwidlwiO1xuICAgICAgaWYgKGJvYXJkLnBsYWNlU2hpcChsZW5ndGgsIHgsIHksIGRpcikgPT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBsZXQgcmFuZEZsZWV0ID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgKSB7XG4gICAgICBpZiAocmFuZFNoaXAoMSkgPT0gZmFsc2UpIGNvbnRpbnVlO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7ICkge1xuICAgICAgaWYgKHJhbmRTaGlwKDIpID09IGZhbHNlKSBjb250aW51ZTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyApIHtcbiAgICAgIGlmIChyYW5kU2hpcCgzKSA9PSBmYWxzZSkgY29udGludWU7XG4gICAgICBpKys7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgKSB7XG4gICAgICBpZiAocmFuZFNoaXAoNCkgPT0gZmFsc2UpIGNvbnRpbnVlO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBuYW1lLCBib2FyZCwgcGxheWVyVHVybiwgYXRrLCByYW5kRmxlZXQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBjb25zdCBtaXNzZWRTaG90cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBib2FyZFtpXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgYm9hcmRbaV0ucHVzaChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRQbGFjZW1lbnQobGVuZ3RoLCB4LCB5LCBkaXIpIHtcbiAgICBpZiAoZGlyID09PSBcImhcIikge1xuICAgICAgaWYgKHkgKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFt4XVt5ICsgaV0uaGFzT3duUHJvcGVydHkoXCJzaGlwXCIpKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoZGlyID09PSBcInZcIikge1xuICAgICAgaWYgKHggKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFt4ICsgaV1beV0uaGFzT3duUHJvcGVydHkoXCJzaGlwXCIpKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChsZW5ndGgsIHgsIHksIGRpcikgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBTaGlwKGxlbmd0aCk7XG4gICAgbGV0IHNoaXBQb3MgPSAwO1xuXG4gICAgaWYgKGJvYXJkW3hdW3ldKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoZGlyID09PSBcImhcIiAmJiB2YWxpZFBsYWNlbWVudChsZW5ndGgsIHgsIHksIGRpcikpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeF1beSArIGldID0geyBzaGlwLCBzaGlwUG9zIH07XG4gICAgICAgIHNoaXBQb3MrKztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpciA9PT0gXCJ2XCIgJiYgdmFsaWRQbGFjZW1lbnQobGVuZ3RoLCB4LCB5LCBkaXIpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3ggKyBpXVt5XSA9IHsgc2hpcCwgc2hpcFBvcyB9O1xuICAgICAgICBzaGlwUG9zKys7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgaWYgKGJvYXJkW3hdW3ldLmhhc093blByb3BlcnR5KFwic2hpcFwiKSkge1xuICAgICAgbGV0IHNoaXBQb3MgPSBib2FyZFt4XVt5XS5zaGlwUG9zO1xuICAgICAgYm9hcmRbeF1beV0uc2hpcC5oaXQoc2hpcFBvcyk7XG5cbiAgICAgIHNoaXBQb3MgPSBcImhpdFwiO1xuICAgICAgcmV0dXJuIHNoaXBQb3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkW3hdW3ldID0gXCJtaXNzXCI7XG4gICAgICBtaXNzZWRTaG90cy5wdXNoKFt4LCB5XSk7XG5cbiAgICAgIHJldHVybiBib2FyZFt4XVt5XTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGxldCBjaGVja1NoaXBzID0gW107XG4gICAgZm9yIChsZXQgcm93IG9mIGJvYXJkKSB7XG4gICAgICBmb3IgKGxldCBzcGFjZSBvZiByb3cpIHtcbiAgICAgICAgaWYgKHNwYWNlLmhhc093blByb3BlcnR5KFwic2hpcFwiKSkge1xuICAgICAgICAgIGNoZWNrU2hpcHMucHVzaChzcGFjZS5zaGlwLmlzU3VuaygpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2hlY2tTaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcCA9PSB0cnVlKTtcbiAgfTtcblxuICByZXR1cm4geyBib2FyZCwgbWlzc2VkU2hvdHMsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU2hpcHNTdW5rIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJmdW5jdGlvbiByZW5kZXJCb2FyZHMocDEsIHAyKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93LXAxXCIpO1xuICAgIHJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcDEtcm93JHtpfWApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJvYXJkXCIpLmFwcGVuZENoaWxkKHJvdyk7XG5cbiAgICBwMS5ib2FyZC5ib2FyZFtpXS5mb3JFYWNoKChlLCBqKSA9PiB7XG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsLXAxXCIpO1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcDEtcm93JHtpfS1jZWxsJHtqfWApO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH0pO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93LXAyXCIpO1xuICAgIHJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcDItcm93JHtpfWApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3AtYm9hcmRcIikuYXBwZW5kQ2hpbGQocm93KTtcblxuICAgIHAyLmJvYXJkLmJvYXJkW2ldLmZvckVhY2goKGUsIGopID0+IHtcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGwtcDJcIik7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImlkXCIsIGBwMi1yb3cke2l9LWNlbGwke2p9YCk7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG5cbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHJlbmRlckF0dGFja1AxKGUsIGksIGosIHAxLCBwMik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJGbGVldChwbGF5ZXIpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsLXAxXCIpLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICBsZXQgeCwgeTtcbiAgICBsZXQgcG9zID0gXCJcIiArIGk7XG4gICAgaWYgKGkgPCAxMCkge1xuICAgICAgeCA9IDA7XG4gICAgICB5ID0gaTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9zID0gcG9zLnNwbGl0KFwiXCIpO1xuICAgICAgeCA9IHBvc1swXTtcbiAgICAgIHkgPSBwb3NbMV07XG4gICAgfVxuXG4gICAgaWYgKHBsYXllci5ib2FyZC5ib2FyZFt4XVt5XSA9PT0gZmFsc2UpIHJldHVybjtcbiAgICBlbHNlIGUuY2xhc3NMaXN0LmFkZChcImZsZWV0XCIpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHJlbmRlckF0dGFja1AxKGUsIHBvczEsIHBvczIsIHAxLCBwMikge1xuICBsZXQgYXR0YWNrID0gcDEuYXRrKHAyLCBwb3MxLCBwb3MyKTtcbiAgaWYgKCFhdHRhY2spIHJldHVybjtcbiAgaWYgKGF0dGFjayA9PT0gXCJtaXNzXCIpIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICBpZiAoYXR0YWNrID09PSBcImhpdFwiKSB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICBwMi5ib2FyZC5ib2FyZFtwb3MxXVtwb3MyXS5zaGlwLmRvbVRhcmdldHMucHVzaChlLnRhcmdldCk7XG5cbiAgICBpZiAocDIuYm9hcmQuYm9hcmRbcG9zMV1bcG9zMl0uc2hpcC5pc1N1bmsoKSlcbiAgICAgIHAyLmJvYXJkLmJvYXJkW3BvczFdW3BvczJdLnNoaXAuZG9tVGFyZ2V0cy5mb3JFYWNoKChlKSA9PlxuICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpXG4gICAgICApO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgeyByZW5kZXJCb2FyZHMsIHJlbmRlckZsZWV0IH07XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgcmVuZGVyQm9hcmRzLCByZW5kZXJGbGVldCB9IGZyb20gXCIuL0RPTVwiO1xubGV0IHAxID0gUGxheWVyKFwibWVcIik7XG5sZXQgcDIgPSBQbGF5ZXIoXCJhaVwiKTtcbnJlbmRlckJvYXJkcyhwMSwgcDIpO1xucDEucmFuZEZsZWV0KCk7XG5wMi5yYW5kRmxlZXQoKTtcbnJlbmRlckZsZWV0KHAxKTtcbiJdLCJuYW1lcyI6WyJuYW1lIiwiYm9hcmQiLCJtaXNzZWRTaG90cyIsImkiLCJqIiwicHVzaCIsInZhbGlkUGxhY2VtZW50IiwibGVuZ3RoIiwieCIsInkiLCJkaXIiLCJoYXNPd25Qcm9wZXJ0eSIsInBsYWNlU2hpcCIsInNoaXAiLCJzaXplIiwic2hpcEFyciIsImhpdCIsImdldExlbmd0aCIsInBvcyIsImlzU3VuayIsImV2ZXJ5IiwiZG9tVGFyZ2V0cyIsInNoaXBQb3MiLCJyZWNlaXZlQXR0YWNrIiwiYWxsU2hpcHNTdW5rIiwiY2hlY2tTaGlwcyIsInJvdyIsInNwYWNlIiwidHVybiIsInJhbmRTaGlwIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicm91bmQiLCJwbGF5ZXJUdXJuIiwib3AiLCJhdGsiLCJwbGF5ZXIiLCJyYW5kRmxlZXQiLCJyZW5kZXJBdHRhY2tQMSIsImUiLCJwb3MxIiwicG9zMiIsInAxIiwicDIiLCJhdHRhY2siLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmb3JFYWNoIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIiwiY2VsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXJCb2FyZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3BsaXQiLCJyZW5kZXJGbGVldCJdLCJzb3VyY2VSb290IjoiIn0=