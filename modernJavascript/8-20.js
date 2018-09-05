var pow = function(exponent){
    return function(base){
        return Math.pow(base, exponent)
    }
}

var sum = function(a,b){return a + b};
let a = [1,2,3,4];
var abs_a = pow(.5)(a.map(pow(2)).reduce(sum))

console.log(a.map(pow(2)).reduce(sum));
