function countNoOfOnes(strings) {
    let finalValue = 0;
  
    for (let i = 0; i < strings.length; i++) {
      let count = 0;
      let j = i + 1;
  
      if (strings[i] === '1') {
          count = count + 1 ;
        while (strings[j] !== '0' && j < strings.length) {
          count = count + 1;
          j = j + 1;
        }
      }
  
      if (count >= finalValue) {
        finalValue = count;
      }
    }
  
    return finalValue;
  }
  
  let str = "101111000001111100001";
  let ans = countNoOfOnes(str);
  console.log(ans);
  
  str = "1011101111111"
  ans = countNoOfOnes(str);
  console.log(ans);