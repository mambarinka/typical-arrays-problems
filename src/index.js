exports.min = function min(array) {
    let minNumber;
    if (!array || array.length === 0) {
        minNumber = 0;
    } else {
        minNumber = array.reduce((calcNumber, currentNumber) => {
            return currentNumber < calcNumber ? currentNumber : calcNumber;
        });
    }
    return minNumber;
};

// 2 сокращенный вариант с минимальным числом

// exports.min = function min(array) {
//     if (!array || array.length === 0) {
//         return 0;
//     } else {
//         return Math.min(...array);
//     }
// };


exports.max = function max(array) {
    let maxNumber;
    if (!array || array.length === 0) {
        maxNumber = 0;
    } else {
        maxNumber = array.reduce((calcNumber, currentNumber) => {
            return currentNumber > calcNumber ? currentNumber : calcNumber;
        });
    }
    return maxNumber;
};

exports.avg = function avg(array) {
    let averageNumber;
    if (!array || array.length === 0) {
        averageNumber = 0;
    } else {
        averageNumber = array.reduce((calcNumber, currentNumber, index, array) => {
            return (currentNumber + calcNumber);
        });
        averageNumber = averageNumber / array.length;
    }

    return averageNumber;
};
