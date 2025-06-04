const palindromes = function (str1) {
    let str = str1.toLowerCase();
    let arr = str.split("");
    arr = arr.filter((c) => {
        return c != ' ' && ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9'));
    });
    let a = 0;
    let b = arr.length - 1;
    while(a < b && arr[a] == arr[b]){
        ++a;
        --b;
    }
    return a >= b;
};

// Do not edit below this line
module.exports = palindromes;
