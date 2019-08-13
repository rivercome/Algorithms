/* 三数之和 */
/* 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。 */


var threeSum = function(nums) {
    // 数组从小到大排序
nums.sort(function (a, b) {
        return a - b
    })
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            // 结束本次迭代
            continue
        }
        let j = i + 1, k = nums.length - 1
        let target = -nums[i]
        while (j < k) {
            if (nums[j] + nums[k] == target) {
                ans.push([nums[i], nums[j], nums[k]])
                j++
                k--
                while (j < k && nums[j] == nums[j - 1]) j++
                while (j < k && nums[k] == nums[k + 1]) k--
            } else if (nums[j] + nums[k] > target) {
                k--
            } else {
                j++
            }
        }
    }
    return ans
};