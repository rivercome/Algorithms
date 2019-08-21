/* 只比较俩位并改变源数组 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = 1;
 for (var i = 1; i < nums.length; i++)
     if (nums[i] != nums[i-1]) nums[len++] = nums[i];
 return len
};