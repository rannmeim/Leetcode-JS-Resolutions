/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = [];
    for (let i = 0; i < s.length; i++) {
        var c = s[i];
        if (['(', '{', '['].includes(c)) {
            stack.push(c);
        } else {
            var top = stack.pop();
            switch (top) {
                case '(':
                    if (c !== ')') {
                        return false
                    }
                    break;
                case '[':
                    if (c !== ']') {
                        return false
                    }
                    break;
                case '{':
                    if (c !== '}') {
                        return false
                    }
                    break;
                default:
                    return false
            }
        }
    }
    return stack.length ? false : true;
};

console.log(isValid('([[)]])'))