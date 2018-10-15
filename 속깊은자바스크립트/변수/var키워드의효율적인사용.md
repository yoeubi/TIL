# var 키워드의 효율적인 사용

```js
// 여러 개의 var 구문으로 변수를 정의한 예
(function(){
    var subjects = ['1st subject', '2nd subject', '3rd subject'];
    for (var i = 0; i < sujects.length ; i++){
        var el = document.getElementById('subject'+i);
        el.innerHTML = el.value = subjects[i];
        el.addEventListener('click',function(){
            alert(this.value + ' pressed');
        })
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://unikys.tistory.com/list/');
    xhr.onload = function(){
        var contents = JSON.parse(xhr.responseText);
        for (var i = 0; i < contents.length ; i++){
            var el = document.getElementById('content'+ i);
            el.innerHTML = contents[i];
        }
    }
}())
// 하나의 var 구문으로 변수를 정의한 예
(function(){
    var subjects = ['1st subject', '2nd subject', '3rd subject'],
        el, i, xhr;
    for (i = 0; i < sujects.length ; i++){
        el = document.getElementById('subject'+i);
        el.innerHTML = el.value = subjects[i];
        el.addEventListener('click',function(){
            alert(this.value + ' pressed');
        })
    }

    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://unikys.tistory.com/list/');
    xhr.onload = function(){
        var contents = JSON.parse(xhr.responseText);
        for (var i = 0; i < contents.length ; i++){
            el = document.getElementById('content'+ i);
            el.innerHTML = contents[i];
        }
    }
}())
```

- 변수들을 var 구문하나로 선언하고, 위치를 함수 맨 위로 옮기면 다음과 같다.

- 이러한 변수 선언 방식을 권장하는 이유는 다음과 같다.
    - 초기화 실수의 최소화
    - 해당 스코프에서 사용하고 있는 변수에 대한 관리 용이
    - 미니피케이션 최적화

- 초기화 실수의 최소화 항목은 상단에 모든 변수를 나열하고 필요한 변수들에 대하여 초기화 체크를 쉽게 할 수 있다는 점이다.

- 이는 일단 변수를 정의했다면 기본 값인 undefined로 두는 것이 아니라 null 이나 0등과 같은 기본값으로 설정해줘서, 해당하는 변수가 생성되었는지를 검증할때 조금 더 확실하게 구분할 수 있다.

```js
// 초기화 여부와 변수 선언 여부를 확인하는 예
console.log('선언을 안한 경우 검사: ' + (typeof notExists === 'undefined')); // true
var notInitialized; 
console.log('초기화를 안한 경우 검사: ' + (typeof notInitialized === 'undefined')); // true
```

- 자바스크립트 개발자들은 기본값인 undefined로 두는 것을 선호하지 않고, null 등과 같은 값으로 설정하는 것을 선호 한다.

- 변수를 null로 초기화하면 typeof가 아닌 다음처럼 검증하면 다음처럼 검증하면되므로 조금더 명확하게 이 검증이 의미하는 바를 확인할수 있다. `notInitialized === null`;

- 초기화에 대한 관리를 함수 상단에 하나의 var에 모아서 선언하면 초기화때문에 발생하는 휴먼 에러가 극명하게 줄어들수 있다.

- 또한 표준에서 정의된 대로 초기화 값을 설정하면 var 구문이 실행된 이후에 초기화하므로 변수가 활용되는 스코프가 실행되자마자 초기화되는 이점이 있다.

- 해당 스코프에서 사용하고 있는 변수에 대한 관리가 용이해진다.

- 자바스크립트에서는 변수 앞에서 var를 붙여서 선언하지 핞고 사용해도 에러가 발생하지 않는다. 대신 상위 스코프에 있는 변수나 최악의 경우 글로벌 변수로 활용되어 프고르갬 전체에 영향을 미칠 수도 있다.

- 따라서 자바스크립트에서는 어떠한 변수를 선언하였고 어느 스코프에서 사용하는지 관리하는 것이 매우 중요하다.

```js
// var 키워드 생략으로 인한 오동작 예
(function(){
    var xhr , i;
    for (i = 0 ; i < 10 ; i++){
        xhr = new XMLHttpRequest();
        xhr.open('GET','http://unikys.tistory.com/' + i);
        xhr.onload = function (){
            var json = JSON.parse(xhr.responseText);
            for (i = 0 ; i < 5 ; i++){
                alert(i + ' = ' + json[i]);
            }
        }
    }
}())
```

- 위의 소스를 실행하고자 하면 무한루프에 빠져서 브라우저가 멈추는 현상이 일어난다. 그 이유는 내부 이벤트 콜백 함수 안에서 루프 변수인 i의 관리를 제대로 하지 않았기 때문이다.

- 만약 함수의 상단에 하나의 var 키워드로 변수를 모아서 선언했다면 쉽게 내부 함수에 있는 i가 var 키워드로 정의되지 않아서 상위 스코프에서 루프를 돌고 있는 것이라고 금방 알 수 있다.

- 미니피케이션에 최적화하기 쉽다.

- 미니피케이션을 하는 이유가 소스를 읽기 어렵게 만들어서 소스가 공개될 수 밖에 없는 자바스크립트의 소스를 암호화하는 식으로 이해하기도 하지만, 그러한 이유보다는 웹이라는 환경 때문에 소소의 크기를 줄이는데 아주 중요한 역활을 하기 때문이다. 

- var는 키워드라서 더 이상 작은 크기로 줄일 수없는 문제가 있다. 따라서 var 하나에 변수를 묶어서 선언하는 것이 미니피케이션에도 유리하다는 점을알 수 있다.



