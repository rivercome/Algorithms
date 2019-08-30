/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let Max = 0;
    let continueNum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            continueNum++;
        } else {
            continueNum = 0;
        }
        if (Max < continueNum) {
            Max = continueNum;
        }
    }

    return Max;
};