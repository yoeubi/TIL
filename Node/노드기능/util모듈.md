# util 모듈

```js
const util = require('util');
const crypto = require('crypto');

const dontuseme = util.deprecate((x,y) => {
    console.log(x + y )
}, '이 함수는 2018년 12월 부로 지원하지 않습니다.')

dontuseme(1,2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
const pbkdf2Promise = util.promisify(crypto.pbkdf2);
util.callbackify

crypto.randomBytes(64 , (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt',salt);
    crypto.pbkdf2('zerocho바보',salt, 651234, 64 , 'sha512', (err, buf) => {
        console.log('password', key.toString('base64'));
    })
})

randomBytesPromise(64)
    .then((buf) => {
        const salt = buf.toString('base64');
        return pbkdf2Promise('zerocho바보', salt , 64123,64,'sha512');
    })
    .then((key) => {
        console.log('암호화',key)
    })
    .catch((err) => {
        console.error(err);
    })

async (() => {
    const buf = await randomBytesPromise(64);
    const salt = buf.toString('base64');
    const key = await pbkdf2Promise('zerocho바보', salt , 623423, 64, 'sha512');
    console.log('passwoard', key.toString('base64'))
})
```

- deprecated는 지원이 조만간 중단될 메서드임을 알려줄때 사용합니다.

- 어떤 서비스가 이 함수를 지원한다. 버전업이 되면서 이 함수를 더이상 지원 못하거나 제거할때 사용한다. 바로 제거하면 쓰고있는 사람들의 서비스가 고장이 날수 있다.

- 서비스중단을 할때는 deprecate 기간을 가진다. deprecate 기간을 표시해주는 것이다.

- 함수를 쓰면 결과는 실행이 되지만 deprecate 워닝메세지가 뜬다. 메세지도 넣을 수 있다.

- api 아니면 잘 안쓴다. 

- promise를 지원하지 않는 (err, data) => {} 꼴의 콜백을 util.promisify로 프로미스로 만들 수 있어요.

- 문제는 콜백 방식이다. 그래서 콜백이 2개중첩되어 있다. 노드는 `promise`를 권장한다. 

- 그래서 콜백을 `promise`로 바꿔저야 `async`로 바꿀수 있다.. 

- 마음대로 `promise`로 바꿀수 있는게 아니다. 메서드가 `promise`를 지원해야지 쓸수 있다.

- `promisify`를 함수로 감싸준다. `pbkdf2`도 지원안하는데 바꿀 수 있다.

- 콜백이 `promise`로 바꾸는 것이다.

- `promise`로 바꾸면 `async`를 사용할 수 있다. 

- `callbackify`하면 `promise`를 콜백함수로 바꿔주는 것이다.