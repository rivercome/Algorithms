/* 数组中的第K个最大元素 */

function test(nums, k = 4 ){
    let SortNum = nums.sort((a,b) => {
        return a-b;
    })
    let length = SortNum.length;
    console.log('SortNum', SortNum)
    console.log('SortNum[]', SortNum[length-k])
    return SortNum[length-k]
}

test([3,2,1,5,6,4], 2)


/* 优化方法--使用小顶堆，堆顶即所求 */