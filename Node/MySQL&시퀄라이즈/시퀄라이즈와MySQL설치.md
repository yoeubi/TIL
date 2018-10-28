# 시퀄라이즈(sequelize)와 MySQL 설치

```
C reate 생성
R ead 조회
U pdate 수정
D elete 삭제
```

- Sequeliz는 데이터베이스를 자바스크립트로 대체할수 있는 ORM이다.

```
express learn-sequelize --views=pug
cd learn-squelize
npm i
```

- 익스프레스 제너레이터가 익스프레스 구조를 만들어 준다. 요청이 들어와서 미들웨어를 타고 응답으로 나가는 구조이다.

```
npm i sequelize mysql2
```

- Sequelize를 먼저 설치한다. Sequelize는 MySQL을 연결해주는 것이라서 mysql2도 같이 설치해준다.

- Sequeluize는 명령프롬프트도 사용할수 있어서 명령어를 사용할라면 글로벌 설치를 한다. 글로벌로 하면 Sequelize 명령어를 사용할 수 있다.

```
npm i -g sequelize-cli
```

- 명령어가 시퀄라이즈 폴더 구조도 만들어주고 데이터베이스에 직접연결해준다. Sequelize를 쓸때는 Sequelize 커멘드라인 인터페이스를 설치하면 좋다.

```
sequilize init
```

- config, migration, models, seeders 폴더를 만든다.

- models 폴더안에 index.js가 있는데 이게 Sequelize에서 제일 중요한 파일이다.

```js
// models/index.js
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development'; // 'prodection'
const config = require('../config/config.json')[env];

const sequelize = new Sequelize( config.database, config.username , config.password, config );

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
```

- process.env.NODE_ENV는 환경변수인데 지금은 개발연습 중이라서 'development'로 설정한다. 실제 배포를 할때는 NODE_ENV를 'development'가 아니라 'production'으로 바꿔야한다.

- 패키지들이 개발용이 아니라 배포용으로 바뀐다. 

```js
{
    "development" : {
        "username" : "root",
        "password" : null,
        "database" : "database_development",
        "host" : "127.0.0.1",
        "dialect" : "mysql"
    }, 
    "test" : {
        ...
    },
    "production" : {
        ...
    }
}
```

- Sequelize에 대한 설정파일이 config 폴더안에 있다. 'development','test','production'이 있는데 각각 개발 , 테스트 , 배포 환경이다.

- 개발환경일때 데이터베이스 설정이다. `dialect`는 사용할 데이터베이스, `host`는 로컬호스트, `username`은 데이터베이스 아이디, `password`는 데이터베이스 비밀번호, `database`는 데이터베이스 이름이다.

- 이 설정을 index.js에 불러와야 한다. require 하고 그 안에 cofig.json 경로를 적어주면 된다. 불러오면 config 객체가 된다. 여기서 키를 넣으면 그 부분이 불어와진다.

- Sequelize는 생성자인데 그걸 인스턴스화 한다. config.database , config.username , config.password , config를 차례대로 넣으면 된다. 

- `db` 객체를 모듈화해서 사용할 것이다. Sequelize 패키지도 넣고 sequelize 인스턴스도 넣고 export를 한다.

- Sequelize 패키지에서 설정들을 config 변수에 담는다. 시퀄라이즈 패키지에 설정들을 넣어서 인스턴스화 시키는 것이다.

- db라는 객체를 만들어서 모듈로 사용할것이라서 db안에 시퀄라이즈 패키지랑 인스턴스를 넣는다.

- mysql.com에서 5.7버전을 사용할것이다. 8.0버전은 5.7버전의 비밀번호가 깨지는 문제가 생긴다.

- downlods 페이지에서 mysql community edition 카테고리에서 community (GPL) downloads에 들어간다.

- Mysql community Server를 누르고 옆의 previous version을 찾아서 맞는 것을 다운로드고 한다. 로그인 할 필요없이 no thanks를 누른다.

- 처음 설치하는 사람은 workbench도 같이 설치하는게 좋다. GUI로 데이터베이스로 들어갈 수 있다.










