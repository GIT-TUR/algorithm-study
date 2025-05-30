function solution(n, cores) {
  const coreCnt = cores.length;

  if (n <= coreCnt) {
    return n;
  }

  let l = 0;
  let r = Math.max(...cores) * n;
  let time = 0;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    let done = coreCnt;

    for (const core of cores) {
      done += Math.floor(mid / core);
    }

    if (done >= n) {
      time = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  let done = coreCnt;
  for (let core of cores) {
    done += Math.floor((time - 1) / core);
  }

  for (let i = 0; i < cores.length; i++) {
    if (time % cores[i] === 0) {
      done += 1;
      if (done === n) {
        return i + 1;
      }
    }
  }
}
