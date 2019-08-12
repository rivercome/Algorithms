// 无重复字符的最长子串
/* 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度 */


// 算法思想：遍历循环字符串，若存在俩个相同字母，则continue（跳过本次迭代）,记录len值，继续循环，最后比对len

// 比对len发现，无法保存多个间隔的len值，比如‘abcccdeffghjkkkkiou’,即需比对abc,cdef,fghjk,kiou
var lengthOfLongestSubstring = function(s) {
    if(s == null){
        return 0
    }
    if (s.length === 1) {
        return 1   
    }
    let len = 0;
    for (let i =0; i<s.length; i++){

        for (let j = i; j<s.length; j++){
            if(s[j+1] === s[j]){
                i = j;
                continue;
            }
            len = s.length > len ? s.length : len;
        }
    }
    return len
 };