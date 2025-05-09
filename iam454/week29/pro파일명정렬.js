function solution(files) {
  const list = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    let head = "";
    let number = "";
    let index = 0;

    while ((index < file.length && isNaN(file[index])) || file[index] === " ") {
      head += file[index];
      index += 1;
    }

    while (
      index < file.length &&
      number.length < 5 &&
      !isNaN(file[index]) &&
      file[index] !== " "
    ) {
      number += file[index];
      index += 1;
    }

    list.push({
      head: head.toLowerCase(),
      number: Number(number),
      og: file,
      ogPos: i,
    });
  }

  list.sort((a, b) => {
    if (a.head > b.head) {
      return 1;
    }
    if (a.head < b.head) {
      return -1;
    }
    if (a.number > b.number) {
      return 1;
    }
    if (a.number < b.number) {
      return -1;
    }
    return a.ogPos - b.ogPos;
  });

  const answer = list.map((item) => item.og);

  return answer;
}
