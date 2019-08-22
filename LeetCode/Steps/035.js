/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target<nums[0]) return 0
    for (var i = 0; i<nums.length;i++){
        if (nums[i]>=target) return i;
    }
    return i

};

searchInsert([1,3,5,6], 5)