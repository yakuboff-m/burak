// < ========== TASK H2 Start ========== >

const getDigits = (str: string) => {
  let digits: string = "";
  
  for (const char of str){
    if (!isNaN(Number(char))){
      digits += char;
    }
  }
  return digits;
}

console.log(getDigits("sch00ln1"));

// < ========== TASK H2 End ========== >




// < ========== TASK H Start ========== >

// function getPositive(arr: number[]): string {
//   return arr
//     .filter((num) => num > 0)
//     .map((num) => String(num))
//     .join("");
// }

// console.log(getPositive([5, -7, 2]));
// < ========== TASK H end ========== >

// < ========== TASK G start ========== >

// function getHighestIndex(arr: number[]) {
//   const maxValue = Math.max(...arr);
//   const index = arr.indexOf(maxValue);
//   return index;
// }

// console.log(getHighestIndex([4, 65, 23, 43, 765]));

// < ========== TASK G end ========== >
