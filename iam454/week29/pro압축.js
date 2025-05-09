function solution(msg) {
  const answer = [];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const map = new Map();
  map.set("len", alphabet.length);
  alphabet.forEach((item, index) => {
    map.set(item, index + 1);
  });

  let i = 0;
  while (i < msg.length) {
    let w = msg[i];
    let j = i + 1;

    while (j <= msg.length && map.has(msg.slice(i, j))) {
      w = msg.slice(i, j);
      j += 1;
    }
    answer.push(map.get(w));
    const c = msg[j - 1];
    if (j <= msg.length) {
      map.set("len", map.get("len") + 1);
      map.set(w + c, map.get("len"));
    }

    i += w.length;
  }

  return answer;
}
