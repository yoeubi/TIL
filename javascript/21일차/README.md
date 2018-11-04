# Cookie 

- 서버에 아이디, 패스워드를 넘기면 token이라는 응답으로 받을 수 있다.

- token을 브라우저에 저장하고 요청할때마다 보내면 로그인이라는 개념이 된다. 

- 로그인방식은 Cookie방식, token방식이 있다. Cookie와 다르게 token은 클라이언트 개발자가 직접 저장하고 관리해야한다.

- token은 주로 localstorage에 저장이 된다. 새로고침이나 브라우저를 껐다 켜도 저장이 되어있다.

- `jwt`는 token 생성하는 방법중 하나 이다.

# Postman

- 로그인 경로에 사용자 이름, 암호를 넘겨주면 응답에 token이 들어있다. 그것을 가지고 다시 요청을 보내면 로그인이 된 것이다.

- 로그인할때 키 : `Authorization` 값 : `Bearear [token]` 을 담아 보내면 로그인이 된 것이다.

- 하지만 헤더에 매번 동일한 token을 보내야한다. 그래서 axios에서는 token이 포함된 인스턴스를 만들 수 있다. 

- jwt는 token 종류 중 하나이며 서버마다 token 포함시키는 형식이 다를 수 있다.

## token의 유효시간

- token을 abc라고 만들면 그 시간을 서버에 기록을 하고 요청이 올때 유효기간을 확인한다.

# Promise

- `Promise`는 결과값이 나중에 채워지는 통이다. 통이 채워졌을때 하고 싶을 일을 `then` 메서드로 콜백을 넘겨준다.

- `resolve`를 실행시키면 통안에 값이 채워진다.

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("2초가 지났습니다");
    resolve("hello");
  }, 2000);
});

p.then(msg => {
    console.log(msg);
    
})
```

- Promise가 생성이 될때 그 안의 코드가 실행이 되며 값은 채워져 있지 않는다.

- 값이 채워졌을때 then메서드가 실행이 된다. then의 반환값도 Promise객체이다.

```js
function delay(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => {
      // console.log(`${ms} 밀리초가 지났습니다.`);
      resolve(value);
    }, ms);
  });
}

delay(1000,'hello')
  .then(str => {
    console.log(str);
    return delay(2000 , str + ' world')
  })
  .then(str => {
    console.log(str);
  })

setTimeout(() => {
    let str = 'hello';
    setTimeout(() => {
        let str2 = str + ' world';
        console.log(str2);
    },2000)
},1000)
```

- `Promise.all`은 Promise 배열을 받는다. 값이 채워진 Promise 배열을 반환한다.

## async , await

- 함수 앞에 async를 붙이면 비동기 함수가 된다. 비동기 함수는 항상 promise 객체를 반환한다.

- Promise의 결과값은 비동기 함수 안에서 무엇을 반환하느냐에 따라서 결정 된다. Promise가 아닌 값을 반환하면 그 값이 들어가고 Promise를 반환하면 해당 Promise가 반환하는 값이 들어간다.

- await 키워드 뒤에 오는 Promise가 결과값을 가질때까지 비동기 함수의 실행을 중단시킵니다. 중단 역시 또한 비동기식이다. 

- await는 연산자이다 await의 연산의 결과값은 뒤에 오는 프로미스 객체의 결과값이된다.

- await는 2가지를 한다. 1. 프로미스가 값이 채워질때까지 기다리고 2. 프라미스의 결과값을 반환한다.

# eslint 끄는법

컨트롤 쉼표 하면 eslint Eslint : Enable 체크 해제 하기

## json server

json 파일로 부터 서버를 생성해주는 것이다.

json-server는 npm 으로 설치해서 사용한다. 로그인 기능은 없다.

# 상태 저장소

- 상태 저장소를 여러개를 두면 상태 불일치가 생길 수 있다.

- 항상 다시 화면을 그리는게 좋다. 상태를 한군데만 만들고 그 저장소를 믿는게 버그를 줄 일 수 있다.

- 실시간 웹 을 구현하기 위해서 구현할수 있는 기술이 웹소켓이다.