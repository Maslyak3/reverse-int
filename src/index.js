module.exports = function reverse (n) {
    let stringNumber = Math.abs(n).toString();
    let splitNumber = stringNumber.split('');
    let reversedArray = splitNumber.reverse();
    let result = reversedArray.join('');
    return parseInt(result);
}

