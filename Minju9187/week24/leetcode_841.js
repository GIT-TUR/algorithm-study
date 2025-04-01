var canVisitAllRooms = function (rooms) {
  const stack = [0];
  const visited = new Array(rooms.length).fill(false);
  let count = 1;
  visited[0] = true;

  while (stack.length) {
    const keys = rooms[stack.pop()];

    for (let key of keys) {
      if (!visited[key]) {
        stack.push(key);
        visited[key] = true;
        count++;
      }
    }
  }

  return rooms.length === count;
};
