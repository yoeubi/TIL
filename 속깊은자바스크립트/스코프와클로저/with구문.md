# with 구문

- 자바스크립트에서 사용하면 안 좋은 구문이 두 가지 있다. with eval

- eval 구문은 보안과 퍼포먼스 , 그리고 코드의 컨텍스트 변환등으로 유지보수상 사용하지 말라고 하는 것

- with 구문은 파라미터로 받은 객체를 스코프 체인에 추가하여 동작한다. 

```js
var user = {
    name : 'Sung-ihk',
    homepage : 'unikys.tistory.com',
    language : 'korean'
}
with(user){
    console.log(name === 'Sung-ihk'); // true
    console.log(homepage === 'unikys.tistory.com'); // true
    console.log(language === 'korean') // true
    language = 'javascript';
    nickname = 'unikys';
}
console.log(user.language === 'javascript'); // true
console.log(user.nickname === 'unikys') // false
```

- with로 user변수를 넘기면 user변수에 속한 속성들에 접근할때 user. 을 생략하고 일반 로컬 변수처럼 접근할 수 있다. 

- user 변수의 속성이 아닌 변수를 선언하면 어떨게 될까?

```
global scople           <--- with(user)
    user                        name = 'Sung-ihk'
    nickname                    homepage = 'unikys.tistory.com'
                                language = 'javascript'
```

- 위의 with 구문은 글로벌 영역에 있는 user 변수의 속성들을 그대로 활용하여 새로운 스코프의 변수로 선언하고 초기화한다. 

- 그런데 nickname 변수는 user의 속성이 아니므로 상위의 스코프나 글로벌 영역에 할당된다. 

- 새로운 속성을 with 스코프에서 바로 생성할 수 없다. 만일 새 속성을 추가하려면 글로벌 영역에 있는 user변수를 통해서 직접 추가해야한다.

```js
with (document.getElementById('myDiv').style){
    background = 'yellow';
    color = 'red';
    border = '1px solid black';
}

var r = 10 , a , x , y ;
with (Math){
    a = PI * r * r;
    x = r * cos(PI);
    y = r * sin(PI / 2);
}

function toString(string){
    console.log(string);
}
with ({nickname : 'unikys'}){
    with (window){
        toString('hello,' + nickname)
    }
}
```

- 첫번쨰 예는 특정한 DOM 스타일을 with 구문의 파라미터로 넘겨서 해당하는 스타일의 속성들을 바꾼다.

- 두번째 예는 브라우저의 기본 객체로 제공되는 Math를 with의 파라미터로 넘겨서 Math.PI나 Math.cos() 등의 함수를 바로 로컬변수나 상수인것 처럼 사용하는 것이다.

- 세번쨰 예는 글로벌 영역에 toString 함수를 선언했다. with의 파리미터로 객체를 받는데 with안에서 toString을 호출하면 객체의 toString이 호출이 되기때문에 글로벌 영역에 선언한 함수에 우선 순위를 두기 위하여 다시 with(window)로 감싸준것이다.

