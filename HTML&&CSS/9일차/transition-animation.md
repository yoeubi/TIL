# `transition` vs `animation`

- 요소의 속성값이 변화하면 보통 즉각 반영이 되는데 `transition` 과 `animation`을 사용하며 변화가 일정 시간(`duration`)에 걸쳐 나타나게 할 수 있다.

## `transition`

- 요소의 변화를 일정 시간(`duration`)동안 일어나게 할 수 있다.
- 자동으로 발동하지는 않는다.(`:hover` 나 `onclick` 같은 이벤트 트리거에 의해 동작함)

### 사용법

```html
<div class="square"></div>
```
```css
.square {
    width : 100px;
    height : 100px;
    background-color : red;

    transition-property : width , background-color; // 트랜지션의 대상이 되는 프로퍼티를 지정 (기본값 all)
    transition-duration : 1.2s , 3s; // 변화가 일어나는 기간, 초단위. 프로퍼티와 각각 대응 (기본값 0s)
    transition-timing-function : ease; // 트랜지션 변화율 함수 지정 (기본 값 ease)
    transition-delay : 1s; // 트리거 이벤트 발생 후 몇 초 후에 트랜지션이 시작될 것인지 지정 (기본값 0s)
    transition : (shorthand)
}
.square:hover {
    width : 300px;
    background-color : blue;
}
```

### 주의점

- layout에 영향을 주는 요소의 크기나 위치가 변화하면 영향을 받는 모든 요소들의 크기나 위치를 재계산 하게 되는데 영향을 받는 요소들이 많을 수록 많은 부하가 간다.
- 가급적이면 가능한 낮은 계층의 요소에 트랜지션을 효과를 주기 위한 노력을 해야함

<table>
    <tr>
        <th colspan="5">레이아웃에 영향을 주는 속성들</th>
    </tr>
    <tr>
        <td>width</td>
        <td>height</td>
        <td>padding</td>
        <td>margin</td>
        <td>border</td>
    </tr>
    <tr>
        <td>display</td>
        <td>position</td>
        <td>float</td>
        <td>overflow</td>
    </tr>
    <tr>
        <td>top</td>
        <td>left</td>
        <td>right</td>
        <td>bottom</td>
    </tr>
    <tr>
        <td>font-size</td>
        <td>font-family</td>
        <td>font-weight</td>
    </tr>
    <tr>
        <td>text-align</td>
        <td>vertical-align</td>
        <td>line-height</td>
    </tr>
    <tr>
        <td>clear</td>
        <td>white-space</td>
    </tr>
</table>

## `animation`

- 트랜지션보다 할 수 있는 것이 많으며 트랜지션은 시작하기 위해 이벤트가 필요하지만 애니메이션은 시작, 정지 , 반복 까지 제어 할 수 있습니다.
- 하나 또는 복수의 `@keyframes` 으로 이루어짐

### `@keyframes`

- `@keyframes` 키워드는 애니메이션을 정의하는 키워드 라고 할 수 있음

```css
@keyframes myAnimation {
    from {
        background-color : red;
        width : 100px;
        height : 100px;
    }
    to {
        background-color : blue;
        width : 200px;
        height : 100px;
    }
}
@keyframes myAnimation {
    0% {
        background-color : red;
        width : 100px;
        height : 100px;
    }
    30% {
        background-color : yellow;
    }
    100% {
        background-color : blue;
        width : 200px;
        height : 100px;
    }
}
```

- `from` 과 `to` 로 애니메이션이 시작하는 시점의 상태와 끝나는 시점의 상태를 정의 할 수 있다.
- `from` 은 `0%` 와 같다 `to`는 `100%`와 같다 % 단위로 애니메이션의 각 시점을 세밀하게 기술 할 수 있다.

```html
<div class="square"></div>
```
```css
.square {
    animation-name : myAnimation; // @keyframes 이름
    animation-duration : 3s; // 변화가 일어나는 기간, 초단위 (기본값 0s)
    animation-iteration-count : 3; (기본 값 1 number of infinite )
    animation-timing-function : ease; // 애니메이션 함수 지정 ( 기본값 ease )
    /* 
        애니메이션이 반복될때 진행 방향을 지정

        normal : from -> to (기본값)
        reverse : to -> from 
        alternate : 홀(normal) + 짝(reverse)
        alternate-resverse : 홀(reverse) 짝 (normal)
     */
     animation-direction : normal;
     /* 
        애니메이션이 실행 상태가 아닐때 (대기 or 종료 ) 요소의 스타일 지정
        none : 대기 -> 시작 프레임(from)에 설정한 스타일을 적용하지 않고 대기한다.
                종료 -> 애니메이션 실행 전 상태로 애니메이션 요소의 프로퍼티값을 되돌리고 종료한다.
        forwards : 대기 -> 시작 프레임(from)에 설정한 스타일을 적용하지 않고 대기한다.
                    종료 -> 종료 프레임(to)에 설정한 스타일을 적용하고 종료한다.
        backwards : 대기 -> 시작 프레임(from)에 설정한 스타일을 적용하고 대기한다.
                    종료 -> 애니메이션 실행 전 상태로 애니메이션 요소의 프로퍼티값을 되돌리고 종료한다.
        both :  대기 -> 시작 프레임(from)에 설정한 스타일을 적용하고 대기한다.
                종료 -> 종료 프레임(to)에 설정한 스타일을 적용하고 종료한다.
      */
    animation-fill-mode : none;

    animation-play-state : running; // running(기본값) || paused
    animation-delay : 1s; // 요소 로딩후 몇초 후에 애니메이션이 시작될 것인지 지정(기본값 0s)
    animation : (shorthand)
}
```

## `transform`

- 요소의 이동, 회전, 확대축소 , 비틀기 효과를 제공하는 함수
- 트랜지션, 애니메이션과 조합하여 사용하면 편리

### 사용법

```css
    transform : 함수1, 함수2, 함수3 // 트랜스폼 함수들을 쉼표없이 나열
    /* 
        transform-origin 속성은 요소의 기준점을 설정
        기본값은 요소의 정 중앙인 50% 50%이다.
     */
     transform-origin : 50% 50% 0 // ( x, y, z)
```

### 2d 트랜스폼

|transform function | 설명 | 단위 |
|------------------|------|------|
|`translate( x , y )` | 요소의 위치를 x축으로 x만큼 , y축으로 y만큼 이동 시킨다. | `px`, `%`, `em` 등 |
|`translateX(n)` | 요소의 위치를 x축으로 x만큼 이동시킨다. | |
|`translateY(n)` | 요소의 위치를 y축으로 y만큼 이동시킨다. | |
|`scale(x,y)` | 요소의 크기를 x축으로 x배 , y축으로 y배 확대또는 축소시킨다. | `0`과 양수 |
|`scaleX(n)` | 요소의 크기를 x축으로 x배 확대 또는 축소 시킨다. | |
|`scaleY(n)` | 요소의 크기를 y축으로 y배 확대 또는 축소 시킨다. | |  
|`skew(x-angle,y-angle)` | 요소를 x축으로 x각도만큼 , y축으로 y각도 만큼 기울인다 | +/- 각도(`deg`) | 
|`skewX(x-angle)` | 요소를 x축으로 x각도만큼 기울인다.| |
|`skewY(y-angle)` | 요소를 y축으로 y각도만큼 기울인다.| |
|`rotate(angle)` | 요소를 angle만큼 회전시킨다. | |

### 3d 트랜스폼

|transform function | 설명 | 단위 |
|------------------|------|------|
|`translate( x , y , z )` | 요소의 위치를 x축으로 x만큼 , y축으로 y만큼 z축으로 z만큼 이동 시킨다. | `px` , `%` , `em` 등 |
|`translateX(n)` | 요소의 위치를 x축으로 x만큼 이동시킨다. | |
|`translateY(n)` | 요소의 위치를 y축으로 y만큼 이동시킨다. | |
|`translateZ(n)` | 요소의 위치를 z축으로 z만큼 이동시킨다. | |
|`scale3d(x,y,z)` | 요소의 크기를 x축으로 x배 , y축으로 y배 z축으로 z배 확대또는 축소시킨다. | `0`과 양수 |
|`scaleX(n)` | 요소의 크기를 x축으로 x배 확대 또는 축소 시킨다. | |
|`scaleY(n)` | 요소의 크기를 y축으로 y배 확대 또는 축소 시킨다. | |  
|`scaleZ(n)` | 요소의 크기를 z축으로 z배 확대 또는 축소 시킨다. | |  
|`rotate3d(x,y,z)` | 요소를 x축으로 x각도, y축으로 y각도 z축으로 z각도 회전시킨다.  | +/- 각도(`deg`) |
|`rotateX(x)` | 요소를 x축으로 x각도 회전시킨다. | |
|`rotateY(y)` | 요소를 y축으로 y각도 회전시킨다. | |
|`rotateZ(z)` | 요소를 z축으로 z각도 회전시킨다. | |

- - -

# 참고 사이트

- [transition vs animation](https://ahribori.com/article/5a0c49926c9eef13d882e3ea)