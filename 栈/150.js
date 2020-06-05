/*
根据逆波兰表示法，求表达式的值。

有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

说明：

整数除法只保留整数部分。
给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
示例 1：

输入: ["2", "1", "+", "3", "*"]
输出: 9
解释: ((2 + 1) * 3) = 9
*/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    var paramStack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (isNaN(tokens[i])) {
            var p2 = paramStack.pop();
            var p1 = paramStack.pop();
            paramStack.push(eval(`(${p1})${tokens[i]}(${p2})`) >> 0)
        } else {
            paramStack.push(tokens[i]);
        }
    }
    return paramStack.pop()
};
console.log(evalRPN(["4","-2","/","2","-3","-","-"]))
