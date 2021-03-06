# float

- `float`는 요소가 보통 흐름(normal flow)으로부터 빠져 텍스트 및 인라인요소 가 그 주위를 감싸는 자기 컨테이너의 좌우측을 따라 배치되어야 함을 지정합니다.

- `left` : 요소가 자신을 포함하는 블록의 좌측에 float된다는 것

- `right` : 요소가 자신을 포함하는 블록의 우측에 float된다는 것

    - 마크업 순서대로 배치되는 것을 노멀 플로우라고 한다 .

    - float 한다는 것은 노멀 플로우에서 벗어나게 만드는 것이다.

## float가 위치 지정되는 법

- 요소가 부동되면 문서의 보통 흐름에서 빠집니다. 부동된 요소는 포함 박스나 다른 부동된 요소의 가장자리에 닿을때까지 좌나 우로 이동합니다.

![float](https://developer.mozilla.org/@api/deki/files/4927/=floats.png)

- 왼쪽 두번째 사각형은 첫번째 사각형 오른쪽에 놓이고 추가 사작형은 그들이 포함 박스를 채울때까지 계속해서 오른쪽으로 쌓입니다. 그 후엔 다음 줄로 넘어갑니다(wrap)

- float가 되면 부모 영역의 라인 박스 영역에서 왼쪽으로 배치가 된다.

- 다음 float 요소는 라인 박스 영역안에서 가용 될 수 있는 부분에서 시작한다.

- 만약 그 공간 보다 float 요소가 크다면 새로운 라인 박스를 생성하고 그 안에 들어간다 그리고 그 빈공간은 죽은 공간으로 float 요소가 들어 갈수 없다.

- `clear`는 블럭 박스 에만 적용이 되며 그 만큼 margin 으로 설정이 된다.

## float 지우기

- `float`을 지우는 방법은 `clear`속성을 추가하는 것입니다.
    - 이 방법은 블록 형식 문맥 네에 다른 요소가 없을때만 작동합니다.

- 형제 요소에 `clear` 속성을 부여 하면 된다.
    - clearfix 라는 클래스 이름으로 `clear` 속성을 관리 하면 된다
    - 하지만 이러한 경우 불필요한 요소가 추가로 생성 및 관리를 해야한다.

- 가상 선택자로 `clear` 속성을 만든다.
    - `::before` , `::after` 를 만든다. `:first-child` , `:last-child` 와 비슷하다.
    - 기본적으로 `display : inline` 이라서 `clear` 속성이 안 먹힌다. 그래서 `block` 으로 바꾼다.
    - `content` 속성이 있어야 박스가 생성이 된다. 
    - float 가 되는 부모에 클래스를 추가 하면 된다.

- 부동 요소가 담긴 컨테이너의 블록 형식 문맥을 제한할 수있다. `overflow:hidden | auto` 로 설정하면 된다     

## float 와 flex 의 차이

- flex 는 컨테이너 요소에 속성을 추가 하지만 float는 아이템에 속성을 추가한다.

**주의 사항**

- float 요소가 어떠한 내용을 포함하는 블록 위에 있다면 내용이 옆으로 밀려난다.

- 하지만 글자를 밀었는데 공간이 부족하면 밑으로 공간이 늘어난다.

**주의사항**

- 인라인 박스는 `width` 속성을 줄수가 없다 인라인박스의 `width`는 컨텐츠의 크기만큼 늘어난다.