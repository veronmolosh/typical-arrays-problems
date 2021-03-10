exports.min = function min(array) {
    return array && array.length ? Math.min(...array) : 0;
};

exports.max = function max(array) {
    return array && array.length ? Math.max(...array) : 0;
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let sum = array.reduce((a, b) => a + b);
        return (sum / array.length);
    }
}