const repeatString = function(str, n) {
    ret = "";
    if(n < 0) ret = "ERROR";
    for(let i = 0; i < n; ++i){
        ret += str;
    }

    return ret;
};

// Do not edit below this line
module.exports = repeatString;
