# new String('') 과 '' , 그리고 String('')의 차이

- 기본형 중 하나인 문자열 대상으로 기본형과 객체의 차이에 대해 알아보자

- 기본형의 형태를알아보는 함수로 typeof가 있다면 객체에 대하여 어떠한 객체인지 확인하는 instanceof 연산자가 있다.

- instanceof는 typeof와 달리 이항 연산자로 인자를 2개 받으며 왼쪽에 받는 인자가 오른쪽에 받는 인자의 인스턴스인지 확인하고 그 결과로 true 또는 false를 반환한다.

- 다른 언어와 비교해서 말하면, 변수가 해당 클래스의 인스턴스인지 확인하는 키워드이다.

```js
function Person(name, blog){
    this.name = name;
    this.blog = blog;
}
var unikys = new Person('unikys','http://unikys.tistory.com');

console.log(unikys instanceof Person) // true
console.log(unikys instanceof Object) // true
console.log(typeof unikys) // object
```

- instaceof의 연산 결과로 unikys 객체가 생성자인 Person을 통해서 생성되었고, Person은 Object를 확장하고 있다는 것을 확인할 수 있다.

- typeof의 결과로는 object를 반환하고 있다.

- 이러한 instanceof 와 typeof의 동작은 유사한듯 하지만 차이가 있다.

- 바로 instanceof 연산자는 기본형에 대해서는 동작하지 않는다는 점이다.

```js
console.log(true instanceof Boolean) // false
console.log(true instanceof Object) // false

console.log([0,1] instanceof Array) // true
console.log({ name : 'unikys' } instanceof Object) // true

var color1 = new String('red');
var color2 = 'red';
console.log(color1 == color2) // true
console.log(color1 instanceof String) // true
console.log(color2 instanceof String) // false
console.log(color2 instanceof Object) // false
```

- true나 false와 같은 값은 기본형이라서 Boolean 객체의 instanceof가 false가 나타난다.

- 하지만 []처럼 배열을 생성하는  표현식은 내부적으로 new Array()와 같은 동작을 취하게 되므로 instanceof Array 가 true이다.

- new String 으로 생성한 문자열과 기본형인 따옴표로 생성한 벼눗가 서로 같은지(==) 비교하면 true이다.

- 그런데 new String 으로 생성한 문자열은 instanceof String이 true이지만, 따옴표로 생성한 문자열은 false이다.

- 이것으로 문자열이 서로 같은지 == 연산자로 비교하면 true로 서로 같은 값이라는 결과가 나오지만 , 내부적으로 보면 서로 다르다는 것을 알수 있다.

## 기본형 문자열 과 문자열 객체 비교

```js
console.log(color1 === color2) // false
console.log(color1.constructor === String) // true
console.log(color2.constructor === String) // true
```

- 자바스크립트에서 `==` 비교 연산자는 두 피연산자 다른 형태일때 대부분 비교를 위해 형변환이 일어나서 같은 값으로 판단하지만,

- `===` 비교 연산자는 형변환이 일어나지 않는 엄격한 비교를 수행하여 다른 값으로 판단하기 때문이다.

- color1은 String의 인스턴스이고 , color2는 기본형이므로 서로가 다르다

- 하지만 두변수의 constructor 속성을 살펴보면 2개가 똑같이 String이라는 결과가 나온다.

- color2의 생성자가 String인 이유는 color2.constructor를 연산할때 내부적으로 형변환이 일어난 다음에 constructor에 접근하기 때문이다.

- 표준에서 해당 동작 방식을 세부적으로 살펴보려면 GetValue를 참조하면 된다.

- GetValue(V)
    1. 인자가 V가 정상적이면 V의 값을 사용
    1. V가 레퍼런스가 아니라면 V를 반환
    1. base를 V를 포함한 객체로 설정
    1. V가 참조할 수 없는 레퍼런스면 ReferenceError 오류 발생
    1. V 속성이 존재한다면 : 
        1. V를 포함한 객체 base가 기본형이라면
            1. base는 null이나 undefined이어서는 안됨
            1. base를 ToObject(base)의 결과로 설정
        1. base의 V속성을 가져와서 결과로 반환
    1. 아니라면 base는 환경 레코드(Environment Record)에 있어야 함
        1. base에 바인딩된 값의 속성 V를 가져와서 결과로 반환 

- 표준에서는 5-1-2단계에서 기본형인 base에 대하여 속성값을 가져올 때 ToObject라는 함수를 사용해서 기본형을 객체로 변경해서 가져온다.

- 기본형 문자열은 ToObject 함수의인자로 넘겨주면 다음과 같이 동작한다. 

- ToObject(argument)
    - ToObject는 arguments의 기본형 값을 다음 표에 따라서 객체로 생성한다.

    | 인자 유형 | 처리 결과 |
    |----------|-----------|
    | Defined | TypeError 발생 | 
    | Null | TypeError 발생 |
    | Boolean | Boolean 객체를 생성 한뒤 입력 값을 설정하여 반환 |
    | Number | Number 객체를 생성한 뒤 입력 값을 설정하여 반환 |
    | String | String 객체를 생성한 뒤 입력 값을 설정하여 반환 |

- ToObject 함수의 인자로 String 기본형을 넘기면 새로운 String 객체를 생성하여 반환한다.

- 따라서 color2의 속성에 접근하려고 하면 자바스크립트 내부적으로 String 객체로 변환되는 것이다.

```js
var color1 = new String('red');
var color2 = 'red';
var color3 = String('red');

console.log(color1.toUpperCase()) // 'red'
console.log(color2.toUpperCase()) // 'red'
console.log(color3.toUpperCase()) // 'red'

console.log(color1 instanceof String) // true
console.log(color2 instanceof String) // false
console.log(color3 instanceof String) // false

console.log(typeof color1) // object
console.log(typeof color2) // string
console.log(typeof color3) // string
```

- color3은 instanceof 와 typeof의 결과에 비추어 봤을때 color2와 동작이 일치하는 것처럼 보인다.

- String(value)
    - String 함수가 value라는 인자로 호출되면 다음의 순서대로 처리한다.
        1. 인자가 없다면 s를 ''로 설정
        1. 인자가 있다면 
            1. 생성자로 호출된 것이 아니고 value가 Symbol이라면 Symbol을 나타내는 문자열 반환
            1. s를 ToString(value)로 설정
        1. 생성자로 호출된 것이 아니면 s를 반환
        1. 생성자로 호출된 것이면 s를 값으로 가지는 String 객체를 생성하여 반환

- ToString(argument)
    - ToString() 함수는 argument 인자를 다음의 표에 따라서 변환하여 처리한다.


    | 인자 유형 | 처리 결과 | 
    |----------|-----------|
    | Undefined | 'undefined' 반환 |
    | Null | 'null' 반환 |
    | Boolean | argument 값이 true 이면 true 반환 , argument 값이 false면 false 반환 |
    | Number | 별도 내용 참조 | 
    | String | argument 그대로 반환 | 
    | Symbol | TypeError 발생 |
    | Object | 다음의 순서대로 처리 1. argument를 기본형으로 변환 시도 후 primValue에 설정 2. ToString(primValue)를 반환 |

- 표준에 의하면 입력 인자가 String 이면 인자를 그대로 반환하게 되어 있다.

- 따라서 String('red')이라고 설정했던 변수는 인자인 'red'가 그대로 반환되어 문자열 기본형인 'red'와 같다는 것을 알 수 있다.

```js
console.log(color2 === color3) // true
```

## 추가 속성 선언 여부

- 문자열을 생성하는 방법 중 다른 점이 또 있다면 바로 기본형은 추가 속성을 선언 할수 없다는 점이다.

```js
var constructString = new String('unikys');
constructString.blog = 'http://unikys.tistory.com';
console.log(constructString.blog === 'http://unikys.tistory.com')

var primitiveString = 'unikys';
primitiveString.blog = 'http://unikys.tistory.com';
console.log(primitiveString.blog === undefined)
```

- 기본형에 추가 속성을 부여할 수 없다는 점은 다른 언어들과 유사하지만, prototype과 연계하면 자바스크립트만의 독특한 특징이 나타나기도 한다. 

- String.prototype 에 함수를 추가로 구현해두면 , 다음처럼 기본형에서도 해당함수를 사용 할수 있다. 

- 표준에서 살펴봤든 기본형의 속성에 접근하고자 할때 내부적으로 String 객체로 변경시키는 것을 연장해서 생각해보면 이해하기 쉽다.

```js
console.log('            unikys          '.trim() === 'unikys') // true
```