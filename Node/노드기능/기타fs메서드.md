# 기타 fs 메서드

```js
const fs = require('fs');

fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, err => {
    if(err){
        if(err.code === 'ENOENT') {
            console.log('폴더 없음');
            fs.mkdir('./folder', err => {
                if(err){
                    throw err;
                }
                console.log('폴더 만들기 성공');
                fs.open('./folder/file.js', 'w', (err, fd) => {
                    if(err){
                        throw err;
                    }
                    console.log('빈파일 만들기 성공', fd);
                    fs.rename('./folder/file.js', './folder/newfile.js', err => {
                        if(err){
                            throw err;
                        }
                        console.log('이름 바꾸기 성공')
                    })
                })
            })
        } else {
            throw err;
        }
    } else {
        console.log('이미 폴더 있음')
    }
})
```

- `access` 는 폴더나 파일이 있는지 알아보는 메소드 이다.

- fs.access('파일경로', 권한) 권한은 F_OK(존재 여부) , R_OK(읽기 여부) , W_OK(쓰기 여부)

- 폴더에 권한이 없다면 에러가 발생한다. 폴더가 없으면 폴더를 만드는데 없으면 `ENOENT`라고 뜬다.

- `mkdir` 하면 폴더를 만든다. 성공하면 폴더 안에 파일을 `open`하고 없으면 파일을 만드는것이다 옵션으로 `w`하면 없으면 만든다. `r`이면 파일을 읽는다 `a`는 기존파일에 추가해서 쓰는 것이다.

- w 나 r , a 같은 것은 https://nodejs.org/api/fs.html#fs_file_system_flags 에 나와 있어요.

- 빈파일을 만들기 성공하면 만든 파일을 새로운 이름(`rename`)으로 바꾸는것이다.

- 폴더가 있으면 에러가 안뜬다.

- 모든 메서드들은 뒤에 Sync를 붙이면 동기식으로 동작해요.

```js
const fs = require('fs');

fs.readdir('./folder', (err,dir) => {
    if(err){
        throw err;
    }
    console.log('폴더 내용 확인', dir);
    fs.unlink('./folder/newFile.js',err => {
        if(err){
            throw err;
        }
        console.log('파일 삭제 성공');
        fs.rmdir('./folder', err => {
            if(err){
                throw err;
            }
            console.log('폴더 삭제 성공')
        })
    })
})
```

- `readdir`은 폴더 읽을 수 있는지 물어보고 폴더 내용들이 콜백함수 인자로 나온다. 내용을 확인하고 `unlink`가 파일 지우는 것이다. 파일 삭제되면 `rmdir`해서 폴더를 지운다.

- 단점이라고는 콜백헬이다. `fs`에 `promise`가 추가가 됬다. 

```js
const fs = require('fs').promises;
fs.access()
    .then()
    .catch()
```

- `fs promise`는 노드10에서만 사용이 가능하다.