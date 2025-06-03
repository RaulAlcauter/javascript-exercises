const sumAll = function(a, b) {
    if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    const min = Math.min(a, b);
    const max = Math.max(a, b);
    let ret = 0;
    for(let i = min; i <= max; ++i){
        ret += i;
    }
    return ret;
};

// Do not edit below this line
module.exports = sumAll;
