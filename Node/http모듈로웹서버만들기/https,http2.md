# Https , http2

```js
const http = require('http');
const https = require('https');
const http2 = require('http2');

http.createServer((req,res) => {
    res.end('http server')
}).listen(80);

// lets encrypt 무료 인증서를 발급받았다고 칩시다.
// http2.createSecureServer({
https.createSecureServer({
    cert : fs.readFileSync('도메인 인증서 경로'),
    key : fs.readFileSync('도메인 비밀키 경로'),
    ca : [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ]
},(req,res) => {
    res.end('https server')
}).listen(443);

```

- 요즘은 https를 써서 서버를 만든다 기본적으로 암호화가 되어 있다. 

- http 기본 포트는 80 https 는 443 이다.

- 기본 http 서버가 있다면 https라는 모듈이 있다. https 는 인증서가 필요하다 누군가가 암호화가 제대로 되는 기관의 인증서가 필요하다

- 무료중에서 유명한게 letsencrypt 가 있다.

- 옵션으로 넣어줘야 한다. https는 인증서를 첫번째 인자에 넣는다. 

- http2버전도 있다. 그 버전 속도에 이점이 있다 그걸 사용하고 싶다면 http2로 바꾸면 된다. 

- `http2는 https 기반으로 동작하므로 인증서가 필요합니다. 익스프로세스랑 호환 문제가 있습니다.(spdy를 대신 사용)`

- http2는 https 기반으로 이라서 인증서가 필요하다.