# rest 문법

```js
const array = ['nodejs', {} , 10 , true ];
const [node , obj, ...bool] = array;
bool // [10 ,true]
```

- (...변수)는 rest로 여러 개의 변수를 모아서 배열로 만듭니다.

```js
const m = (x, y) => console.log(x , y);
m(5, 6) // 5 6
m(5,6,7,8,9) // 5 6
const n = (x ,...y) => console.log(x,y)
n(5,6,7,8,9) // 5 [6,7,8,9]
```

```js
function o () {
    console.log(arguments);
}
o(1,2,3,4,5) // [1,2,3,4,5] arguments에 들어간다.
```

- ES2015에서는 더이상 arguments를 사용하지 않는다.

```js
const p = (...rest) => console.log(rest)
p(5,6,7,8,9) // [ 5 , 6 , 7 , 8 , 9 ]
```

- arguments는 유사배열인데 rest는 배열이다. 그래서 배열의 메서드를 쓸수 있어서 rest 방식을 더 선호 한다.

# 객체 참조

```js
const x = { a : 1 , b : 2 }
let y = x;
x.a = 3;
y.a // 3
const z = [1,2,3,4,5];
```

- const는 참조에 대한 상수이다.

- y가 x의 메모리의 위치를 가리키는 것이다. 

- 상수는 값을 바꿀수 없지만 안에 들어있는 값은 바꿀 수 있다.

