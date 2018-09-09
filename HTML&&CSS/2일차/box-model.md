# box model

![box-model](https://mdn.mozillademos.org/files/8685/boxmodel-(3).png)

이 사각형 박스 각각은 표준 박스 모델을 사용합니다.

이 모델은 요소에 의해 차지되는 공간의 내용을 설명합니다.

각 박스는 네 경계가 있습니다. margin, border , padding , content 경계가 있습니다.

- content 영역은 요소의 실제 내용을 포함하는 영역입니다.
    - CSS `box-sizing`이 default 값으로 설정된 경우 `width`, `height`로 content 크기를 제어합니다.

- padding 영역은 padding을 둘러싼 border까지 미칩니다. content 영역이 배경색, 또는 그 위에 설정된 이미지가 있을 때, 이는 padding까지 이어집니다. 이것이 padding을 content의 연장으로 생각할수 있는 이유입니다.

- border 영역은 padding 영역을 border를 포함하는 영역까지 확장합니다. 이 border 경계 안쪽 영역입니다.

- margin 영역은 border 영역을 이웃 요소와 구별하기 위해 쓰는 빈 영역으로 확장합니다.
    - margin collapsing 이 일어날때 margin 영역은 margin이 박스 간에 공유되기 때문이다.
    - margin은 투명한 영역이다. 그래서 병합 마진 컬랩싱이 발생한다. 그래서 같은 등간격으로 표현할 수 있다.

**주의사항**

- 인라인 요소의 경우 차지하는 공간의 양은 비록 border 및 padding 이 content 주위에 눈에 보이더라고 `line-height`속성에 의해 결정이 된다.

## `box-sizing`

- `border-box`는 모바일 사이트를 만들떄 유용하다.

- 만약 `content-box`상태에서 `width: 100%`인 상태에서 `margin`을 적용하면 넘친부분이 짤리거나 뛰어날수 있다. 그래서 `border-box`를 사용한다.

- `button`은 default 값이 `border-box`이다.

- 모든 `box-sizing`을 `border-box`로 바꾸는 것이 유리하다.


### `content-box`

- 이 값은 CSS 표준에 의해 정의된 기본 스타일이다. `width`와 `height`속성은 오로지 content만 포함해서 측정된다 padding, border, margin 은 포함하지 않는다.

    - padding, border, margin 은 박스 외부에 존재한다. `.box{width:350px;}`인 요소에 `{border : 10px solid black;}`을 적용하면 결과적으로 브라우저에서 렌더링 되는 것은 `.box{width:370px;}`이다.

### `border-box`

- `width`와 `height` 속성이 padding , border 를 포함하고 margin을 포함하지 않는다. 

    - padding , border는 박스 안에 존재한다. `.box{width:350px}` 인 요소에 `{border : 10px solid black;}`를 적용하면 결과적으로 브라우저에 렌더링되는 것은 `.box{width:350px;}`이다.
