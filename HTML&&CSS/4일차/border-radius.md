# `border-radius`

- 둥근 외각선을 표현하는 방법이 정의 되어 있다. 하나 혹은 두개의 반지름을 설정하여 각각 모서리의 굴곡을 설정 할수 있기 때문이다. 원 혹은 타원의 모양으로 정의가 가능하다.

![border-radius](https://developer.mozilla.org/files/3638/border-radius-sh.png)

- 엘리먼트에 `border`가 없어도 반지름(radius)는 `background`속성에 적용이 된다.
- 잘려나가는(cliping) 부분에 대한 정확한 위치는 `background-clip` 속성 값에 따라 결정된다.

```css
첫번째 반지름(radius)값을 지정하는 문법(1~4개 모서리에 설정):
border-radius: radius             
border-radius: top-left-and-bottom-right top-right-and-bottom-left 
border-radius: top-left top-right-and-bottom-left bottom-right 
border-radius: top-left top-right bottom-right bottom-left 
```

- 단위는 길이 또는 퍼센트로 가능하다
    - 길이는 원의 반지름 또는 타원의 장반경 , 단반경 축의 크기를 나타낸다. 음수는 지정이 불가능하다.
    - 퍼센트는 원의 반지름 또는 타우너의 장반경 , 단반경 축의 크기를 % 값으로 나타낸 것이다. 가로축의 %값은 영역의 `width`값에 대응되고 세로축의 % 값은 영역의 `height`값에 대응된다 음수는 사용이 불가능하다.
