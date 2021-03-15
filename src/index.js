module.exports = function reverse (n) {
    // let rev = n.toString().split('');
    // let arr = Array.from(rev).reverse();
    // let res;
    // if (arr.includes('-')) {
    //     arr.pop();
    //     res = arr.join('');
    // } else {
    //     res = arr.join('');
    // }
    // return res;
    return [...`${n < 0 ? n*(-1) : n}`].reverse().join('');
};
