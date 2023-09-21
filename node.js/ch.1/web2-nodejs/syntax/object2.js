var f = function() {
    console.log(1+1)
    console.log(2+2)
}
var a =[f]
console.log(a[0]);
a[0]();

var o = {
    func:f
}

o.func();
