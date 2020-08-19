const add = (x, y) => {

    return parseFloat(x) + parseFloat(y);
};

const subtract = (x, y) => {
    //var z = parseFloat((parseFloat(x) - parseFloat(y)).toFixed(2));
    return (parseFloat(x) - parseFloat(y));
    //return z;

};

const multiply = (x, y) => {
    // var a = parseInt(x);
    // var b = parseInt(y);

    if (typeof(x) === "string" || typeof(y) === "string") {
        //  if (isNaN(x) || isNaN(y)) {

        throw new Error("Strings are not accepted");
    }
    return x * y;
};

const divide = (x, y) => {
    if (y === 0) {
        throw new Error("Do not divide by zero");
    }
    return x / y;
};

const equals = (x, operator, y) => {
    if (y === undefined || y === null) {
        y = x;
    }
    if (operator === '+') {
        return add(x, y);
    } else if (operator === '-') {
        return subtract(x, y);
    } else if (operator === '*') {
        return multiply(x, y);
    } else if (operator === '/') {
        return divide(x, y);
    }
}

const clearAllfields = () => {
    return 0;
}


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    equals,
    clearAllfields
};