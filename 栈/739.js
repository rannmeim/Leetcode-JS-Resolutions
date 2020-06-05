/*
根据每日 气温 列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
*/
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    /* 思路：
        indexStack 存储temperatures元素下标  当某温度小于栈顶坐标对应的温度时，该温度下标入栈  反之，则栈顶元素出栈，再次比对新的栈顶元素，直到该温度小于栈顶温度或栈为空，将该温度的下标入栈  
        days  存储每个温度对应的等待天数  初始为全0
        下标差就是二者的距离天数
    */
   var indexStack = [];
   var days = Array(T.length).fill(0);
   for(let i = 0;i < T.length;i++) {
        while(indexStack.length !== 0 && T[indexStack[indexStack.length-1]] < T[i]) {
            var top = indexStack.pop();
            days[top] = i - top;
        }
        indexStack.push(i);
   }
   return days

};
console.log(dailyTemperatures([74, 73]))
