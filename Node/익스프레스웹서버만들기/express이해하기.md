# express app.js 이해하기

- `app.js`를 보면 `app`에 연결된 모듈들이 많다. `express`를 `require` 한 다음 `express`를 호출하면 `app`객체가 생긴다. 

```js
// app.js
const express = require('express');

const app = express();

//http.createServer(app) // app.listen(port) 도 가능하다 하지만 bib/www 에서 처리한느 것이다.

app.get('/', (req,res) => {
    res.send('hello world');
});

app.get('/users' , (req,res) => {
    res.send('hello uesrs');
})

app.post('/',(req,res) => {

})

app.delete('/',(req,res) => {

})

module.exports = app;
```

- `app`객체를 모듈로 만들어서 `module.exports` 하면 된다. 

- `express`로 서버를 만드는 제일 간단한 방법이다.

- 일반 노드 서버에서는 `res.end`를 쓰는데 `express`에서는 `res.send`로 보낸다. `express`에서 리스폰스객체에 `send`라는 메서드를 추가한것이다. 

- 익스프레스가 기본 노드 서버를 확장 , 기능들을 확장한 것이다. 

- 사용자가 입력한 포트가 없으면 기본 포트가 들어간다. `process.env.PORT` 가 사용자가 입력한 포트이다.

- 주소치는것이 `get` 요청이다. `.get('/')`, `.get('/users')`라는 라우터를 만든 것이다.

- `app.js` 가 익스프레스 서버의 중앙통제실이다. 우주선 조종간이라고 생각하면 된다. 핵심엔진이 있는 부분, 이런메서드들로 라우터들을 조립한다고 생각하면 된다. 라우터들을 `app`에 연결 해주면 된다.

