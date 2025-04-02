/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const q = [];
  const N = rooms.length;
  const visited = new Array(N).fill(0);
  q.push([0]);

  while (q.length) {
    const keys = q.shift();

    for (let i = 0; i < keys.length; i++) {
      if (visited[keys[i]] === 0) {
        visited[keys[i]] = 1;
        q.push(rooms[keys[i]]);
      }
    }
  }

  return visited.every((item) => item === 1);
};
