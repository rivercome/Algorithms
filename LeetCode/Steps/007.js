/**
 * @param {number} x
 * @return {number}
 */
/* 思路利用JS原生函数进行数字反转，代码层面的条件判断一看就可以优化，具体怎么做，再议 */

var reverse = function(x) {
    let str = String(x)
    if(str.slice(str.length-1,str.length) ==  '0'){
        str = str.slice(0, str.length-1) 
        if(x>0){
            let res  =  str.split("").reverse().join('');
            console.log('1',res)
            if (res <  Math.pow(2,31)-1 && res > -Math.pow(2,31)) return str.split("").reverse().join('');
            else return 0;
        }
        else {
            str=str.slice(1, str.length);
            let res  =  str.split("").reverse().join('');
            if(res < Math.pow(2,31)-1 && res > -Math.pow(2,31)) return -+str.split("").reverse().join('');
            else return 0;

        }
    }
    else {
        if(x>0){
            let res  =  str.split("").reverse().join('');
            console.log('1',res)
            if (res <  Math.pow(2,31)-1 && res > -Math.pow(2,31)) return str.split("").reverse().join('');
            else return 0;
        }
        else {
            str=str.slice(1, str.length);
            let res  =  str.split("").reverse().join('');
            if(res < Math.pow(2,31)-1 && res > -Math.pow(2,31)) return -+str.split("").reverse().join('');
            else return 0;

        }
    }

};

reverse(1534236469)