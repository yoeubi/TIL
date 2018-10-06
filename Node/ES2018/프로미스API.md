# 프로미스 API

```js
const promise = new Promise( (res, rej) => {
    res('성공');
})
const successPromise = Promise.resolve('성공')
    .then();
const failurePromise = Promise.reject('실패')
    .catch();
```

- Promise.resolve(성공 메세지) Promise.reject(실패 메세지)

```js
Promise.all([Users.findOne(), Users.remove() , Users.update() ])
    .then( (result) => {

    })
    .catch( (error) => {

    })
```

- Promise.all 로 여러 프로미스를 동시에 실행 가능합니다. 단, 하나라도 실패하면 catch로 넘어갑니다.

- 단점은 하나라도 실패하면 캐치로 넘어간다.

- Promise는 결과값을 가지고 있지만 then이나 catch를 붙이기 전까지 반환하지 않는 것

- 결과를 가지고 있는 부분이랑 결과를 보여지는 부분이 분리가 되어있다.

```js
Users.findOne('zero', (err, user) => {
    console.log(user)
})
```

- 이코드의 문제점은 바로 결과를 사용하는 부분이 이어져서 나와야 한다. 그래서 중간에 뭐가 들어갈수가 없다.

```js
let zero = Users.findOne('zero');
zero = Users.findOne('nero')
zero.then( (z) => {
    console.log(z);
})

```

- 이미 제로는 값을 가고있다 나중에 쓰고 싶을때 사용 할수 있다. 

- 콜백은 가져오는 부분 이랑 사용하는 부분이 하나로 합쳐져 있다. 프로미스는 다르다. 나누어져 있다. 

- 프로미스는 개발자에게 자유를 더준다. 프로미스만 중간에 바꿔낄 수 있다.