# 모든 건 순서가 있는 법

여러 개의 규칙이 중복으로 해당할땐 어떻게 할까? 그래서 우선순위가 미리 정해져 있다.

일반적으로 기본 바인딩은 가장 뒷순위로 밀릴수 박에 없으니 순서 하나는 정해졌다. 

암시적 바인딩과 명시적 바인딩 중 어느 쪽이 우선일까?

```js
function foo(){
    console.log(this.a);
}
var obj1 = {
    a : 2,
    foo : foo
}
var obj2 = {
    a : 3 ,
    foo : foo
}
obj1.foo() // 2
obj2.foo() // 3

obj1.foo.call(obj2) // 3
obj1.foo.call(obj1) // 2
```

결과를 보면 명시적 바인딩이 암시적 바인딩보다 우선순위가 높음을 알 수 있다.

따라서 암시적 바인딩을 확인하기 전에 먼저 명시적 바인딩이 적용됐는지 반드시 살펴야 한다.

이제 남은 건 new 바인딩이다.

```js
function foo(something){
    this.a = something;
}
var obj1 = {
    foo : foo
}
var obj2 = {};
obj1.foo(2);
console.log(obj1.a); // 2
obj1.foo.call(obj2 ,3);
console.log(obj2.a) // 3

var bar = new obj1.foo(4);

console.log(obj1.a) // 2
console.log(bar.a) // 4
```

new 바인딩이 암시적 바인딩보다 우선순위가 높다. 그런 new 바인딩과 명시적 바인딩 중 어느 쪽이 우선순위가 있을까?

예제 코드를 보기 전에 하드 바인딩의 물리적인 작동 원리를 곱씹어보자.

bind 메서드는 어떤 종류든 자체 this 바인딩을 무시하고 주어진 바인딩을 적용하여 하드 코딩된 새 래퍼 함수를 생성한다.

따라서 명시적 바인딩의 한 형태인 하드 코딩이 new 바인딩보다 우선순위가 높고 new로 오버라이드 할 수 없다는 사실을 짐작할 수 있다.

```js
function foo(something){
    this.a = something;
}
var obj1 = {};

var bar = foo.bind(obj1);
bar(2);

console.log(obj1.a) // a 

var baz = new bar(3)
console.log(obj1.a) // 2
console.log(baz.a) // 3
```

bar는 obj1에 하드 바인딩 됐는데, 짐작대로 new bar(3) 실행 후에도 obj1.a 값은 3으로 바뀌지 않고, 그 대신 obj1에 하드 바인딩 된 bar 호출은 오버라이드할 수 없다.

또 한 new가 적용되므로 새로 만들어진 객체가 baz에 할당되고 실제 baz.a 값은 3이 된다.

```js
if(!Function.prototype.bind){
    Function.prototype.bind = function(oThis){
        if(typeof this !== 'function'){
            throw new TypeError(
                'Function.prototype.bind - 바인딩 하려는 대상이 호출 가능하지 않습니다.'
            )
        }
        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function(){},
            fBound = function(){
                return fToBind.apply(
                    (
                        this instanceof fNOP &&
                        oThis ? this : oThis
                    ),
                    aArgs.concat(
                        Array.prototype.slice.call(arguments);
                    )
                )
            }
        ;
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };     
}
```

기본 로직은 하드 바인딩 함수가 new로 호출되어 this가 새로 생성된 객체로 세팅됐는지 조사해보고 맞으면 하드 바인딩에 의한 this를 버리고 새로 생성된 this를 대신 사용한다.

굳이 new로 하드 바인딩을 오버라이드하려는 이유는 뭘까? 기본적으로 this 하드 바인딩을 무시하는 (new로 객체를 생성할 수 있는) 함수를 생성하여 함수 인자를 전부 또는 일부만 미리 세팅해야 할 때 유용하다.

bind 함수는 최초 this 바인딩 이후 전달된 인자를 원 함수의 기본 인자로 고정하는 역활을 한다.

```js
function foo(p1, p2){
    this.val = p1 + p2;
}
// null 을 입력한 건 여기서 this 하드 바인딩은
// 어짜피 new 호출시 오버라이드되므로 신경 쓰지 않겠다는 의미다.
var bar = foo.bind(null,'p1');
var baz = new bar('p2');
baz.val // p1p2
```

## this 확정 규칙

함수 호출부에서 this가 결정되는 규칙을 우선순위에 따라 차례대로 정리해보면

1. new로 함수를 호출(new 바인딩)했는가? -> 맞으면 새로 생성된 객체가 this이다.

    ```js
    var bar = new foo();
    ```

1. call 과 apply 로 함수를 호출(명시적 바인딩), 이를테면 bind 하드 바인딩 내부에 숨겨진 형태로 호출됐는가?
-> 맞으면 명시적으로 지정된 객체가 this다.

    ```js
    var bar = foo.call(obj2);
    ```

1. 함수를 콘텍스트(암시적 바인딩), 즉 객체를 소유 또는 포함하는 형태로 호출했는가? -> 맞으면 바로 이 콘텍스트 객체가 this다.

    ```js
    var bar = obj1.foo();
    ```

1. 그외의 경우 this는 기본값(엄격 모드는 undefined , 비엄격 모드는 전역 객체)으로 세팅된다.(기본바인딩)

    ```js
    var bar = foo();
    ```