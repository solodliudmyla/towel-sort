module.exports = function towelSort(matrix) {
    let array = [];
    if (!Array.isArray(matrix) || matrix.length === 0) return [];
    matrix.forEach((item, index) => {
        index % 2 === 0 ? array.push(item) : array.push(item.reverse())
    });
    return array.flat();
};
