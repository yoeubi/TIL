function partial(f){
    var args = arguments;
    return function(){
        var a = Array.prototype.slice.call(args,1);
        console.log('a',a);
        for (let i = 0, j = 0 ; i < a.length; i++) {
            if(a[i] == undefined) a[i] = arguments[j++]
        }
        console.log('a',a);
        console.log('this',this === global);
        console.log(arguments);
        
        return f.apply(this,a);
    }
}
var square = partial(Math.pow, undefined, 2);
console.log(square(2));
