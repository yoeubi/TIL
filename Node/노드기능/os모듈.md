# os 모듈

```js
const os = require('os');
```

- 노드들은 기본내장 모듈이 있다.

- `os`는 운영체제와 관련된 모듈입니다.

- `os.arch()` : `process.arch()`랑 똑같다

- `os.platform()`

- `os.type()` : 운영체제 타입이다.

- `os.uptime()` :  운영체제가 시작하고 나서 흐른 시간이다.  `process.uptime()` : 노드프로그래밍이 시작되고 나서 흐른 시간

- `os.hostname()` : 컴퓨터 이름

- `os.release()` : 버전을 불러올수 있다.

- `os.homedir()` : 컴퓨터 홈 디렉토리이다. 

- `os.tmpdir()` : 원도우 템프 디렉토리이다.

- `os.freemem()` : 현재 추가로 사용가용한 메모리

- `os.totalmem()` : 전체 사용 메모리이다.

- `os.cpus()` : 씨피유 정보를 알려준다.

- 보통 데스크탑앱 만들때 쓴다. 노드가 싱글 스레드 라서 하나의 코어밖에 안쓴다. 씨피유 개수를 알아서 노드의 개수마큼 프로세스를 만들어서 돌린다. 
