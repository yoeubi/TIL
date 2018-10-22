# 어휘적 this

화살표 함수는 4가지 표준 규칙 대신 에두른 스코프(enclosing scope, 함수 또는 전역)를 보고 this를 알아서 바인딩한다.

```js
function foo(){
    // 화살표함수를 반환한다.
    return (a) => {
        // 여기서 this는 어휘적으로 foo 에서 상속받는다.
        console.log(this.a)
    }
}

var obj1 = {
    a : 2
}
var obj2 = {
    a : 3
}
var bar = foo.call(obj1);

bar.call(obj2) // 2, 3 이 아니다.
```

foo 함수 내부에서 생성된 화살표 함수는 foo 호출 당시 this를 무조건 어휘적으로 포착한다.

foo 는 obj1에 this가 바인딩 되므로 bar(반환된 화살표 함수를 가리키는 변수)의 this역시 obj1로 바인딩된다.

화살표 함수의 어휘적 바인딩은 절대로 new로도 오버라이드 할 수 없다.

화살표 함수는 이벤트 처리기나 타이머 등의 콜백에 가장 널리 쓰인다.

```js
function foo(){
    setTimeout(() => {
        // 여기서 this는 어휘적으로 foo 에서 상속된다.
        console.log(this.a);
    },100)
}
var obj = {
    a : 2
}
foo.call(obj) // 2
```

화살표 함수는 this를 확실하게 보장하는 수단으로 bind 메서드를 대체할 수 있다. 하지만 렉시컬 스코프를 쓰겠다고 기존의 this 체계를 포기하는 형국이다.

ES6이전에도 화살표 함수의 기본 기능과 다르지 않은 나름대로 많이 쓰이던 패턴이 있었다.

```js
function foo(){
    var self = this; // this를 어휘적으로 포착한다.
    setTimeout(function(){
        console.log(self.a);
    },100);
}
var obj = {
    a : 2
}
foo.call(obj) // 2
```

self = this나 화살표 함수 모두 bind 대신 사용 가능하지만 this를 제대로 이해하고 수용하기 보단 골치아픈 this에서 도망치려는 꼼수라고 할 수 있다.

