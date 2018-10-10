# 자바스크립트의 기본형과 `typeof`

- 자바스크립트의 변수들은 기본적으로 모든 형태를 수용할 수 있도록 형(type)에 대한 제약이 없다.
    - `number` (숫자)
    - `string` 
    - `boolean` (이진 값)
    - `undefined`
    - `null`
    - `symbol`

- 자바스크립트는 이와 같은 기본형 변수들과 `Object`를 기초로 하는 객체들로 구성된다.

- 특정 변수가 어떤 형태인지 확인하는 연산자로 `typeof`가 있다. `typeof`는 오른쪽에 입력값 하나를 받는 단항 연산자로, 함수가 아니라서 다음처럼 괄호없이 사용한다.

- 변수의 이름 앞에 `typeof` 연산자를 사용하면 문자열을 반환

|반환값 | 의미 |
|------|------|
|`undefined`| 정의되지 않은 값 또는 해당 값을 가진 변수 |
|`boolean`| true/false 값 또는 해당 값을 가진 변수 |
|`number`| 숫자 값 또는 해당 값을 가진 변수 |
|`string`| 문자열 값 또는 해당 값을 가진 변수 |
|`object`| 객체 또는 객체를 저장하는 변수 |
|`function`| 함수 또는 함수를 저장하는 변수 |
|`symbol`| `Symbol()` 함수로 생성한 키 | 

```js
typeof 3; // 'number'
typeof 'str' // 'string'
typeof {} // 'object'
typeof [] // 'object'
typeof function(){} // 'function'
typeof null // 'null'
```

## `typeof` 연산자

- `typeof` 연산자 문법 = `typeof 단항표현식`

- `typeof` 연산자는 아래와 같은 순서대로 값을 구한다.
    - `val`은 `typeof` 연산자에 입력된 단항표현식의 값
    - 만약 `val`의 종류가 레퍼런스(reference)라면,
        - 만약 `val`의 레퍼런스를 참조할 수 없으면 `undefined`를 반환
    - `val` 값을 실제 값 또는 참조하는 값으로 설정
    - 아래 표에 따라 `type(val)`의 문자열 변수형을 반환

    |Type of val | Result |
    |------------|--------|
    | undefined | 'undefined' | 
    | null | 'object' |
    | boolean | 'boolean' |
    | number | 'number' |
    | string | 'string' |
    | symbol | 'symbol' |
    | object([[Call]]을 구현하지 않은 객체) | 'object' |
    | object([[Call]]을 구현한 객체) | 'function' |
    | object([[Call]]을 구현하지 않은 객체 중 비표준) | 브라우저 내 정의에 의존함. 단, 'undefined','boolean','number' , 'function' , 'symbol', 'string' 은 될 수 없음. |

- 자바스크립트에서는 `null`이 기본형으로 구분되어 있지만, `typeof null`의 결과로는 `null`을 반환하지 않고 `object`를 반환한다.

- 이는 자바스크립트를 개발되었을 당시 다른 언어들과 마찬가지로 `null`이면 `0`값을 가진 객체로 취급하여 'object'로 반환하도록 개발했기때문이다.

- `typeof null` 은 `object`를 반환하므로 만약 typeof 결과를 대상으로 별도의 처리를 하고 싶다면 null 을 확인하는 조건도 같이 넣어주는게 좋다.

```js
if(myVariable !== null && typeof myVariable === 'object'){
    // ....
}
// or
if(!!myVariable && typeof myVariable === 'object'){
    // .....
}
```

- 1번 처럼 직접 null 과 비교하는 방법

- 2번은 미리 undefined나 false 같은 조금 더 넓은 범위에서 검증할때 쓴다.