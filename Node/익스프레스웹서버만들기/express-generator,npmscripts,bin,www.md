# express-generator , npm scripts , bin/www

- express 프레임워크를 쓰면 기능들을 쉽고 깔끔하게 확장할 수 있다.

- 익스프레스만의 폴더 구조 파일들이 있다 그걸 쉽게 만들어주는 패키지가 있다

```
npm i -g express-generator
```

- 그러면 `express` 라는 명령어를 터미널에 쓸 수 있다. 

```
express learn-express --view=pug
```

- learn-express 라는 폴더를 만든다. 

```
cd learn-express
npm i
```

- `npm i`하면 `package.json`에 있는 디펜던시들이 한번에 설치가 된다.

- 패키지소스를 다른 사람에게 전달할때 `node-modules`폴더는 뺴고 전달해야한다. 용량을 많이 차지하기 때문이다.

```
npm start 
```

- `npm start` 하면 서버가 실행이 된다.

- `express`는 기본 포트가 3000으로 설정되어 있다. 라우터도 이미 만들어져있다 users라고 접근하면 response with resoure 라고 뜬다.

- `package.json`에 `scripts`가 npm 사용자정의 명령어들을 적어놓는것이다. 그 안에 `start`가 있다. 그걸 실행하면 `node ./bin/www`라고 뜬다.

- `npm run start` 하면 `start`는 특수한 명령어라서 `run`을 뺼 수 있다. `npm start`만 해도 지울 수 있다.

- 만약 사용자정의 명령어를 추가 할라면 `scripts`안에 `dev` : `./bin/www` 하면 된다. 그리고 `npm run dev` 하면 된다.

- `bin/www`가 익스프레스 핵심파일이다.

- `bin/www 가 서버 실행부입니다. 핵심 로직은 app.js에 들어있어요`

- `bin/www`를 보면 `app`, `http`를 `require`하고 포트도 3000으로 설정하고 `createServer`하고 `server.listen`을 한다.

- 방문의 콜백함수 부분에 `app` 이라고 들어간다 .