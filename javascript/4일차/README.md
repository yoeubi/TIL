# 객체

- 객체는 한꺼번에 여러 값을 담을 수 있는 통(container)과 같은 자료구조이다.

- 이름-값 쌍을 객체의 속성(property)이라고 한다.

- 식별자 규칙에 만족하는 속성 이름을 사용할때는 따옴표를 생략해도 된다.

- 객체 리터럴에서는 이미 정의된 변수의 이름을 그대로 속성의 값으로 사용할 수도 있습니다.


```js
const person = {
    // 왼쪽 : 속성 이름이 될 문자열
    // 오른쪽 : 속성 값이 될 표현식
    name : name,
    age : 19
}
```

- 다른 변수에 저장된 문자열을 그대로 속성의 이름으로 쓰는 것이 가능하다.

```js
const propName = "prop";

const obj = {
    // 아래 두 예제는 왼쪽 부분이 문자열로 간주된다.
    // 그리고 그 문자열이 그대로 속성 이름으로 사용된다.
    prop1 : 1 , // prop1이 속성 이름이 된다.
    'prop2': 2, // prop2가 속성 이름이 된다.
    // 아래 예제는 , 대괄호 내부의 표현식의 결과값이
    // 속성 이름으로 사용된다.
    [propName] : 1  // prop3이 속성 이름이 된다.
    [propName + propName] : 1 // prop3prop3 이 속성 이름이 된다. 
}
```

```js
const obj = {}; // 빈 객체 생성
```

- 점 표기법은 식별자 규칙을 만족하는 것만 가능하다.

- 대괄호 안에 들어갈수 있는 것은 표현식이다.

- 점으로 하면 속성의 이름을 간주가 되면 대괄호로 묶을때는 표현식으로 간주된다.

## 속성 삭제하기 

- `delete person.address` 

- `delete`를 써도 표현식이되고 `true` 가 나온다.

## 속성이 객체에 존재하는지 확인하기

'name' in person // 네임이라는 속성이 있냐 라는 것....

어떤 객체의 속성을 접근해서 사용하는함수를 메소드 라고 한다.

```js
const person = {
    greet() {
        return 'hello'
    },
    bye : function(){
        return 'bye'
    }
}
```

- 메소드 안에서 `this` 키워드를 사용하면 메소드 호출 시에 호출 메소드를 갖고 있는 객체에 접근 할 수 있습니다. 

```js
const person = {
    name : '윤두준',
    age : 19,
    introduce () {
        return `안녕하세요 제 이름은 ${this.name}입니다. 제 나이는 ${this.age}살 입니다.`
    }
    getOlder (){
        this.age++;
    },
    getYounger (){
        this.age--;
    }
}
```

- `new Person()` 하면 객체가 먼저 생성이 되고 this가 객체를 가리킨다.

```js
function Person(name , age){
    this.name = name;
    this.age = age;
    this.getOlder = function () {
        this.age++;
    }
}
// 생성자를 통한 객체 생성
const person1 = new Person('윤아준',0);
person1.getOlder()
console.log(person1)
```

- `instanceof` 연산자를 사용하면 객체가 특정 생성자의 인스턴스가 맞는지  확인 할 수 있습니다.

- 생성자와 일반 함수의 차이는 없다. 

## 프로토타입 

```js
Person.prototype.getOlder = function(){
    this.age++;
}
```

- - -

# 배열

- 객체와 배열의 가장 큰 차이점은 배열의 각 요소간에는 순서가 있다는 점입니다.

## 배열 생성하기

- 배열 리터럴을 통해서 생성하는 것이 제일 쉽습니다.

## array 생성자

- `new Array(1)` 한 칸이 비어있는 배열이 생성이 된다.

- `Array.of(1,2,3)` // [1,2,3]

- `Array.from()` 유사배열 객체와 이터러블 이라는 개념이 있어서 해당 값들을 배열로 쉽게 변환시킨다.

- `push` , `pop` 하면 오른쪽에서 하면 된다.

## 요소를 배열 중간에 삽입하기

- `splice` 를 사용하면 배열에 속해있는 연속된 여러 요소, 즉 배열의 일부분을 통쨰로 바꾼다.

```js
// 인덱스 1 인 요소부터 3개를 바꿔치지 할 것이다.
// splice 메소는 바꿔치기를 통해 제거된 요소들을 반환합니다.
arr.splice(1,3 ,'two' , 'three', 'four');
```

- `reverse` 하면 원본 배열을 뒤집는다.

- `slice`는 원본 배열을 변경하지 않는다.

- `sort` 메소드를 사용할때 비교함수를 넘겨줘야한다.
    - 음수를 반환하면 a 가 b 앞에 오도록 정렬한다
    - 0을 반환하면 a와 b를 같은 순서로 간주합니다.
    - 양수를 반환하면 b가 a 앞에 오도록 정렬합니다.

- 비교함수를 넘기지 않더라도 정렬이 잘 된것 처럼 보이지만 `sort` 메소드는 먼저 요솔르 전부 문자열로 변환한 후 유니코드 코드포인트를 비교하는 방식으로 정렬을 합니다. 

- 사전순 정렬을 하고 싶을땐 `localeCompare` 를 하면 된다. 

## 배열의 길이 늘리기 

```js
arr.length = 10
```

## 배열의 길이 줄이기

```js
arr.length = 2;
```

- 인덱스가 필요없으면 `for of` 문을 쓰면 된다.

- `for of`는 변수는 매번 새로만든다. 그리고 블록 스코프를 가집니다.

- 배열을 복사 하고 싶을때 `slice`를 한다.

- `slice`는 얕은 복사를 한다.

- `filter`는 원본을 변경하지 않는다.

- `join`은 구분자를 넘기지 않으면 `,`가 기본값으로 들어간다.

- `find`는 조건을 만족하는 첫번쨰를 반환한다.

- `findIndex` 는 인덱스를 반환한다.

- includes 2번쨰 인수는 몇번째 부터 찾겠다는 것

