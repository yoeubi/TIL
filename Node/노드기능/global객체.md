# global 객체

- 노드에서 `window` 하면 `window`를 사용할수 없다. 

- 노드의 전역 객체는 `global` , 최신 브라우저에서는 `global`이 반영이 되어있다.

- `window`는 생략이 가능하다. 전역객체라서 마찬가지로 `global`도 생략이 가능하다.

- 전역객체란 어디서든 접근가능한것을 말한다.

```js
// globalA.js
module.exports = () => global.message;
// globalB.js
const A = require('./global');

global.message = '안녕하세요';
console.log(A());
```

- 전역 객체이기 때문에 파일 간 `global`이 공유됩니다.

- `global`은 `require` 안해도 된다. 전역객체라서 모든 파일이 공유한다.

- `global`은 누구나 접근 할수 있어서 값을 바꿀수도 있어서 `global`에 대입하는 것은 안하는게 좋다.
