# Node.js + HTTP
- `http`: 통신 규약 이름 
- 2주 동안 통신을 배우면서의 목표는 쇼핑몰 만들기 프로젝트이다.
- 쇼핑몰 만들기 프로젝트에서는 요청을 보낼 수 있는 서버를 강사님이 만들어줄 것임
- 쇼핑몰 프로젝트에서는 강사님이 백엔드 개발자 역할을 해줄 것임


---
# 처음 만나는 Node.js
## `REST API` 실습
- `POSTMAN` 설치
- 서버와 통신을 할 때는 주로 `JASON 형식`으로 주고 받는다.
- `REST API`: 통신 규약에 관한 용어
- `Authentication`: 통신을 할 때 내가 누군지를 밝히는 절차 (인증)
    - 내가 누군지를 밝혀야 나에 관한 자료를 받을 수 있다.
- `token`: 내가 누구인지 증명하는 보안카드, 주민등록증 같은 것
- token 생성하기
- github.com-> 프로필의 settings -> developer settings -> personal access tokens -> generate new token 버튼 클릭 -> Token description에 설명을 적음. 아래에 체크박스에는 아무 것도 체크 누르지 말 것.(아무 권한도 없는 식별 코드를 생성) -> 각기 다른 token이 생성됨 -> ex) 607d493859c0ddb1cc8e1da472fc49fd66a12724

- `OAUth2 token(sent as a parameter)` 방식
    - POSTMAN에 `https://api.github.com/user/repos/?access_token=OAUTH-TOKEN[발급받은 토큰]` 넣기 -> `send 버튼` 누르기-

- `OAuth2 token (sent in a header)` 방식
    - 개발자들이 주로 사용하는 방식
    POSTMAN의 Headers를 누르고 KEY에 Authorization 입력
    VALUE에 token, 2번째 칸에  발급받은 토큰 입력
    reqeust URL에 `https://api.github.com/user/repos` 입력
---
## Nods.js 
- git bash에서 `node`를 입력 -> javascript 코드를 입력할 수 있다.
- `.exit`를 입력하거나 `Ctrl+C`를 두 번 입력해서 빠져나갈 수 있다.
- alert, prompt는 브라우저 내장 기능이기 때문에 node.js에는 없다.
- 대신, 브라우저에 내장되지 않은 기능들이 많이 있다.
- `nods.js`는 브라우저와 **완전히 다른 구동 환경**이라는 것을 기억!
- `module`: 내장 함수를 가지고 있는 객체
> Node.js module 사용하기
```js
// git bash에 입력
 node

const os = require('os')
// undefined
os.platform()
//'win32'
os.freemem()
//2084761600
```
```js
// git bash에서 
// 홈 폴더로 이동
`cd`
// test.js 만들기
`code test.js`
// test.js 파일에  console.log('hello')를 입력하기
//ls 입력
// test.js가 홈폴더에 만들어진 것을 확인
`ls`
// git bash에서 홈폴더 위치에서  `node (파일 경로)` 
// test.js 자바스크립트 코드를 실행
`node test.js`
// test.js 파일에 쓰여있는 코드인 
// hello가 출력됨

```

###  Node.js란?
- 아주 빠른 속도로 요청을 처리할 수 있는 기능을 내장하고 있다.
- Nods.js는 2009년에 만들어짐. 현재는 프론트엔드 개발도 node.js로 하게 되었다.
-  세계에서 가장 많은 오픈 소스 라이브러리를 가지고 있다. 


### Node.js Module의 사용법
```js
// git bash에 입력
`code name.js`


```
```js
 // name.js에 아래의 코드 붙여넣기 -> 저장
// `module.exports`에 저장한 값은 다른 모듈에서 불러올 수 있음
module.exports = {
  familyName: '김',
  givenName: '승하',
  fullName: function() {
    return this.familyName + this.givenName
  }
}
```
```js
// git bash에 입력
`code calc.js`
```
```js
// calc.js에 아래의 코드 붙여넣기 -> 저장
// `exports`로도 참조 가능
exports.add = (x, y) => x + y
exports.sub = (x, y) => x - y

// 파일을 만들고 다른 곳에서 불러서 쓸 수 있다.
// 'require 함수를 이용해서 다른 곳에 있는 코드를 불러올 수 있구나.' 정도를 알고 넘어가면 된다
```
```js
`node`
> `const name = require('./name')`
// undefined
> `name.fullName()`
//  '김승하'
> `const calc = require('./calc')`
// undefined
> calc
// { add: [Function], sub: [Function] }
> `calc.add(1, 2)`
// 3
> `calc.sub(1, 2)`
// -1
```


### Hello NPM
```js
// git bash에 입력
`mkdir hello-npm`
`cd hello-npm`

// npm으로 관리되는 프로젝트를 초기화하겠다.
`npm init -y`
// code .으로 파일을 열어보면, json파일이 생성된 것을 볼 수 있다.
`code .`
```
### pakage.json
```js
- `npm install --save` 
- `npm install sweetalert`
// 홈 폴더에서 node_modules 지우기
- `rm -rf node_modules`
// 전에 설치했던 라이브러리들이 다시 다 설치됨
- `npm install`
```
- 다른 사람과 협업할 때, `node_modules 폴더`는 파일이 너무 많기 떄문에 git에 올리지 않고,
- `package-lock.json`, `package.json`을 git에 올린다.
- `.gitignore`에 `modules/`를 추가
- https://www.npmjs.com/에 접속 -> `randomstring`을 검색


### npm 라이브러리를 사용하는 이유
- `bower`
    - https://bower.io/
    - `npm`과 비슷한 프론트엔드 도구. 클라우드 저장소
    - 현재 `bower`는 거의 사용하지 않는다. 
- 빌드 도구(ex) webpack 등)가 `npm`을 기반으로 만들어졌다.
- `npm`에서 빌드 도구를 다운 받는다.(ex) webpack 등이 node.js에서 작동하기 때문에)
- `bower`와 `npm`에서 각각 다운 받아야 하는 불편함이 있어서, 요즘은 npm에서 거의 대부분의 라이브러리를 다운 받는 게 문화이다.
-  `npm install`으로 한 번에 다운 받으면 설치된다.
- 거의 모든 (심지어 CSS코드까지) 라이브러리를 받을 수 있다.  ex) css reset, jQuery 등 프론트엔드 라이브러리도 `npm`에서 다운받을 수 있다.

---
## HTTP
### HTTP 까보기
- 새로고침을 1번 해도 요청은 **여러 번** 일어날 수 있다.
- `HTTP(HyperText Transfer Protocol)`
- HTTP의 원래의 목적: 웹 브라우저와 웹 서버 간의 통신을 위해 개발된 통신규약
- 최근에는 REST API의 부상과 함께 다른 용도로도 널리 사용됨
    - 모바일 앱 - 서버 간 통신
    - 서버 - 서버 간 통신
- `localhost:8080`
    - `localhost`: 컴퓨터의 이름
    - 컴퓨터 하나에 통신을 위한 수많은 콘센트가 있다고 생각하면 된다. 그 콘센트에 번호를 매긴 것이라고 생각하면 이해하기 쉽다. 

    ex) interpark.com:**80**/malls/index.html
    :80포트가 생략된 것이다. :80을 붙여서 주소를 입력해도 잘 작동한다.
    - `http`를 사용하면 `80번 포트`가 기본으로 사용된다.
- 클라이언트의 `요청(request)`과 서버의 `응답(response)`으로 이루어짐
- 역사: 지금 사용되고 있는 버전은 1999년에 발표한 `HTTP 1.1`이다.

#### HTTPS
- HTTP over SSL
- **HTTP 통신을 암호화해 주고받는 내용을 중간에서 가로챌 수 없도록 함**
    - 같은 공유기를 사용하는 다른 사용자가 `HTTP` 사이트에 접속했을 때, 어떤 사이트에 무슨 내용으로 접속했는지를 볼 수 있다. 
    - (공유기를 해킹한 해커도 그 공유기 사이로 흘러다니는 내용을 다 볼 수 있다. -> `HTTP` 사이트에 아이디와 비밀번호를 넣어서 접속했을 때 해킹 당할 수 있다.)
    - `HTTPS`를 사용했을 때는 해커가 알아볼 수 없는 **암호화된 형태**로 정보가 흘러다니기 때문에 해킹할 수 없다.
- `https`를 사용했을 때는 **443번 포트**를 기본적으로 사용한다.


#### HTTP/2
- **구글의 SPDY 프로토콜**을 기반으로 2015년에 확정된 새로운 HTTP 표준
- **속도 개선**에 중점을 두고 개발됨
- **반드시 HTTPS를 사용해야 함**
- 현재 전체 웹사이트 중 26% 이상이 사용중
- HTTP 1.1에 비해 보안이 강화되고 속도도 빨라짐
- HTTP/2로 바뀌는 추세

### HTTP 구성요소
#### Request & Response
- 웹 브라우저(또는 다른 클라이언트)는 웹 서버에 `요청(request)`를 보냄
- 그에 따라 서버는 클라이언트에 `응답(response)`를 보냄
- 웹 브라우저의 경우, **HTML 문서 형태의 응답**이 오면 해당 문서를 분석한 후,  
- [중요!!] **문서에 포함된 모든 자원에 대한 요청을 각각 추가로 보냄** (이미지, 동영상, 오디오, CSS, JS, 폰트, ...)


#### Request Methods
- **요청**에만 메소드가 있다. (응답에는 메소드가 X)
- HTTP 명세에는 8 종류가 등록되어 있고, 각각의 역할과 충족해야 하는 성질이 명시되어 있음
    - `GET`
        - `GET` 메소드는 특정 리소스의 표시를 요청한다.. `GET`을 사용하는 요청은 오직 데이터를 받기만 한다.
        - `GET` 메소드는 정보를 달라는 것
    - `POST`: 서버에 등록하는 게 아니라, 정보를 받아올 때는 `POST` 메소드를 사용
        - 웹 브라우저는 **특정 상황에서 특정 메소드로 요청을 보내도록 만들어져 있음.** 제출할 때 사용.
        - `POST` 메소드는 특정 리소스에 엔티티를 제출할 때 쓰임. 이는 종종 서버의 상태의 변화나 부작용을 일으킨다. 
    - `PUT`: PUT 메소드는 목적 리소스 모든 현재 표시를 요청 payload로 바꾼다.

- Ajax와 같이 **요청을 보내는 코드를 직접 짤 때**는 요청 메소드를 선택할 수 있음
- **자료의 본문을 요청하는 `GET` 메소드**와, **새로운 자료를 등록하는 `POST` 메소드**가 가장 많이 쓰임


#### URL
- **url이 반드시 웹사이트에 대한 주소가 아닐 수 있다.**
- 특정 자원을 가리키기 위해서 `url`을 사용할 수 있다.
```js
<a href="mailto:seungha.me@gmail.com">메일</a>
// 메일 주소에 대한 링크를 만들 때 사용
<a href="tel:01012345678">전화걸기</a>
```
- `https://www.example.com:3000/path/resource?id=123#section-id`
- `https://www.example.com:3000`까지는 `서버 주소`
    - 그림이 잘못되어있음. 3000 뒤의 /는 경로에 포함됨.
- `/path/resource?id=123#section-id`
    - /부터 그 뒤까지는 `자원의 주소`
- 7번: 어떤 자원을 가져오고 싶은지, 부가정보를 포함시킬 때 querystring을 사용한다.
- 8번: #section-id : 문서의 특정 부분을 가리킬 때
- `#(해시)`를 기억할 것!

- ex) https://www.google.com/search?source=hp&ei=PaDWW7T7EImz8QWZ8ZKoCg&q=http&oq=http&gs_l=psy-ab.3..0i131k1l5j0j0i131k1j0i3k1j0l2.989.1350.0.1568.4.3.0.1.1.0.138.248.0j2.2.0....0...1c.1.64.psy-ab..1.3.255....0._7JtWYsiHlc
---

[해시태그(#)](https://s.codepen.io/dbeat999/debug/pxBJNO/yoAZEWKOwOZr)
-  챕터1: https://s.codepen.io/dbeat999/debug/pxBJNO/yoAZEWKOwOZr#chapter-1
-  챕터2: https://s.codepen.io/dbeat999/debug/pxBJNO/yoAZEWKOwOZr#chapter-2
-  url에서 해시태그(#) 뒷 부분이 바뀐다.
> 아무 의미없는 긴 문자열을 html에 넣고 테스트하고 싶을 때,
> lorem*50 넣어주기. `lorem`은  표준 채우기 텍스트



#### Percent Encoding
- 주소 표시줄
- https://www.google.co.kr/search?q=%ED%95%9C%EA%B5%AD&oq=%ED%95%9C%EA%B5%AD&aqs=chrome..69i57j69i61l2j69i65l2j69i59.2351j0j7&sourceid=chrome&ie=UTF-8

- 크롬 개발자 도구 -> Network-> Name: search?..로 된 파일을 누르기 -> Reqeust URL
- https://www.google.co.kr/search?q=%ED%95%9C%EA%B5%AD&oq=%ED%95%9C%EA%B5%AD&aqs=chrome..69i57j69i61l2j69i65l2j69i59.2351j0j7&sourceid=chrome&ie=UTF-8


#### Response Status
#### Status Category
- 2xx: 성공
- 3xx: 추가 작업이 필요함
- 4xx: 실패 - 클라이언트 책임
- 5xx: 실패 - 서버 책임
---
##### Status Code - 2xx
- 200 OK: 성공
- 201 Created: 자료가 성공적으로 생성됨
---
##### Status Code - 3xx 
   
`301 Moved Permanently (Redirection)`
- **자료가 완전히 다른 곳으로 이동했음**
- 서버가 여기에 없고 완전히 이동했다고 서버가 브라우저에 응답을 줌.


`302 Found (Redirection)`
- **자료가 일시적으로 다른 곳에 있음**
- 302는 일시적으로 이동했다는 뜻이기 때문에 서버가 다른 곳으로 이동하라고 해도 다시 사용자에게 요청을 함.


`304 Not Modified (Cache)`
- **클라이언트가 이미 가지고 있던 자료가 수정되지 않았음 (그대로 사용하면 됨)**
- 어떤 웹사이트들은 다운 받았던 이미지를 그대로 사용하는 경우가 있음. -> `캐시(Cache)`라고 한다. 

- 이미지별로 `식별번호`가 있어서 서버가 브라우저로 `이미지`와 `식별번호`를 보내게 된다.
- ex) 똑같은 주소에 이미지를 요청한다. -> 식별번호와 이미지를 브라우저가 가지고 있음. -> 브라우저가 서버에 내가 이 식별번호와 이미지를 가지고 있는데, 바뀐 사항이 있는지 물어봄. -> '브라우저 네가 가지고 있는 그대로 사용하면 돼~' 라고 알려주는 게 `304 Not Modified`임.
- cf) Network에 Preserve log에 체크표시하면, 그 전 기록도 남게 됨. 
---
##### Status Code - 4xx
- 클라이언트의 책임이다.
- `400 Bad Request`
    - 요청의 형태가 잘못되어 응답할 수 없음
- `403 Forbidden`
    - 요청한 자료에 접근할 권한이 없음
- `404 Not Found`
    - 요청한 자료가 없음



---
##### Status Code - 5xx
- 서버의 책임이다. 
- `500 Internal Server Error`
    - 요청을 처리하던 중에 예상치 못한 오류가 발생함
- `503 Service Unavailable`
    -서버가 일시적으로 응답을 할 수 없음
---
#### Header
- `요청`과 `응답`에 대한 `추가 정보`를 표현하는 데 사용됨
- 인증, 캐싱, 쿠키, 보안, 프록시 등 웹 표준에 정의된 많은 **기능을 제어**하는 데  사용됨
- `Authorization`:  요청의 인증 정보
`- User-Agent`: **요청 중인 클라이언트의 정보**
- `Location`:  **301, 302 응답에서 자료의 위치**
- `Accept`: 요청이 어떤 형태의 자료를 원하는지 나타냄
- `Content-Type`: 요청 혹은 응답이 어떤 형태의 자료인지 나타냄

### Express

- `Glitch Tutorial` 버튼을 클릭 -> github 계정으로 가입
- 설치 후, 교재의 Glitch Tutorial 버튼을 다시 클릭해서 들어오기
- 오른쪽 상단의 Remix This 버튼을 누르면, fork 됨
- Glitch는 서버를 만드는 도구
- 우리가 작성한 서버를 클라우드에 띄운 다음 주소를 붙여주는 기능을 제공한다.
- 좌측 바의 package.json을 클릭 -> add Package를 클릭 -> express를 검색해서 설치

```js
// git bash에 입력 
~/hello-npm
// $ FOO=BAR node
> process.env.FOO
// 'BAR'
// 
```
---
#### Glitch 튜토리얼
- 우측 상단의 Sign in 버튼을 눌러 Github 계정으로 로그인 해 주세요.
- Remix this 버튼을 눌러 프로젝트를 복제하세요.
- 현재 express가 설치되지 않아서 프로젝트가 실행되지 않는 상태입니다. 좌측 파일 목록에서 package.json을 클릭한 후, 문서 상단의 Add package 버튼을 클릭해 express를 설치해주세요.
- Glitch는 코드가 수정될 때마다 자동으로 npm start 명령을 실행합니다. package.json에서 어떤 명령이 실행되는지 확인하고, 해당 파일을 확인한 다음, 상단 Show 버튼을 눌러주세요. Glitch 앱은 기본적으로 HTTPS로 작동합니다.
- server.js에서 NAME이라는 환경변수를 불러와 표시해주고 있습니다. 환경변수는 .env 파일에서 설정할 수 있으며, 이 파일의 내용은 소유자와 공동작업자밖에 볼 수 없습니다. 외부에 노출하면 안 되는 설정사항을 저장하기에 적합합니다. .env에서 NAME 환경변수를 자신의 이름으로 수정하고, 앱이 잘 업데이트 되었는지 확인하세요.
- 좌측 최상단의 프로젝트 이름을 클릭하면, 프로젝트와 관련된 여러가지 설정을 할 수 있습니다. 프로젝트 이름을 수정해주세요. 그에 따라 앱의 url도 변경됩니다.
- 우측 최상단의 아이콘을 클릭하고 Keyboard Shortcuts를 확인해보세요.
---
- Glitch를 사용하면 환경 변수 설정, 코드 작성 후-> 서버에서 어떤 응답을 해주는 지 볼 수 있다.
- 1주일 간, Glitch를 이용해서 서버 코드를 작성할 예정 
- Node.js 생태계에서 가장 널리 쓰이는 웹 프레임워크
- 내장하고 있는 기능은 매우 적으나, 미들웨어를 주입하는 방식으로 기능을 확장하는 생태계를 가지고 있음



---
- 자바스크립트 교재- JAVASCRIPT 심화2
# Iterable
- 반복 가능한 객체(iterable object)는 `for...of` 구문과 함께 ES2015에서 도입됨.
- 반복 가능한 객체를 다른 객체와 구분짓는 특징은, 객체의 `Symbol.iterator` 속성에 **특별한 형태의 함수**가 들어있다는 것이다.

```js
const str = 'hello';
str[Symbol.iterator]; // [Function]
```
- `Symbol`은 객체의 속성 key로 사용할 수 있는 원시타입의 값
- `for...of` 구문은 `iterable`에 대해서 사용하는 함수이다.
- 내장된 생성자 중 `iterable` 객체를 만들어내는 생성자에는 아래와 같은 것들이 있다.
    - String
    - Array
    - TypedArray
    - Map 
    - Set

## Iterable의 사용
-  객체가 `Iterable`이라면, 그 객체에 대해서 아래의 기능들을 사용할 수 있다.
    - for...of 루프
    - spread 연산자 (...)
    - 분해대입(destructuring assignment)
    - 기타 iterable을 인수로 받는 함수
```js
// `for...of`
for (let c of 'hello') {
  console.log(c);
}

// spread 연산자
const chars = [...'hello'];
// const chars = 'hello'.split('')으로도 가능함

console.log(chars);

// 분해대입
// 배열처럼 분해대입이 가능하다.
const [c1, c2] = 'hello';
console.log(c1, c2);
// h e
// `Array.from`은 iterable 혹은 array-like 객체를 인수로 받습니다.
Array.from('hello');



const s = new Set([1, 2, 3]);
const [c1, c2] = s;
console.log(c1, c2); // 1 2
```


## Generator 함수
- `Iterable`을 구현하는 가장 쉬운 방법은 ES2015에 도입된 `generator 함수`를 사용하는 것이다.
- `Gererator` 함수는 만드는 개발자가 반환값을 만들지 않아도 객체를 반환한다.
- `Generator` 함수를 호출하면, 무조건 객체를 반환한다.
- `Generator` 함수를 호출하면 객체가 생성되는데, 이 객체는 iterable protocol을 만족한다. -> 즉, `Symbol.iterator` 속성을 갖고 있다.
- `Generator` 함수를 실행하면, `iterable` 객체를 만들 수 있다.
- `Generator` 함수는 **일시정지**가 가능하다.
- 실무에서는 보통 루프 사용할 때는 거의 사용하지 않고, **일시정지 기능을 사용하고 싶을 때 많이 활용한다.**
```js
// generator 함수 선언하기
function* gen1() {
  // ...
}

// 표현식으로 사용하기
const gen2 = function* () {
  // ...
}

// 메소드 문법으로 사용하기
const obj = {
  * gen3() {
    // ...
  }
}
```
- `Generator` 함수 안에서는 `yield`라는 특별한 키워드를 사용할 수 있다.
-  `Generator` 함수 안에서 `yield` 키워드는 `return`과 유사한 역할을 하며, `iterable`의 기능을 사용할 때 `yield` 키워드 뒤에 있는 값들을 순서대로 넘겨준다.
- yeild(양보하다)
- yield는 바깥으로 함수 **여러 번 값을 반환**한다.(cf) return은 1번만 반환함. )
```js
// yield 뒤에 붙어있는 숫자를 차례대로 반환한다.
function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}

// 1, 2, 3이 순서대로 출력됩니다.
// 첫 번째 실행시: 1이 들어감
// 두 번째 실행시: 2가 들어감
// 세 번째 실행시: 3이 들어감
for (let n of numberGen()) {
  console.log(n);
}
// 1
// 2
// 3 
```

- yield* 표현식을 사용하면, 다른 generator 함수에서 넘겨준 값을 대신 넘겨줄 수도 있다.
```js
function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}

function* numberGen2() {
  yield* numberGen();
  yield* numberGen();
}

// 1, 2, 3, 1, 2, 3이 순서대로 출력됩니다.
for (let n of numberGen2()) {
  console.log(n);
}

// 1
// 2
// 3
// 1
// 2
// 3
```

- 사용자가 루프를 돌리고 싶을 때, 함수를 만들어서 루프를 돌릴 수 있다.
```js
// 등차수열 생성하기
// start=0 , end= Infinity는 매개변수의 기본값(인자가 들어오지 않으면, 기본값으로 사용)
// start= 0, end= 5, step=1로 실행됨
function* range(start = 0, end = Infinity, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

// for (const item of range(0, 5)) {
//   console.log(item);
// }
// 0
// 1
// 2
// 3
// 4

// 피보나치 수열 생성하기
function* fibonacci(count = Infinity) {
  let x = 1;
  let y = 1;
  for (let i = 0; i < count; i++) {
    yield x;
    [x, y] = [y, x + y];
  }
}

for (const item of fibonacci(10)) {
  console.log(item);
}
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55

```

- 배열과의 차이점: Generator 함수는 순서대로 무한히 값을 반환해주는 무한 배열을 만들 수 있다. 
- 루프를 값으로 다룰 수 있게 된다.
- `Generator`로 루프를 값으로 만들면, **조합을 하기 쉬워지고 변경을 하기 자유로워진다.**


- Generator 함수를 사용할 때 주의할 점
```js
// Generator 함수로부터 생성된 iterable은 한 번만 사용될 수 있다.
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const iter = gen();


for (let n of iter) {
  // 잘 출력됩니다.
  console.log(n);
}
//Generate 함수는 1번만 순회가 가능하므로 이 코드는 무시됨. 
for (let n of iter) {
  // `iter`는 한 번 사용되었으므로, 이 코드는 실행되지 않습니다.
  console.log(n);
}
```


```js
// Generator 함수 내부에서 정의된 일반 함수에서는 `yield` 키워드를 사용할 수 없다.
function* gen2() {
  // 아예 문법 오류가 난다. (Unexpected token)
  function fakeGen() {
    yield 1;
    yield 2;
    yield 3;
  }
  fakeGen();
}
```
- Generate 함수의 특징
    - 값을 **여러 번** 뱉어낼 수 있는 함수
    - 일반 함수와는 다르게 **일시정지**가 가능한 함수

```js
//  Generate로부터 만들어진 함수는 next라는 메소드가 들어있고, 
// 이 next 메소드를 이용해서 함수를 일시정지 할 수 있다. 
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const iterable = gen();

//  다음 yield를 만날 때까지 함수가 실행됨
// value는 yield뒤에 붙어있는 숫자
// done은 함수가 끝까지 실행되면 ture가 나옴.
iterable.next(); // { value: 1, done: false }
iterable.next(); // { value: 2, done: false }
iterable.next();// { value: 3, done: false }
iterable.next(); // { value: undefined, done: true }

```