# window 객체

- 자바스크립트는 브라우저 환경에서 돌아가도록 만들어졌다. 그래서 글로벌 영역을 다른 언어와는 조금 다르게 구현하고 있다.

- 글로벌 영역도 하나의 변수로 정의하여 사용하고 있다는 점이다. 글로벌 영역은 window 객체가 관장한다.

- The Global Object
    - 글로벌 객체(global object)는 단 하나만 유일하게 존재하며, 어떠한 컨텍스트가 실행되기 전에 먼저 생성된다. 
    - 글로벌 객체는 내부적으로 생성자가 없으며 , new를 이용해서 생성자로서 사용할 수 없다.
    - 글로벌 객체는 내부적으로 [[Call]]함수가 없으며, 글로벌 객체를 함수로서 호출할 수 없다.
    - 글로벌 객체는 [[Prototype]]은 구현 방법에 따라 달라질 수 있다.
    - 글로벌 객체는 추가로 표준에 명시되어 있는 이 속성들 이외에도 추가 속성들이 정의될 수 있으며, 글로벌 객체 자신을 다시 속성으로 가지는 것도 포함될 수 있다. 예를 들면, HTML DOM에서 window 속성은 글로벌 객체 자신을 나타내는 속성이다.

- Global object에 대한 설명을 살펴보면 실행 전 단계에 객체가 생성되어, 이 객체에는 덮어쓸 수 있으나 루프로 돌 수는 없는 기본 내장된 속성들을 가지고 있다.

- 그리고 생성자가 없어서 new로 생성할 수 없으며, 함수로 호출 할 수도 없고 프로토타입도 없다.

- HTML DOM 환경에서 이 객체는 window 속성을 가지고 있으며, 이것이 Global object 그 자체를 나타낸다고 정의하고 있다.

- 따라서 HTML DOM 환경에서 글로벌 영역의 window 속성으로 접근하면 글로벌 객체에 접근하는 것과 마찬가지로 글로벌 영역에 있는 속성들에 접근할 수 있다.

- window는 window.window 등과 같이 재귀적인 모습을 갖추고 있다는 것을 알 수 있다. window 객체는 Global object 그 자체 이므로 window 객체는 글로벌 변수로 선언한 모든 변수를 속성으로 갖는다.

```html
<script>
    var myGlobal = 'am i in window?';
    var myVariableName = 'myGlobal';
    console.log('1. ' + myGlobal); // am i in window
    console.log('2. ' + window.myGlobal); // am i in window
    console.log('3. ' + window['myGlobal']); // am i in window
    console.log('4. ' + window[myVriable]); // am i in window
</script>
```

- 위의 소스를 실행하면 모두 같은 글로벌 변수에 접근하고 출력하고 있는 것을 확인할 수 있다.

- 서로 다른 접근 방식을 응용하면 다른 것보다도 eval 함수를 사용할 수 밖에 없다고 판단하던 상황에서도 굳이 eval 함수를 사용하지 않아도 된다.

```js
var i;
for (i = 0; i < 5 ; i++){
    eval('var button'+ i + " = document.getElementById('button" + i + "');");
    eval('var button'+ i + ".dosomething = 'Do something same with eval, clicked button" + i + "';");
}
// -------------------------------------------------------------------------------
var i;
for (i = 1; i < 5 ; i++){
    window['button'+i] = document.getElementById('button'+ i);
    window['button'+ i].dosomething = "Do something same without eval, clicked button" + i;
}
```

- eval 함수가 사용되던 곳을 window 객체를 이용하는방법으로 수정한다면, eval함수가 필요한 곳은 거의 없어진다.

```js
function myGlobalFunction(){
    alert("Global function invoked");
}
window["myGlobalFunction"]();
window["myGlobalFunction"].call();
```

- 일반적인 글로벌 함수로 정의한 함수에도 접근할 수 있으므로, 조건에 따라서 서로 다른 함수에 접근해야 할 때 유용하게 사용 할 수 있다.


