/* 俩数之和 */

/* 思路1：双层循环相加符合条件即返回对应下标值 */
/* 思路2：减法寻找，单层循环即可找到另一个值 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const len  = nums.length;
    for(let i = 0; i<len; i++){
        let another = target - nums[i];
        // ES6语法 includes判断是否包含该值，返回true/false
        if(nums.includes(another)){
            if(i === nums.indexOf(another)){
                continue;
            }
            else {
                return [i, nums.indexOf(another)]
            }
        }
    }
};

var flag = twoSum([3,2,4], 6)
console.log('11', flag)