var b = function () {
    console.log('b')
}

function slowfunc(callback) {
   callback();
}

console.log('a')
slowfunc(b)
console.log('c')