# CSS 케스케이드(Cascade)

여러 스타일 시트를 결합하고 이들 사이의 충돌을 해결하는 프로세스 라는 용어로 cascade를 정의하고 있다.

1. 중요성(Important)
    - `!important` 선언은 다른 모든 선언보다 우선권을 가진다.

    **주의사항**
    - `!important`가 적용된 속성을 덮어 쓸라면 , 다시 `!important`를 사용해야 하기에 최대한 사용하지 않도록 노력 해야한다.

1. 특성(Specificity)
    - 선택자의 우선권에 대한 척도. 각 척도를 1, 10, 100, 1000 단위로 생각하면 이해하기 좋다.

    - 요소 선택자(0,0,0,1) < (가상)클래스 선택자(0,0,1,0) < ID 선택자(0,1,0,0) < 인라인 스타일(1,0,0,0)

    **주의사항**
    - `* , > , + , ~` 등 콤비네이터(Combinators) , `:not()` 가상 클래스는 특성에 영향을 주지 않는다.

    [예시]
    
    |* | 0000|
    |:--|-----:|
    |a|0001|
    |a.link | 0011|
    |li:nth-child(2) a:hover| 0022|
    |.nav:nth-child(2) a:hover| 0031|
    |#outer a | 0101|
    |#outer #inner a | 0201|
    |style="color: tan"| 1000|
    |   |!important|

1. 소스 순서
    - 중요성, 특성이 설정되지 않았거나 동일한 경우 나중에 나온 소스의 스타일이 우선권을 가진다.

    [예시]
    ```css
    p { color : #930212;}
    p { color : #d5727e;} // 우선권을 가진다.
    ```

- - -

참고 사이트

- [class 속성 개수가 11개면 id속성 보다 우선할까요?](https://hashcode.co.kr/questions/5415/2-5-css-%EC%BC%80%EC%8A%A4%EC%BC%80%EC%9D%B4%EB%93%9Ccascade-%EC%97%90%EC%84%9C-%EC%A7%88%EB%AC%B8%EC%9D%B4-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4)
