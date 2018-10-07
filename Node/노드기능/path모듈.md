# path 모듈

```js
const path = require('path');
console.log(path.dirname(__filename)) // C:\Users\zerocho\lecture
console.log(path.extname(__filename)) // .js
console.log(path.basename(__filename)) // path.js
console.log(path.parse(__filename))
/*
    {
        root : C:\\,
        dir : C:\\Users\\zerocho\\lecture,
        base : 'path.js',
        ext : '.js',
        name : 'path'
    }
*/
console.log(path.format({
        root : C:\\,
        dir : C:\\Users\\zerocho\\lecture,
        base : 'path.js',
        ext : '.js',
        name : 'path'
    }))
// C:\Users\zerocho\lecture\path.js
console.log(path.normalize('C:\\users////zerocho\\path.js'))
// C:\users\zerocho\path.js
console.log(path.isAbsolute('C:\\'))
// true
console.log(path.relative('C:\\users\\zerocho\\path.js','C:\\'))
// ..\..\..
console.log(__dirname);
// C:\Users\zerocho\lecture 
console.log(path.join(__dirname, '..','..','/users','.','/zerocho'))
// C:\Users\users\zerocho  __dirname 에서 위로 2번 올라가면 C:\Users 거기서 \users 에 들어가서 거기서 \zerocho 폴더로 가는 것이다.
console.log(path.resolve(__dirname, '..','..','/users','.','/zerocho'))
// C:\zerocho 
```

- `path.sep` // 경로 구분자이다. 원도우 경우 `\\` 로 구분한다. 리눅스나 맥이라면 `//`가 나온다.

- `path.sep` window(`\\`) POSIX(`/`) `path.delimiter` window(`;`) POSIX(`:`)

- `path.delimiter` 는 환경변수의 구분자이다 `node npm`을 칠수 있는것은 경로가 환경변수에 존재하기 때문이다. 

- `path.dirname(__filename)` 디렉토리네임

- `path.extname()` 확장자 이름이다

- `path.basename()` 파일명 가져오는것이다.

- `path.parse(__filename)` 구성요소로 나누어서 준다. 

- `path.format()` 파싱한 객체를 다시 합쳐준다. 

- `parse` 와 `format`은 대칭되는 구조라고 생각하면 된다.

- `path.normalize()` 구분자를 잘못친것을 고치서 만들어주는것이다. 

- `path.isAbsolute()` 이경로가 절대경로냐 상대경로냐를 알려준다.

- `./` 현재 폴더 상대 경로 `../` 부모 폴더 상대 경로 `/` 루트 절대경로

- `path.relative()` 경로 두개를 인자넣으면 첫번쨰 인자에서 두번쨰 인자로 가는 상대경로가 나온다. 

- `path.join` 절대 경로 무시하고 합침 `path.resolve` 절대경로 고려하고 합침 루트는 `C:\` (윈도)

- 조각난 경로를 하나로 합쳐준다. 

- `resolve`는 `\` 절대경로로 친다. 절대경로는 `C:\` 부터 시작한다.

- 절대경로로 인식하고 싶으면 `resolve` 상대경로로 인식시키고 싶으면 `join`을 쓴다. 