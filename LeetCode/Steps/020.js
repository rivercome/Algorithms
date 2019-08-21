
/* 用数组模拟栈的pop和push, 遇到一样的则推出，不一样的则推入，若最后全部消除则完全匹配 */
/**
 * @param {string} 
 * @return {boolean}
 */
var isValid = function (s) {
    let len = s.length;
    let first = s[0];
    if (len === 0) return true;
    // 奇数或右括号开头肯定不符合
    if (len % 2 != 0 || [')', ']', '}'].indexOf(first) != -1) {
      return false
    }
    // 栈，存入第一个字符。
    let stack = [first];
    const MAP = {
      ')': '(',
      ']': '[',
      '}': '{',
    }
    for (let i = 1; i < len; i++) {
      let length = stack.length;
      let top = length > 0 ? stack[length - 1] : null;
      let now = s[i];
      if (MAP[now] === top) {
        stack.pop();
      } else {
        stack.push(now);
      }
    }
    return stack.length === 0
  };

  /*  用Js 原生的replace函数成对匹配（），[], 匹配到则转换为''，若完全匹配则源字符串转换为空字符串 */

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
