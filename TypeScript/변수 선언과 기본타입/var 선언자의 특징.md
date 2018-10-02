# var 선언자의 특징

- 호이스팅
- 블록 레벨 스코프(block level scope)가 지원되지 않음

## 호이스팅

- 호이스팅은 선언한 변수가 스코프의 최상단으로 끌어올림 되는 현상입니다.

```js
helloMessage = "hello";
console.log(helloMessage);
var helloMessage;
```

- 하지만 이처럼 할당을 먼저 하고 나중에 선언하는 코드는 가독성을 떨어뜨립니다.

## 함수 레벨 스코프(fuction level scope) 지원

- 함수 내에서 선언한 변수는 함수 내에서만 유효하고 함수 외부에서는 참조 할 수 없다.

```js
// 두개의 myName은 스코프가 달라서 영향이 없다.
var myName = "sad"; // 전역 스코프 
function functionLevel(){
    var myName = "happy"; // 함수 레벨 스코프 
}
functionLevel();
console.log(myName); // "sad"라고 출력됨
```

- 문제는 var 선언자는 블록 레벨 스코프를 지원하지 않는다는 것이다.
- 블록 레벨 스코프란? 블록 {} 내에서만 유효하고 블록 외부에서는 참조 할 수 없는 것을 말합니다.

```js
// 두 개의 myName 은 같은 스코프로 인식됨
var myName = "sad";
if(true){
    var myName = "happy"
    // 블록 레벨 스코프가 적용 안됨
}
console.log(myName) // "happy"라고 출력됨
```

- if 문은 블록 레벨 스코프를 지원하지 않아서 if 문 내부와 외부는 같은 스코프로 인식합니다.
- if 문 내부와 와부에 선언한 myName 변수는 var 선언자로 선언했기 때문에 블록 레벨 스코프가 적용되지 않습니다.
- 따라서 if문 안의 내부 변수는 if 문 밖의 외부 변수에 영향을 줄 수 있습니다.
- 변수가 블록 내에서만 유효범위를 갖게 하려면 블록 레벨 스코프를 지원해야합니다. 

## 블록 레벨 스코프 지원하는 대표적인 선언

- let ,const
- 클래스 , 인터페이스 , 타입 에일리어스(type alias), enum 선언
- 이 중에서 let 선언자는 변수를 선언할때 호이스팅을 방지하고 블록 레벨 스코프를 지원합니다.
