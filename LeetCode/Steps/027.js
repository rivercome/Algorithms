
/* 1 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     var ans = 0;
//     for(const num of nums) {
//         console.log('num', num)
//         if(num != val) {
//             nums[ans] = num;
//             ans++;
//         }
//     }
//     return ans;
// };


/* splice删除，slice选取 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = 0; i< nums.length; i++) {
         if(nums[i] === val) {
             console.log('11', nums)
             nums.splice(i, 1);
             i--;
         }
     }
     return nums.length;
 };