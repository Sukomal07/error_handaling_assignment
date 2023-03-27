function numberChecker(numbers) {
    return function (num) {
        return numbers.includes(num);
    };
}

const arr = [1, 2, 5, 8, 3, 5]
const checkNum = numberChecker(arr)

console.log(checkNum(3))
console.log(checkNum(10))