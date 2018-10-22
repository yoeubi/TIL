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