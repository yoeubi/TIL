# crypto 양방향 암호화

```js
const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc','열쇠');
let result = cipher.update('zerocho바보','utf8','base64');
result += cipher.final('base64');
console.log('암호',result);

const decipher = crypto.createDecipher('aes-256-cbc','열쇠');
let result2 = decipher.update(result , 'base64','utf8');
result2 += decipher.final('utf8');
console.log('평문',result2)

```

- 더 많은 암호화 알고리즘이 있어요. 구글에 Node.js Crypto 검색! 공식문서에 가능한 종류가 나와 있습니다.

- `createCipher`로 복호화가능한 알고리즘 `aes-256-cbc` 방식이 있다. 

- `열쇠`를 알아야 암호화했다가 복호화 할 수 있다.

- `update`에 비밀번호를 넣는다

- 인코딩은 `utf8`

- 결과는 `base64` 이다. 

- `createDecipher`가 있다. 똑같은 알고리즘 , 똑같은 열쇠를 써야한다.

- createCipher utf-8 평문을 base64 암호문으로 / createDecipher base64 암호문을 utf-8 평문으로 

- 처음에 비밀번호가 `utf8` 문자열인것을 `base64` 암호문으로 바꿔라 이며 `base64`인 암호문을 `utf8`로 바꿔라이다. 

- `final`은 암호화, 복호화를 마무리짓는 것이다.

- 중요한것 열쇠가 노출되어선 안된다. 열쇠가 다르면 에러가 뜬다. 