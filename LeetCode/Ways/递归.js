/* 阶乘 */

function JieCheng(n) {
    if(n<0){
        throw new Error('负数没有阶乘');
    }
    else if (n === 1 || n === 0){
        return 1;
    }
    // console.log(n*JieCheng(n-1))
    return n*JieCheng(n-1);
}

JieCheng(4)

/* 斐波拉契数列 */

function fibonacci (n) {
    if ( n === 1 || n === 2 ) {
        return 1;
    }
    return fibonacci ( n - 1 ) + fibonacci ( n - 2 )
}