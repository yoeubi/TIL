# 내장 객체

- 객체나 배열을 그대로 전송할수 없다 메모리에 객체를 저정하는데 브라우저마다 저장 방식이 다르다. 

# JSON

- 텍스트 데이터를 전송하도록 하게 만든것이다. 그래서 저장/ 전송 가능한 형태로 변환하는 절차가 필요하다.

- notation 은 표기법을 의미한다.

- `undefined`는 `JSON.stringify`를 쓸때 무시가 된다.

- `JSON.parse`는 텍스트를 객체로 다시 원상복구 시킬 수 있다.

- json은 자바스크립트가 아니다 속성 이름은 꼭 쌍따옴표를 둘러주어야 합니다.

- 객체 리터럴로 만들어 진것만 저장이 된다.

# Date

- 협정 세계시는 국제 표준시랑 비슷한것이다. 

```js
new Data();
const d = new Date();
// 시간을 나타내는 특별한 객체이다.
d.getTime();
// 유닉스 시간을 반한한다. 밀리초 단위이다.
new Date(msec - 60000);

new Date('문자열')
```

- 시간데이터를 json에넘길때 숫자로 바꿔서 보낸다.

- 사용자의 브라우저에 언어에 따라 시간을 표시해준다. `toLocaleString` 지역 + 언어 라는 것이다.

- `toISOString` 숫자로 변환해서 저장하기도 하지면 이대로 쓴다. 국제표준을 말한다.

- 시간을 표기하는 방법중에 국제표준이 있다. `z`가 붙어있으면 utc기준이라는 것 

- 어떤 객체에 `toJSON`이 있으면 이 메소드를 사용한다. `Date`를 `stringify`하면 `toISOString()` 으로 해서 들어가진다.

- setInterval(() => {}) // 특정시간마다 함수를 반복해서 실행 시킬수 있다.

```js
const start = new Date();

setInterval(() => {
    const end = new Date();
    console.log(`경과시간 : ${end-start} 밀리초`)
} , 1000)
```

# 심볼

- 심볼은 객체의 속성 키로 사용하기 위해 만들어졌다.

- 자바스크립트 객체의 비밀통로 역활을 하기 위해 만들어졌다.

- 내장 심볼을 객체의 속성 키로 사용하면, 특정 상황에서의 객체의 동작 방식을 마음대로 바꿀 수 있습니다.

- 객체의 키로 문자열과 심볼을 사용할 수 있다.

- `obj.mySymbol` 은 `mySymbol`이라는 키를 가진 것을 말한다. `obj["mySymbol"]`

```js
const arr = [1,2,3];

// 배열 뿐만 아니라 iterable 객체를 순회할때도 사용 할 수 있다.
for(const item of arr){
    console.log(item);
}
```

- `Symbol.iterator`라는 내장 심볼이 있다. 심볼인지 체크할라면 `typeof`

- 이터러블 객체란 , `Symbol.iterator` 속성에 특별한 형태의 함수가 들어있는 객체를 말한다.

```js
for(const char of 'hello'){
    console.log(char);
}
const obj = {
    [Symbol.iterator] : function* (){
        yield 1
        yield 2
        yield 3
    }
}

for(const item of obj){
    console.log(item);
}
```

- 심볼은 객체의 기능확장을 위해 만들어졌다.

# Map

- 객체에는 여러가지 부가기능들이 있다. 문자열 , 심볼아닌 키를 저장할수 없다. 

- 객체는 프로토타입이 붙어서 무겁다라고 할 수 있다.

- 맵은 어떤 키도 받을 수 있다.

- 맵에는 상속이라는 것도 없고 열거가능도 없다.

- 추가 삭제가 빈번하게 일어나는 경우 `map`을 사용하는게 속도면에서 빠르다.

# set

- `set`은 집합배열과 비슷하다.

- `set`은 중복제거 할때 주로 사용이 된다. 

- `set`은 순서의 개념이 없다.

```js
function remove(arr){
    const set = new Set(arr);
    return Array.from(set);
}

remove([1,2,3,2,1])
```

# 이벤트 리스너

- `removeEventListener` 할때 붙였던 함수를 2번째인자로 넣어야한다.

# 엘리먼트 생성하기

- `createElement` 하면 메모리상에 있는 것이고 문서 안에 들어간게 아니다. 

- `insertBefore` 두번째 인자에 `null`을 넣으면 `appendChild`랑 똑같다.

- `appendChild` `insertBefore`는 이미 존재하는 요소를 넣으면 복사하지 않고 이동시킨다.

# 노드 간 관계

- `offsetParent` 포지셔닝의 기준이 되는 조상 요소

- `x` ,`y` 는 익스플로어에서 지원을 안한다. getBoundingClientRect 보더를 포함해서 사각형의 위치를 말한다. 

- offsetTop , offsetLeft  부모에서의 위치이다 부모는 포지션값을가진 요소를 말한다.

# 이벤트 객체

- `altkey`는 마우스를 누르때 알트키를 눌렀는지 여부 확인

- `button`은 무슨 버튼을 눌렀는지 숫자로 보여준다. 왼쪽은 0번이다.

- `clientX`, `clientY`는 클릭한 좌표이다.

- 어떤 이벤트는 브라우저의 기본동작이 있다 `preventDefault`는 그 동작을 멈추게 하는 것이다.

- 이벤트는 자식 요소를 클릭해도 동작한다.

- 캡처링 ,버블링 둘중 하나일때 이벤트가 발생하게 만들수 있다.

- `addEventListener`는 기본 값으로 버블링에서 실행이 된다. 

- 옵션에 `true`로 주면 캡처링에서 실행이 된다.

- 자식 이벤트, 부모의 이벤트 둘 다 등록되었다면 이벤트 순서가 중요할 수 있다.

- stopPropagation은 이벤트 전파를 중단시킨다.



