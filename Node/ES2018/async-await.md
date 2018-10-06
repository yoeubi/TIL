# async/await 

```js
Users.findOne('zero');
    .then((user) => {
        console.log(user);
        return Users.update('zero','nero');
    })
    .then( (updateUser) => {
        console.log(updateUser);
        return Users.remove('nero');
    })
    .then( (removeUser) => {
        console.log(removeUser);
    })
    .catch( (err) => {
        console.error(err)
    })
console.log('다 찾았니?') // 프로미스도 보다 먼저 실행이 된다.
```

- `Promise`에서 `then`으로 넘어가면 모든 로직을 `then`에서 해야한다. 

- `Promise`로 순서대로 실행되지 않는건 똑같다. 

- `Generator` `yield` 라는걸 만들어서 순서대로 실행되는것처럼 눈속임하는게 있다.

```js
async func() => {
    try {
    const user = await Users.findOne('zero');
    console.log(user);
    const updateUser = await Users.update('zero','nero');
    console.log(updateUser);
    const removeUser = await Users.remove('nero');
    console.log(removeUser);
    console.log('다 찾았니?')
    } catch (err) {
        console.error(err);
    }
}
func()
```

- `async () => { const 변수 = await 값 }`

- `async/await` 도 `Promise`기반으므르 `Promise`를 먼저 알아야 합니다. 동기식으로 보이기 때문에 코드 순서와 실행 순서가 같아요

- 에러 처리를 위해 `await`로 `try catch` 문으로 감쌉니다. `try {} catch(error) {}`

- await 키워드를 쓸떄는 함수 이름 앞에  async를 붙인다. 

- 누가 에러가 났는지 모른다. 누가 에러가 났는지 중요하지 않으면 마지막에 하고 개별로 처리할라면 개별로 `try catch`를 해야한다. 


