# 8일차

- `let` 과 `const`는 같은 이름을 갖는 변수의 재선언을 허용하지 않습니다.

- 변수가 선언되기전에 참조하려고 하면 에러가 납니다.

- 함수의 매개변수나 `var` 변수는 함수 스코프를 갖는다.

- `let` , `const` 변수는 블록 스코프를 갖는다.

```js
function print(){
    console.log(foo);
    var foo = 1;
}
// 호이스팅
function print(){
    var foo;
    console.log(foo);
    foo = 1;
}
```

- 전역 스코프는 스코프 체인의 가장 바깥쪽에 있는 스코프입니다.

- 변수를 명시적으로 전역 스코프에서 선언하지 않더라고, 한 번도 선언되지 않은 이름으로 안쪽 스코프에서 `let` , `const` , `var`를 붙이지 않고 변수를 선언하면 전역 스코프에 변수가 만들어 집니다.

- 웹 브라우저 `window` , 웹 워커 `self` , nodejs `global` 을 쓴다.

- - -

- 참조란 객체가 컴퓨터 메모리 상에서 어디에 저장되었는지를 가리키는 값입니다.

- 엔진은 참조를 통해 메모리에 저장되어 있는 객체에 접근해서 해당 객체의 속성을 읽습니다. 이런 동작을 역참조라고 합니다.

- 함수 호출시 객체를 인수로 넘긴다면 실제로 복사되는 것은 객체 자체가 아니라 참조입니다.

- 원시타입을 넘길때는 원본을 변경할수 없지만 참조를 넘길때는 원본을 변경할 수 있다.

객체가 넘어갈때는 참조가 넘어간다.  원시타입일때는 값이 넘어간다.

- 등호연산자는 객체의 내용을 비교하는게 아니라 객체의 참조를 비교합니다.

- 깊은 비교는 값 비교 이다.  얇은 비교는 참조 비교

- 문자열 원본을 변경할수 있는 메서드가 없다. 

- 변수에 저장된 원시 타입의 값을 바꾸려면 오직 변수에 다른 값으 대입하는 방법밖에 없습니다.

- `object.freeze` 하면 객체 안에 있는 객체까지 얼리지 않는다.

- `const` 는 원본이 변경된다는 사실을 보장해주지 않는다. 재대입이 안될뿐이다.

- - -

# 함수

- `length` : 매개변수의 개수를 반환한다.

- `name` : 함수의 이름을 반환한다.

- 생성자나 메서드가 아닌 함수에서 `this`를 사용하면 전역 객체를 가리킨다.

- `use strict` 엄격모드에서는 위와 같이 `this`를 사용하면 전역 객체가 아닌 `undefined`를 반환한다.

- ES2015모듈을 이용해 작성한 코드는 항상 엄격 모드로 동작한다.

- `bind`는 새로운 함수가 반환이 된다.

- `window.name` 에 빈문자열이 들어가 있다.

- `call` , `apply`는 `this`를 고정한채로 함수를 실행하는 것이다.

- 자바스크립트에서는 매개변수와 인수의 개수가 차이가 나도 오류가 나지 않는다.

- 화살표 함수는 생성자로 사용될수 없습니다. 따라서 `prototype` 속성을 가지고 있지 않습니다.

- 화살표 함수는 스스로의 `this`, `arguments` , `super` 를 가지지 않습니다.

- 화살표 함수 내부에서는 `yield` 키워드를 사용 할수 없습니다.

- 화살표 함수는 바깥의 `this`를 가져다 쓴다.

- 화살표 함수는 `call` , `apply` , `bind` 를 호출해도 효과가 없다.

- 함수가 정의된 스코프에 있는 `this`를 가리킨다. 즉 화살표 함수 내부의 `this`는 화살표 함수가 정의된 문맥에 의해 결정됩니다.

- 생성자 안에서 `this`는 생성된 객체라서 화살표 함수는 생성된 객체를 가리키게 된다.

- 리터럴에 정의된 함수는 전역스코프에서 생성된것이라서 `this`는 전역 객체를 가리키게 된다. 

- `function` 키워드가 호출 될때 `x.fb` 하면 `this`는 호출한 객체에 `this`가 바인딩이 된다.

- 화살표 함수는 정의됬을때 스코프의 `this`를 따라간다.

- 화살표 함수는 함수를 다른 함수의 인수로 넘길때 편리하다.

- - -

# 단축키

- `ctrl + d` 하면 단어 다중 선택이 가능하다.

