# this

this는 작성 시점이 아닌 런타임 시점에 바인딩되며 함수 호출 당시 상황에 따라 컨텍스트가 결정된다.

함수 선언 위치와 상관없이 this 바인딩은 오로지 어떻게 함수를 호출했느냐에 따라 정해진다.

this는 함수 자신이나 함수의 렉시컬 스코프를 가리키는 레퍼런스가 아니다.

this 바인딩의 개념을 이해하려면 먼저 호출부, 즉 함수 호출 코드 부터 확인하고 this가 가리키는 것이 무엇인지 찾아봐야한다.

호출부는 함수를 호출한 지점으로 돌아가면 확인할 수 있다. 중요한 건 호출 스택 , 현재 실행 지점에 오기까지 호출된 함수의 스택을 생각해보는 것이다.

호출부는 현재 실행 중인 함수 직전의 호출 코드 내부에 있다.

```js
function baz(){
    // 호출 스택 : baz
    // 호출부는 전역 스코프 내부이다.
    console.log('baz');
    bar() // bar의 호출부
}
function bar(){
    // 호출 스택 : baz -> bar
    // 따라서 호출부는 baz 내부이다.
    console.log('bar');
    foo(); // foo 의 호출부 
}
function foo(){
    // 호출 스택 : baz -> bar -> foo
    // 따라서 호출부는 bar 내부다
    console.log('foo')
}
baz() // baz의 호출부
```

## 기본 바인딩

첫 번째 규칙은 가장 평범한 함수 호출인 단독 함수 실행 에 관한 규칙으로 나머지 규칙에 해당하지 않을 경우 적용되는 this의 기본 규칙이다.

```js
function foo(){
    console.log('foo')
}
var a = 2;
foo() // 2
```

var a = 2 처럼 전역 스코프에 변수를 선언하면 변수명과 같은 이름의 전역 객체 프로퍼티가 생성된다. 이는 서로의 사본이 아니고 같은 동전의 앞뒷면이라고 보면 된다.

foo 함수 호출시 this.a는 전역 객체 a다. 기본 바인딩이 적용되어 this는 전역 객체를 참조한다.

foo는 지극히 평범한 있는 그대로의 함수 레퍼런스로 호출했다. 나머지 규칙을 논할 여지가 없이 기본 바인딩이 그대로 적용됐다.

엄격모드(strict mode)에서는 전역 객체가 기본 바인딩 대상에서 제외된다. 그래서 this는 undefined가 된다.

중요한 사실은 보통 this 바인딩 규칙은 오로지 호출부에 의해 좌우되지만 비엄격모드에서 foo함수의 본문을 실행하면 전역 객체만이 기본 바인딩의 유일한 대상이라는 점이다. foo 호출부의 엄격 모드 여부는 상관이 없다.

## 암시적 바인딩

두 번째 규칙은 호출부에 콘텍스트 객체가 있는지, 즉 객체의 소유/ 포함 여부를 확인하는 것이다.

```js
function foo(){
    console.log(this.a);
}
var obj = {
    a : 2 ,
    foo : foo
}
obj.foo() // 2
```

foo 함수를 obj에서 프로퍼티로 참조하고 있다. foo 를 처음부터 foo 프로퍼티로 선언하든 이 예제처럼 나중에 레퍼런스로 추가하든 obj 객체가 이함수를 정말로 소유하거나 포함 한 것은 아니다.

그러나 호출부는 obj 콘텍스트로 foo를 참조하므로 obj 객체는 함수 호출 시점에 함수의 레퍼런스를 소유하거나 포함한다고 볼 수 있다.

함수 레퍼런스에 대한 콘텍스트 객체가 존재할 때 암시적 바인딩 규칙에 따르면 바로 이 콘텍스트 객체가 함수 호출시 this에 바인딩이 된다. 

foo 호출시 obj 는 this이나 this.a 는 obj.a 가 된다.

```js
function foo(){
    console.log(a);
}
var obj2 = {
    a : 42 ,
    foo : foo
}
var obj1 = {
    a : 2 ,
    obj2 : obj2
}
obj1.obj2.foo() // 42
```

만약 객체 프로퍼티 참조가 체이닝된 형태라면 최상위/최하위 수준의 정보만 호출부와 연관된다.

### 암시적 소실

암시적으로 바인딩 된 함수에서 바인딩이 소실되는 경우가 있다.

```js
function foo(){
    console.log(this.a);
}
var obj = {
    a : 2 ,
    foo : foo
}
var bar = obj.foo // 함수 레퍼런스/별명
var a = '엥 전역이네!' // a 는 전역 객체의 레퍼런스
bar() // 엥 전역이네!
```

bar는 obj의 foo를 참조하는 변수처럼 보이지만 실은 foo를 직접 가리키는 또 다른 레퍼런스다. 

게다가 호출부에서 그냥 평범하게 bar를 호출하므르 기본 바인딩이 적용된다.

```js
function foo(){
    console.log(this.a);
}
function doFoo(fn){
    // fn 은 foo 의 또 다른 레퍼런스일 뿐이다.
    fn() // 호출부
}
var obj = {
    a : 2 ,
    foo : foo
}
var a = '엥 전역이네' // a 는 전역 객체의 프로퍼티
doFoo(obj.foo); // 엥 전역이네
```

인자로 전달하는 건 일종의 암시적인 할당이다. 예제처럼 함수를 인자로 넘기면 암시적으로 레퍼런스가 할당되어 이전 예제와 결과는 같다.

```js
function foo(){
    console.log(this.a);
}
var obj = {
    a : 2,
    foo : foo
}
var a = '엥 전역이네'; // a 역시 전역 객체의 프로퍼티
setTimeout(obj.foo,100) // '엥 전역이네'
// setTimeout 함수의 이론적인 의사 구현체는 대략 다음과 같은 형태이다.
function setTimeout(fn ,delay){
    // delay 수 밀리 초 동안 기다린다.
    fn() // 호출부
}
```

콜백을 받아 처리하는 함수가 이써어도 결과는 마찬가지 이다.

콜백 과정에서 this 바인딩의 행방이 묘연해지는 경우가 많다. 

## 명시적 바인딩

암시적 바인딩에선 함수 레퍼런스를 객체에 넣기 위해 객체 자신을 변형해야 했고 함수 레퍼런스 프로퍼티를 이용하여 this를 간접적으로(암시적으로) 바인딩했다.

함수 레퍼런스 프로퍼티를 객체에 더하지 않고 어떤 객체를 this 바인딩에 이용하겠다는 의지를 코디에 명확히 밝힐려면 call , apply 메서드를 쓰면 된다.

두 메서드는 this에 바인딩 할 객체를 첫째 인자로 받아 함수 호출시 이 객체를 this로 세팅한다. this를 지정한 객체로 직접 바인딩 하므르 이를 명시적 바인딩 이라 한다.

```js
function foo(){
    console.log(this.a)
}
var obj = {
    a : 2
}
foo.cal(obj) // 2
```

foo.call 에서 명시적으로 바인딩하여 함수를 호출하므로 this는 반드시 obj가 된다.

객체 대신 단순 원시 값(문자열 , 불리언 , 숫자 )을 인자로 전달하면 원시 값에 대응되는 객체(new String , new Boolean , new Number )로 래핑된다. 이 과정을 박싱이라고 한다.

명시적으로 바인딩해도 앞에서 언급한 this 바인딩이 도중에 소실되거나 프레임워크가 임의로 덮어써 버리는 문제는 해결할 수 없다.

### 하드 바인딩

```js
function foo(){
    console.log(this.a);
}
var obj = {
    a : 2
}
var bar = {
    foo.call(obj);
}
bar(); // 2
setTimeout(bar , 100); // 2

// 하드 바인딩 된 bar 에서 재정의된 this는 의미 없다
bar.call(window); // 2
```

함수 bar 는 내부에서 foo.call(obj) 로 foo를 호출하면서 obj를 this에 강제로 바인딩하도록 하드 코딩한다.

따라서 bar를 어떻게 호출하든 이 함수는 항상 obj를 바인딩하여 foo를 실행한다.

이런 바인딩은 명시적이고 강력해서 하드 바인딩이라고 한다.

하드 바인딩은 매우 자주 쓰는 패턴이어서 ES5 내장 유틸리티 bing 메서드 역시 다음과 같이 구현되엉 있다.

```js
function foo(something){
    console.log(this.a , something)
    return this.a + something;
}
var obj = {
    a : 2
}
var bar = foo.bind(obj);
var b = bar(3) // 2 3 
console.log(b) // 5 
```

bind 는 주어진 this 콘텍스트로 원본 함수를 호출하도록 하드 코딩된 새함 수를 반환한다.

### API 호출 콘텍스트

많은 라이브러리 함수와 자바스크립트 언어 및 호스터 환경에 내장된 여러 새로운 함수는 대개 콘텍스트 라 불리는 선택적인 인자를 제공한다. 이는 bind를 써서 콜백 함수의 this를 지정할 수 없는 경우를 대비한 일정의 예비책이다.

예를 들어, 다음과 같은 함수는 편의상 내부적으로 call 이나 apply 로 명시적 바인딩을 대신해준다.

```js
function foo(el){
    console.log(el , this.id)
}
var obj = {
    id : '멋진 남자'
}
// foo 호출시 obj를 this로 사용한다.
[1,2,3].forEach(foo, obj)
// 1 멋진 남자 2 멋진 남자 3 멋진 남자
```

## new 바인딩

네 번째 바인딩 규칙을 설명하려면 new 라는 것을 먼저 이해해야한다.

전통적인 클래스 지향 언어의 생성자는 클래스에 붙은 특별한 메서드로, 다음과 같이 클래스 인스턴스 생성 시 new 연산자로 호출된다.

```js
something = new MyClass();
```

자바스크립트에서 new는 의미상 클래스 지향적인 기능과 아무 상관이 없다.

생성자의 정의는 앞에 new 연산자가 있을때 호출되는 일반 함수이다.

클래스에 붙은 것도 아니고 클래스 인스턴스화 기능도 없다.

예를 들어 생성자 Number 함수에 대해 ES5.1 명세에서는 

```
15.7.2 Number 생성자
new 표현식의 일부로 호출시 Number는 생성자이며 새로 만들어진 객체를 초기화한다.
```

따라서 Number 같은 부류의 내장 객체 함수는 물론이고 상당수의 옛 함수는 앞에 new를 붙여 호출할수 있고 이는 결국 생성자 호출(constructor call)이나 다름이 없다.

미묘한 차이를 잘 구분하는 것이 중요한데, 생성자 함수(constructor function)r가 아니라 함수를 생성하는 호출(construction calls of functions)이라고 해야 옳다.

함수 앞에 new를 붙여 생성자 호출을 하면 다음과 같은 일들이 일어난다
    1. 새 객체가 만들어진다.
    1. 새로 생성된 객체의 [[prototype]]이 연결된다.
    1. 새로 생성된 객체는 해당 함수 호출시 this로 바인딩된다.
    1. 이 함수가 자신의 또 다른 객체를 반환하지 않는 한 new와 함께 호출된 함수는 자동으로 새로 생성된 객체를 반환한다.

```js
function foo(a){
    this.a = a;
}
var bar = new foo(2);
console.log(bar.a) // 2
```

앞에 new를 붙여 foo 를 호출했고 새로 생성된 객체는 foo 호출시 this에 바인딩 된다.

따라서 결국 new는 함수 호출 시 this를 새 객체에 바인딩 하는 방법이며 이것이 new 바인딩 이다.

# 모든 건 순서가 있는 법

여러 개의 규칙이 중복으로 해당할땐 어떻게 할까? 그래서 우선순위가 미리 정해져 있다.

일반적으로 기본 바인딩은 가장 뒷순위로 밀리수 박에 없으니 순서 하나는 정해졌다. 

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

# 바인딩 예외 

특정 바인딩을 의도했는데 실제로는 기본 바인딩이 적용되는 예외 사례가 있다.

## this 무시

call , apply , bind 메서드에 첫 번쨰 인자로 null 또는 undefined를 넘기면 this 바인딩이 무시되고 기본 바인딩 규칙이 적용된다.

```js
function foo(){
    console.log(this.a);
}
var a = 2;
foo.call(null); // 2
```

왜 null 같은 값을 this 바인딩을 하려는 걸까? apply 함수 호출시 다수의 인자를 배열 감으로 죽 펼쳐 보내는 용도로 자주 쓰인다.

bind 도 유사한 방법으로 인자들(미리 세팅된 값들)을 커링하는 메서드로 많이 사용한다.

```js
function foo(a,b){
    console.log('a: ' + a + ',b: ' + b);
}
// 인자들을 배열 형태로 죽 펼친다.
foo.apply(null, [2,3]) // a : 2 , b : 3

// bind 로 커링한다.
var bar = foo.bind(null , 2);
bar(3); // a : 2 , b : 3
```

apply 와 bind 모두 첫 번째 인자로 this 바인딩을 지정해야 한다. 하지만 this가 로직상 아무래도 좋다면 일정의 자리 끼움 값으로 null 정도의 값을 전달하는 편이 합리적이다.

그러나 null을 사용하는 건 약간의 리스크가 있다. 어떤 함수 호출시 null을 전달했는데 마침 그 함수가 내부적으로 this를 레퍼런스로 참조하면 기본 바인딩이 적용되어 전역 변수를 참조하거나 최악으로 변경하는 예기지 못한 일이 발생할 수 있다.

### 더 안전한 this

더 안전하게 가고자 한다면 프로그램에서 부작용과 100% 무관한 객체를 this로 바인딩 하는게 좋다. 

네트워크 업계의 용어로 표현하면 일종의 DMZ 객체, 내용이 하나도 없으면서 전혀 위임되지 않은 객체 정도가 필요하다.

this 바인딩을 신경 쓰지 않고 싶을 때마다 이 DMZ 객체를 전달하면, 받는 쪽에서 this를 어찌 사용하든지 어짜피 대상은 빈 객체로 한정되므로 최소한 전역 객체를 건드리는 부작용을 방지할 수 있다.

빈 객체를 만드는 가장 간단한 방법은 Object.create(null)이다. Object.create(null)은 {}와 비슷하나 Object.prototype으로 위임하지 않으므로 {}보다 더 텅 빈 객체라고 볼 수 있다.

```js
function foo(a,b){
    console.log('a:'+ a + ',b:'+ b);
}
// DMZ 객체 생성
var o = Object.create(null);

// 인자들은 배열 형태로 죽 펼친다.
foo.apply(o, [2,3]) // a : 2 , b : 3

// bind로 커링한다.
var bar = foo.bind(o,2);
bar(3) // a : 2 , b : 3
```

기능적으로 더 안전하다는 의미 외에도 o처럼 표기하면 this는 텅 빈 객체로 하겠다는 의도를 null보다 더 확실하게 밝히는 효과가 있다.

## 간접 레퍼런스

간접 레퍼런스가 생성되는 경우 함수를 호출하면 무조건 기본 바인딩 규칙이 적용되어 버린다.

간접 레퍼런스는 할당문에서 가장 빈번하게 발생한다.

```js
function foo(){
    console.log(this.a);
}
var a = 2;
var o = { a : 3 , foo : foo };
var p = { a : 4 };

o.foo() // 3
(p.foo = o.foo)() // 2
```

할당 표현식 p.foo = o.foo 의 결과값은 원 함수 객체의 레퍼런스이므로 실제로는 호출부는 처음 예상과는 달리 p.foo , o.foo 가 아니라 foo이다.

그래서 기본 바인딩 규칙이 적용된다.

## 소프트 바인딩

함수 호출시 애초 의도와는 다르게 기본 바인딩 규칙이 적요되는 걸 막기 위해 (new 로 오버라이드 하지 않고) this를 강제 하드 바인딩 기법은 앞에서 이미 언급했다.

그런데 문제는 하드 바인딩은 함수의 유연성을 크게 떨어뜨리기 때문에 this를 암시적으로 바인딩하거나 나중에 다시 명시적 바인딩 하는 식으로 수동으로 오버라이드 하는 것이 불가능하다.

암시적/명시적 바인딩 기법을 통해 임의로 this 바인딩을 하는 동시에 전역 객체나 undefined가 아닌 다른 기본 바인딩 값을 세팅할 수 있다면 어떻게 해야하나?

```js
if(!Function.prototype.softBind){
    Function.prototype.softBind = function(obj){
        var fn = this;
        var curried = [].slice.call(arguments, 1);
        var bound = function(){
            return fn.apply(
                (!this || this === (window || global)) ?
                obj : this ,
                curried.concat.apply(curried,arguments)
            )
        }
        bound.prototype = Object.create(fn.prototype);
        return bound;
    }
}
```

호출 시점에서 this를 체크하는 부분에서 주어진 함수를 래핑하여 전역 객체나 undefined일 경우엔 미리 준비한 대체 기본 객체(obj)로 세팅한다.

그 외의 경우 this는 손대지 않는다. 그리고 선택적인 커링 기능도 있다.

```js
function foo(){
    console.log('name: ' + this.name);
}
var obj = { name : 'obj'},
    obj2 = { name : 'obj2'},
    obj3 = { name : 'obj3'};

var fooBJ = foo.softBind(obj);

fooBj() // name : obj

obj2.foo = foo.softBind(obj)
obj2.foo() // name : obj2

fooBJ.call(obj3) // name : obj3

setTimeout(obj2.foo , 10);
// name : obj
```

소프트 바인딩이 탑재된 foo 함수는 this를 obj2 나 obj3으로 수동 바인딩할 수 있고 기본 바인딩 규칙이 적용되어야 할 땐 다시 obj로 되돌린다.

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

# 정리하기

함수 실행에 있어서 this 바인딩은 함수의 직접적인 호출부에 따라 달라진다. 일단 호출부를 식별한 후 다음 4가지 규칙을 열거한 우선순위에 따라 적용한다.

1. new로 호출했다면 새로 생성된 객체로 바인딩 된다.
1. call 이나 apply 또는 bind로 호출됐다면 주어진 객체로 바인딩 된다.
1. 호출의 주체인 콘텍스트 객체로 호출됐다면 바로 이 콘텍스트 객체로 바인딩 된다.
1. 기본 바인딩에서 엄격 모드는 undefined, 그 밖엔 전역 객체로 바인딩 된다.

실소로 또는 예기지 찮게 기본 바인딩 규칙이 적용되는 경우를 조심해야 한다. this 바인딩을 안전하게 하고 싶다면 o = Object.create(null) 처럼 DMZ 객체를 자리 끼움 값으로 바꿔 넣어 뜻하지 않은 부수 효과가 전역 객체에서 발생하지 않게 한다.

ES6 화살표 함수는 표준 바인딩 규칙을 무시하고 렉시컬 스코프로 this를 바인딩 한다. 즉 , 에두른 함수 호출로부터 어떤 값이든 this 바인딩을 상속한다.

이는 ES6 이전 시절 self = this 구문을 대체한 장치다.