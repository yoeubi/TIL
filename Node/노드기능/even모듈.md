# event 모듈

- 노드가 이벤트 기반이라서 이벤트를 이해하는 게 중요하다.

- 서버에 사람이 방문하는 것도 이벤트 이다. 

- 방문을 했을때 어떤 동작을 하도록 정의를 했다면 이벤트 리스너에 정의를 했다라고 표현한다.

- 미리 이벤트 리스너를 만들어두고, (이벤트 리스너는 특정 이벤트가 발생했을때 어떤 동작을 할지 정의하는 부분)

- 예시) 사람들이 서버에 방문(이벤트)하면 HTML 파일을 줄거야.

- 이벤트 리스너에 등록된 콜백함수가 실행되면서 HTML 파일을 준다. 

```js
const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('방문', () => {
    console.log('방문해주셔서 감사합니다.')
})
myEvent.on('종료', () => {
    console.log('안녕히가세요.')
})
myEvent.on('종료', () => {
    console.log('제발 좀 가세요.')
})
myEvent.once('특별이벤트', () => {
    console.log('한 번만 실행됩니다.')
})
myEvent.emit('방문');
myEvent.emit('종료');
myEvent.emit('특별이벤트');
myEvent.on('계속', () => {
    console.log('계속 리스닝');
});
myEvent.removeAllListeners('계속');
myEvent.emit('계속');

const callback = () => {
    console.log('제발 좀 가세요');
}
myEvent.on('종료1',() => {
    console.log('안녕히 가세요');
})
myEvent.on('종료1', callback);
myEvent.removeListener('종료1',callback);
myEvent.emit('종료1');
console.log(myEvent.listenerCount('종료1'))
```

- `EventEmitter`이벤트를 발생시킬수 있는 객체이다. `new`를 해서 커스텀 객체를 만들수 있다. 

- on 과 addEventListener는 같은 기능을 하는 별명(alias)입니다.

- 이벤트리스너는 여러 개를 달수 도 있어요.

- `once`는 한번만 실행되는 것이다. 2번째는 실행이 되지 않는다.

- 이벤트를 호출하는 방법은 `emit`이다 인자로 이벤트 이름을 넣어주면된다. `emit`되면 콜백함수가 실행이 된다.

- 이벤트를 한번만 실행하고 싶은걸 할때 `once`를 쓴다.

- 이벤트를 `on`으로 등록한걸 취소할수 있다. `removeAllListeners` 하면 지워진다. 호출해도 해제가 되서 더이상호출이되지 않는다. 

- `removeAllListeners`가 왜 `All`이냐면 하나의 이벤트에 여러개의 리스너가 붙을수 있는데 그걸 한방에 해제하는것이다.

- 하나만 해지하고 싶다면 `removeListener`를 쓴다. 문제는 종료1이라는 콜백함수가 2개라면 어떤걸 지우고 싶은지를 말해야한다. 두번쨰를 지우고 싶다면 그 리스너의 콜백을 변수로 뺴고 `removeListener`에 콜백함수를 넣어야지 지워진다.

- `listenerCount`는 이벤트 리스너가 몇개 달려있는지 알려주는 메서드이다.