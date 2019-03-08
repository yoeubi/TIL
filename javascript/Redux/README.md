# Redux

[Redux](https://lunit.gitbook.io/redux-in-korean/)

Redux 는 Context 기능, 고급 상태 관리 기법 을 할 수 있다.

반복되는 값을 제너레이터로 반복

Promise는 비동기로 값을 처리

리덕스는 상태 변화를 값으로 넣는다.

1. 상태 변화 로깅
1. Undo / Redo
1. 시간 여행

오늘의 이해 목표

1. store
1. action
1. dispatch
1. subscribe
1. reducer

상태관리를 값으로 저장하는 것이다.

상태를 담는 컨테이너를 스토어라고 한다.

스토어는 여러 기능을 갖추고 있는 상태 저장소이다.

어떤 값을 투입하면 상태가 변경이 된다.

상태를 변화시키는 값을 action이라고 한다.

상태변화를 나타내는 값(객체)

액션을 스토어에 넣는 행위를 dispatch라고 한다.

액션이 dispatch 될때마다 subscribe를 실행한다.

subscribe 상태가 바뀔 때마다 실행할 함수를 등록하는 절차이다.

state를 어떻게 변경할지 알려주는 것이 reducer 이다.

reducer는 이전상태와 액션을 받아서 다음 상태를 반환하는 함수이다.

처음에 store를 만들때 reducer를 넣어야한다.

