/**
 * @param {number} n
 * @return {number}
 */
// 费马四平方数猜想指出，任意自然数都可以分解成不超过四个完全平方数的和。
function getNexts(num) {
    var max = parseInt(Math.sqrt(num));
    var nexts = [];
    for(let i = max; i > 0; i--) {
        let next = num - Math.pow(i, 2);
        if(next < 1) {
            break;
        }
        nexts.push(next);
    }
    return nexts
}
function isInt(num) {
    console.log('isint', parseInt(num) == num)
    return parseInt(num) == num
}
var numSquares = function(n) {
    var queue = [n];
    var step = 0;
    while(1) {
        step++;
        let size = queue.length;
        for(let i = 0; i<size;i++) {
            let cur = queue.shift();
            console.log('cur', cur);
            if(isInt(Math.sqrt(cur))) {
                return step
            }
            for(let next of getNexts(cur)) {
                queue.push(next);
            }
            // console.log('queue', queue);

        }
    }
};
let result = numSquares(13);
console.log(result)