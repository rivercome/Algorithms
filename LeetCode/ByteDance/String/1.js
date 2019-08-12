// 无重复字符的最长子串
/* 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度 */


// 算法思想：遍历循环字符串，若存在俩个相同字母，则continue（跳过本次迭代）,记录len值，继续循环，最后比对len

// 用双层循环

var lengthOfLongestSubstring = function(s) {
    const arr = [];
    for (var i = 0; i < s.length; i++) {
      arr[i] = [];
      for (var j = i; j < s.length; j++) {
        if (arr[i].indexOf(s[j]) > -1) {
          break;
        } else {
          arr[i].push(s[j]);
        }
      }
    }
    console.log('arr', arr)
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > max) {
        max = arr[i].length;
      }
    }
    return max;
  };

  lengthOfLongestSubstring('abcabcbb')
//  // 单次循环，利用ES6的 Set函数
//  var lengthOfLongestSubstring = function(s) {
//     let start = 0
//     let end = 1
//     for (let i=0; i<s.length; i++) {
//       let temp = new Set(s.slice(start, end).split(''))
//       if (temp.size !== end - start) {
//         start += 1
//       }
//       end++
//     }
//     return end - start - 1
// };

// // 单词循环 利用js内置函数处理
// var lengthOfLongestSubstring = function(s) {
//     var str = '';
//              var len = 0;
//              for(var i=0;i<s.length;i++){
//                  var char = s.charAt(i);
//                  var index = str.indexOf(char);
//                  if(index === -1){ 
//                      str += char;
//                      len = len<str.length?str.length:len;
//                  }
//                  else{
//                      str = str.substr(index + 1) + char;
//                  }
//              }
//              return len;
//  };