const removeFromArray = function(arr, ...args) {
    if(arguments.length == 0) return "";
    if(arguments.length == 1) return arr;
    return arr.filter((x) => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
