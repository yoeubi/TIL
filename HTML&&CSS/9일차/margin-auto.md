# margin : auto

- `auto` 의 정의는 요소 , 요소 타입 그리고 context 마다 다양하다. 
- `margin`에서는 둘중에 하나를 의미한다. 사용가능한 공간 또는 0px 을 차지하는 것입니다.
- 이 두개는 한 요소에 대해 다른 레이아웃을 정의합니다. 

## `auto` 사용가능한 공간을 차지한다.

- `left` , `right` 에 `auto`를 설정하면 요소의 컨테이너의 사용가능한 수평 공간을 공평하게 차지합니다. 그래서 요소가 가운데에 위치하게 됩니다. 
- 그러나 수평 마진에만 동작을 합니다. 그리고 `float` `inline` 요소 , `absloute` 나 고정된 위치를 가진 요소들에서는 작동하지 않습니다.

## 사용가능한 공간을 차지함으로서 float처럼 보인다.

- `margin-left` , `margin-right` 둘다 `auto`를 주면 사용가능한 공간을 공평하게 차지합니다. 하지만 둘중에 하나에게만 주면 어떻게 될까요?
- 둘중에 하나만 주면 사용가능한 공간을 모두 차지하게 됩니다. 그래서 요소가 왼쪽이나 오른쪽으로 붙게 됩니다.

## `auto`는 0px로 계산이 된다.

- `auto`는 `float`, `inline`, `absolute` 요소에 작동하지 않습니다. 이 요소들은 이미 레이아웃이 정의가 된것입니다. 그래서 `margin`에 `auto`를 줘도 소용이 없습니다. 그래서 요소가 가운데에 정렬이 안됩니다.

- `float`요소안에서는 `auto`는 0px의 값을 가지게 됩니다. 또한 `auto`는 `width`가 없는 블록요소에서도 작동하지 않습니다.

- `width : auto`에서 `margin`은 0px의 값을 가지게 됩니다. 블록 요소의 `width`가 컨테이너를 감쌀때 `width`가 `auto`또는 `100%`일때 `margin : auto`는 0px로 계산됩니다.

## 수직 margin에 auto를 쓰면 어떻게 되는가?

- `auto`는 `maring-top` , `margin-bottom`에서 항상 0px로 계산됩니다. 
- W3C spec에서는 `margin-top`,`margin-bottom`에서 `auto`는 0으로 계산한다고 나와있습니다.

- - -

# 참고 사이트

- [margin:auto](https://www.hongkiat.com/blog/css-margin-auto/)