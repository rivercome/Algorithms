/* 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。 */

/**
 * @param {string[]} strs
 * @return {string}
 */

 /* 全部与第一个字符串相匹配，若匹配失败则返回，若相等，则继续匹配 */
 var longestCommonPrefix = function(strs) {
    var re = '';
    for (var j=0;j<strs[0].length;j++){ //第j位
        for (var i=1;i<strs.length;i++){//第i个
            if (strs[i][j]!=strs[0][j]) return re
        }
        re += strs[0][j];
    }
    return re;
};