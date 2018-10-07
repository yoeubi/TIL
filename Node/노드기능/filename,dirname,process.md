# __filename , __dirname , process

```js
console.log(__filename,__dirname);
```

- `__filename` 현재 파일 경로를 알려준다.

- `__dirname` 현재 파일이 들어있는 경로를 알려준다.

- 파일이 어디서 실행되는지를 알수 있다.

- 노드는 싱글스레드인데 단점을 극복하기 위해 멀티프로세스를 하는 것이다.

- `process` 객체에는 현재 실행중인 노드 프로그램 정보가 들어있어요

- 원래는 `global.process`인데 생략한것

- 프로세스는 하나의 프로그램이라고 생각하면 된다. 

- `prcess.version` 노드가 설치된 버전 프로세스버전

- `process.arch` 윈도우면 x64 64비트

- `process.platform` win32 리눅스는 리눅스라고 뜨고 운영체제의 정보를 보여준다.

- `process.pid` 현재실행되는 프로세스의 아이디이다 프로그램의 렉이 걸리면 프로레스 아이디로 종료할수 있다.

- `process.uptime()` 하면 노드 실행이 얼마나 지났는지를 알려준다.

- `process.cwd()` : 프로세스 실행 위치 , `__dirname` : 파일 위치

- `process.execPath` 노드가 설치된 경로

- `process.cpuUsage()` 현재 cpu 사용량을 보여준다.

- 웹프로그래밍할때는 사용할 필요가 없다. 이런것은 보통 노드로 웹서버를 만들때가 아니라 데스크탑 프로그램을 만들때 사용한다.

- `process.exit()` 프로세스를 종료하는것 

- `process.env` 나 `process.nextTick` 은 추후에 사용할 일이 있을때 소개합니다.

- 프로세스 에러가 터졌을떄 서비스를 죽이고 다시 실행할때 `process.exit()`를 사용한다.