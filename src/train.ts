// < ========== TASK G start ========== >

function getHighestIndex(arr: number[]) {
  const maxValue = Math.max(...arr);
  const index = arr.indexOf(maxValue);
  return index;
}

console.log(getHighestIndex([4, 65, 23, 43, 765]));

// < ========== TASK G end ========== >