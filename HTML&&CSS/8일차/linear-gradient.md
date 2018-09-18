# linear-gradient

- `linear-gradient()` 함수는 선형 컬러 그레디언트를 나타내는 image를 만들어낸다.
- 함수의 결과 값은 CSS `<gradient>` 데이터 형의 객체이다. `<color>`가 아니다.
- 본래의 크기가 없는 이미지이다. 즉 미리 정해진 또는 우선시 되는 크기가 비율은 없다. 실제적인 크기는 그레디언트가 적용되는 요소에 맞추어진다.

![linear-gradient](https://developer.mozilla.org/files/3537/linear-gradient.png)

- 선형 그레디언트는 그레디언트 라인(gradient line)이라는, 각각의 점이 다른 컬러값을 갖는 하나의 축으로 정의된다. 그레디언트 라인에 직교하는 선은 하나의 색상값만을 갖는다.
- 선형 그레디언트의 반복 효과를 구현하고 싶다면 `repeating-linear-gradient`속성을 사용하면 된다.
- 색상점(color stop point)는 자신 이전과 이후에 정의된 점의 중간 지점에 묵시적으로 정의된다. 색상점의 위치는 `<length>` 또는 `<percentage>`를 사용한다면 명시적으로도 정의가 가능하다.
- 그레디언트는 CSS `<image>` 데이터 타입으로 정의된다. 그렇기에 `<image>`데이터 타입이 사용가능한 곳은 어디든지 그레디언트를 적용할 수 있다. 그래서 `linear-gradient`는 `background-color`와 `<color>` 데이터 타입으로 지정되어야 하는 속성들에는 사용 할 수 없다.

```css
linear-gradient( [ deg(도) 또는 방향키워드 ] , 컬러 [ % 또는 길이(px , 등등)] [, 컬러...  ])]
                /*  그레디언트 라인을 정의  */ /* 색상점(color stop point )정의 */
/* 방향키워드는 `left` , `right` , `top` , `bottom` */
linear-gradient( 45deg, blue, red );           /* 45도 기울기, blue로 시작해서 red로 종료되는 그레디언트 */
linear-gradient( to left top, blue, red);      /* bottom, right에서 시작해서 top, left에서 종료, blue로 시작해서 red로 종료되는 그레디언트 */
linear-gradient( 0deg, blue, green 40%, red ); /* bottom에서 시작해서 top에서 종
```

- 그레디언트 라인의 시작점(starting point)를 나타낸다. 수평속성(`left`,`right`)키워드 하나와 수직속성(`top`, `bottom`) 하나 , 총 2개의 값으로 구성이 된다. 2개의 값의 순서는 중요하지 않으면 각 키워드는 옵션으로 생략이 가능하다. 
- 색상점은 `<color>`값들로 구성되면 색상점 위치값(그레디언트 축 상의 0 ~ 100%의 비율값 또는 `<length>`값)이 붙는다.

## 여러개의 색상점(color stops)을 포함하는 그레디언트

- 만약 첫번째 색상점(color-stop)에 `<length>`나 `<percentage>`가 지정되지 않았다면? 해당 속성은 기본값으로 0%가 된다 그리고 마지막 색상점 또한 지정이 안되어있다면 기본값으로 100%가 지정된다. 만약 추가된 색상점의 `<length>`나 `<percentage>`가 지정되지 않았다면 그 색상점은 이전 점과 다음 점의 중간에 위치 하게 된다.
- 만약 중간 색상점의 위치가 이전 색상점들의 위치보다 작게 지정이 된다면 그 위치 값은 무시가 된다.

## 투명도 설정

```css
background-image : linear-gradient(to bottom right , red , rgba(255,0,0,0))
```


- - -

# 참고 사이트

- [MDN](https://developer.mozilla.org/ko/docs/Web/CSS/linear-gradient)
