/* 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。 */


// 优化点 转换成字符串的方式，String,toString, + '',

// 进阶点 不通过转换字符串的方式。

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let newX = String(x).split('').reverse().join('')
    if(newX == x){
        return true;
    }
    else return false;
};
