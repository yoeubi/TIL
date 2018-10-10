# fs 모듈(동기와 비동기)

```js
const fs = require('fs');
fs.readFile('./readme.txt', (err,data) => {
    if(err){
        throw err;
    }
    console.log(data); // 버퍼 형태가 나온다.
    console.log(data.toString()); // 사람이 읽을수 있는 문자열이 나온다.
})
```

- 파일경로는 상대경로, 절대경로도 된다.

- 콜백으로 받는다. `fs`는 프로미스를 10버전에서 부터 지원해준다.

- `data`안에 버퍼가 들어있다. 그걸 사람이 알아들을수 있게 할라면 toString을 해야한다.

```js
const fs = require('fs');
fs.writeFile('./writeme.txt', '글을 써주세요', (err,data) => {
    if(err){
        throw err;
    }
    fs.readFile('./writeme.txt'. (err , data) => {
        if(err){
            throw err;
        }
        console.log(data.toString());
    })
})
```

- 만들고 파일과 위치할 경로를 적는다.  

- 파일을 쓸떄는 내용이 있어야하는데 그게 2번째 인자로 들어간다.

```js
const fs = require('fs');
console.log('시작');
fs.readFile('./readme.txt', (err,data) => {
    if(err){
        throw err;
    }
    console.log('1번',data.toString());
})
fs.readFile('./readme.txt', (err,data) => {
    if(err){
        throw err;
    }
    console.log('2번',data.toString());
})
fs.readFile('./readme.txt', (err,data) => {
    if(err){
        throw err;
    }
    console.log('3번',data.toString());
})
console.log('끝');
```

- `readFile`은 비동기 방식인데 동기 방식도 있다.

- 콜백함수 실행순서는 뒤죽박죽이다.

- 먼저 끝나는 애가 먼저 콘솔에 찍힌다.

```js
const fs = require('fs');
console.log('시작');
fs.readFile('./readme.txt', (err,data) => {
    if(err){
        throw err;
    }
    console.log('1번',data.toString());
    fs.readFile('./readme.txt', (err,data) => {
        if(err){
            throw err;
        }
        console.log('2번',data.toString());
        fs.readFile('./readme.txt', (err,data) => {
            if(err){
                throw err;
            }
            console.log('3번',data.toString());
        })
    })
})
console.log('끝');
```

- 순서대로 하고 싶다면 콜백에 콜백을 하거나 동기메서드로 하면 된다.

```js
const fs = require('fs');
console.log('시작');
let data = fs.readFileSync('./readme.txt')
console.log('1번', data.toString())
data = fs.readFileSync('./readme.txt')
console.log('2번', data.toString())
data = fs.readFileSync('./readme.txt')
console.log('3번', data.toString())
console.log('끝');
```

- `readFileSync`는 콜백 대신에 리턴을 한다.

- fs 메서드들은 뒤에 Sync를 붙이면 동기식으로 작동해요. `fs.writeFile((err,data) => {})` `const data = fs.writeFileSync()`

- 실제로는 비동기를 더 많이쓴다 이유는 블로킹이기때문이다 왜냐하면 파일을 읽는데 시간이 오래 걸린다면 서버가 이거 처리하는라 다른일을 처리할 수 없다.

- `...Sync`를 써도 되는건 데스트탑이거나 딱 한번만 실행되는 것에는 써도 된다.