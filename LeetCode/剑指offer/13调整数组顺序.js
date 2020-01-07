function reOrderArray(array) {
    // oddBegin主要是用作奇数的索引，oddCount是用作偶数的索引,newArray用来存储，以空间换时间，复杂度为O(n)
    let oddBegin = 0,
      oddCount = 0;
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      // 位与运算，奇数&1 为 1 . 7（111）& 1 （001）= 001 = 1 
      if (array[i] & 1) {
        // console.log('11',array[i])
        oddCount++;
        // console.log('22',oddCount)
      }
    }
    for (let i = 0; i < array.length; i++) {
      // console.log(oddCount)
      if (array[i] & 1) {
        // console.log('22', array[i])
        newArray[oddBegin++] = array[i];
      } else {
        // console.log('33', array[i])
        newArray[oddCount++] = array[i];
      }
    }
    return newArray;
  }
  reOrderArray([1,2,3,4,5,6,7])