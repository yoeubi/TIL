# cluster로 멀티 프로세싱 하기

- http https http2 를 써도 노드는 싱글쓰레드 이다 . 싱글스레드 단점은 cpu 코어를 하나만 쓴다. 

- 서버 요금은 코어 4개 다 쓰는데 하나만 쓰면 아깝다

- 클로스터는 노는 코어를 다 활용하는 법이다. 멀티프로세싱하는 방법이다.

```js
const cluster = require('cluster');
const os = require('os');
const http = require('http');
const numCPUs = os.cpus().length;

if(cluster.isMaster){
    console.log('마스터 프로세스 아이디',process.pid);
    for(let i = 0 ; i < numCPUs; i++){
        cluster.fork();
    }
    cluster.on('exit',(worker,code, signal) => {
        console.log(worker.process.pid , '워커가 종료되었습니다');
        cluster.fork();
    })
} else {
    http.createServer((req,res) => {
        res.end('http server');
        setTimeout(() => {
            process.exit(1);
        },1000)
    }).listen(80);
    console.log(process.pid,'워커 실행');
}
```

- 클러스터에는 마스터 모드 워커 모드가 있다 마스터는 워커들의 행동들을 총관리한다.

- `cluster에는 master(관리자) 프로세스와 worker(일꾼) 프로세스가 있습니다. cluster.fork()가 워커를 만듭니다.`

- 워커들은 진짜 서버를 만든다. 관리자인 경우 

- `process.pid로 현재 프로세스(마스터든 워커든)의 아이디를 가져올 수 있습니다.`

- 워커가 중단 되면 이벤트가 발생한다. 워커가 쓰러지면 다시 만든다. 노는 시피유 없이 서버가 멀티프로세싱으로 돌아간다. 

- 워커들이 나누어서 받는다. 확인할라면 워커를 종료를 하는 것이다.