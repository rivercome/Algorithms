/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // 向下取整
    return parseInt(Math.sqrt(x));
};



// 自增遍历求解
var mySqrt = function(x) {
    var re = 0;
    while(!(re*re<=x&&(re+1)*(re+1)>x)){
        re++;
    }
    return re
};

// 数学--牛顿法


var mySqrt = function(x) {
    if (x===0) return 0;
    var re = 1;
    while(!(re*re<=x&&(re+1)*(re+1)>x)){
        // 
        re = parseInt(re-(re*re-x)/(2*re))
    }
    return re
};