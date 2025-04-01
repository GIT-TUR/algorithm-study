var largestAltitude = function (gain) {
  let max = 0;
  const arr = [0];
  for (let i = 0; i < gain.length; i++) {
    const value = arr[i] + gain[i];
    arr.push(value);
    if (max < value) max = value;
  }
  return max;
};
