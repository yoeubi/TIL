# position

## 레이아웃 디자인

### 포지셔닝(positioning) 레이아웃

- 포지셔닝은 웹브라우저가 렌더링하는 기본 레이아웃 흐름(normal layout flow)을 재정의하여 흥미로운 효과를 만들어 낼 때 사용합니다.

- 예를 들어 기본 레이아웃 흐름에서 레이아웃 내부 일부 요소의 위치를 조정하려면 포지셔닝을 사용하여 조정 할수 있습니다.

#### 포지셔닝 레이아웃 유형

1. 정적(static) 위치 : 기본 값
1. 상대(relative) 위치
1. 절대(absolute) 위치
1. 고정(fixed) 위치
1. 달라붙는(sticky) 위치 : IE 브라우저 미지원

##### 상대(relative) 위치 설정

```css
.is-blue {
    position : relative;
    top : 30px;
    right : -100px;
    z-index : 1;
}
.is-yellow {
    position : relative;
    top : -30px;
    left: 40px;
    z-index : 1;
}
```

- 여기서 상대는 자신이 가지고 있는 일반 흐름상에서 위치를 말한다. 그리고 그 위치를 기준으로 이동한다

- 기준으로 해당되는 것은 `top` , `right` , `bottom` , `left`로 움직인다.

- 기본 레이아웃 흐름에서는 박스가 `float`됐을때 아래박스가 윗박스가 없던걸로 인식하고 위로 올라갔는데

- `relative`는 박스 원래 위치 공간을 그대로 인식하고 이동한다. 기본 흐름은 유지가 된다. 

- 만약 겹쳐있는 것을 위로 올리면 축을 바꿔야 하는데 그게 `z-index`이다. 값이 높을 수록 상위에 존재한다.

- 만약 동일한 값이면 마크업 순서대로 보여진다. 

#### 절대(absolute) 위치 설정

```css
.is-yellow {
    position : absolute;
    z-index : 10;
    top : 0;
    right : 0;
}
.is-green {
    position : absolute;
    top : 0;
    left : 0;
}
.is-blue {
    position : absolute;
    bottom :0;
    left:0;
}
.box-group {
    position : relative;
}
```

- `relative`와 `absolute`의 차이점
    - `relative`는 원래 공간을 지키면서 위치를 이동하는데 `absolute`는 마치 `float`처럼 자신의 공간을 뒤에 나에는 요소가 인식하지 못하게 하고
    - 그 위치를 다른 요소가 차지 하게 만든다.

- `float`와 `absolute`의 차이점
    - `float`는 단순히 `right` , `left`만 부유하지만
    - `absolute`는 페이지네에서 자유롭게 배치 할 수 있다.

- 박스를 자신을 포함하는 박스 내에서 위치 조정할려면 가까운 부모중에서 `position`값이 `static`이 아닌 값이면 부모로 인식한다.
    - 주로 `relative`로 설정하는데 이유는 일반 흐름을 깨지 않고 부모로 인식시키기 위해서 이다.
    - 만약 다른 것으로 한다면 원래 자신이 가지고 있는 공간을 아래 요소가 인식하지 못해서 아래요소가 올라간다.

**주의사항**

- `z-index`는 10,100 단위로 관리해야 한다. 이유는 나중에 수정하다가 중간에 단계를 넣다보면 꼬일 수가 있다.

- `posa+b0+l0` 으로 빠르게 타이핑을 할 수 있다.


#### 고정(fixed) 위치 설정

```css
.is-yellow {
    position : fixed;
    top : initial;
    left : 0;
    bottom : 0;
}
```

- 박스가 위치 이동되면서 같은 자리에 고정이 된다.

- `absolute` 와 `fixed`의 차이점
    - `absolute`는 부모를 찾고 부모 내에서 위치 조정을 한다 만약 부모들이 `static`이면 최종 부모는 `body`가 된다.
    - `fixed`는 부모를 찾지 않고 사용자의 뷰포트(view port)를 기준으로 잡는다.

**주의사항**

- 기존의 설정 값을 초기값을 되돌릴려면 `initial` 을 주면 된다.

#### 달라붙는(sticky) 위치 설정

```css
.box-group .box {
    position : sticky;
    top : 0;
}
```

- 박스의 `top : 0;` 지점이 자신의 부모의 `top : 0;` 지점에 도달했을때 멈추는것이다.

- `fixed` 되는 `width`를 잃어버린다. 그래서 지정해줘야 한다.

- `left` `right` 를 설정하면 이 두개의 값을 뺀 나머지 만큼 `width`가 자동으로 설정이 된다.

- - -

- `left : 50%`하면 부모 영역의 50%만큼 차지하게 된다. 

- 이때 요소의 왼쪽이 50%에 있으므로 요소를 50% 가운데에 맞출라면 요소의 폭의 절반만큼을 `margin-left`로 음수를 주면 된다.

- `transform : translateX(-50%)` 하면 요소의 폭의 50%만큼 왼쪽으로 이동한다.

- `opacity`는 투명도이다.

- `sticky`한 요소가 여러개라면 다음 `sticky`요소가 오면 처음 `sticky`요소는 위로 올라간다. 이유는 마크업 순서떄문이다.

- 만약 중간에 겹치는 부분이 거슬리면 이 부분은 자바스크립트로 처리해야한다. 스크롤이 특정부분을 지났을때 `position`값을 조정하면 된다.

