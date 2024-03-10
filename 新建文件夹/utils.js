function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // 检查除数是否为零，避免除零错误
            if (num2 === 0) {
                return 'Error: Division by zero';
            }
            return num1 / num2;
        default:
            return 'Error: Invalid operator';
    }
}

// 导出 calculate 函数，以便其他文件可以使用它
module.exports = { calculate };