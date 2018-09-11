# Gradient

- Gradient는 세가지 종류가 있다.
    1. `linear-gradient` : 선형 그레디언트
    1. `radial-gradient` : 반지름형 그레디언트
    1. repeating gradient : 반복형 그레디언트

- Gradient 를 지정할때 `background-image` 또는 `background` 속성을 사용합니다.

## `linear-gradient`

- `linear-gradient`는 선형 그라데이션 효과를 만들 수 있습니다

```css
div { background-image : linear-gradient(direction , color1, color2, ...,color3 )}
```

- `direction`은 그라데이션 방향을 나타냅니다.
    - `to bottom` : 위에서 아래로 그라데이션을 만듭니다 (default 값)
    - `to top` : 아래에서 위로 그라데이션을 만듭니다.
    - `to left` : 오른쪽에서 왼쪽으로 그라데이션을 만듭니다.
    - `to right` : 왼쪽에서 오른쪽으로 그라데이션으 만듭니다.
    - `Ndeg` : N도 방향으로 그라데이샨을 만듭니다.

- 색은 여러개 입력 할수 있으며 입력한 순서대로 설정한 방향으로 그라데이션을 만듭니다.

```css
div { background-image : linear-gradient(to right , yellow, red )}
```

- 왼쪽에서 오른쪽으로 노란색과 빨간색 순서로 그라데이션을 만듭니다.

```css
div { background-image : linear-gradient(to right , yellow 50%, red 60% , purple )}
```

- 해당 요소의 왼쪽에서 50%까지는 노란색 , 50% 초과 60% 이하는 빨간색, 나머지는 보래색인 그라데이션을 만듭니다.

### 색상 선택

- 우선 선을 그릴려면 색을 설정해야하는데 시작 색상, 끝 색상 이 2가지는 필수 입니다. 중간에 선택적으로 여러 생각을 넣을 수 있습니다.

- ex) linear-gradient(orange, yellow ,green);

- 색상ㅇ은 영문 색상이름, rgba , hsla 등 가능합니다.

### 방향 설정

- 방향을 지정할때 , 시작 지점은 생략하며 도착 지점만 `to`를 사용 합니다. (기본 값은 위에서 아래로)

- 왼쪽에서 오른쪽으로 지정
    - `div { background-image : linear-gradient(to right, black , #D5D5D5)}`
- 상단 오른쪽으로
    - `div { background-image : linear-gradient(to top right , black , #D5D5D5))}`
- 하단 왼쪽으로
    - `div { background-image : linear-gradient(to bottom left , black , #D5D5D5)}`

### 각도 설정

- `0deg`는 아래에서 위 방향

- `45deg`는 하단 왼쪽에서 상단 오른쪽 방향(즉 45도 방향)

- `90deg`는 왼쪽에서 오른쪽 방향

- `180deg`는 상단에서 하단 방향

- 음수 값도 가능함 `-45deg`

### 색상점 위치 지정하기

- 그레디언트 축에서 색상점의 위치를 지정 할 수 있는데 %나 길이값 (20px)도 가능합니다.

```css
div { background-image : linear-gradient(to bottom left , skyblue 5% , green 20% , white )}
```

### 투명도 설정

- 투명도를 추가 할라면 rgba의 마지막 파라미터는 0 ~ 1 사이의 값을 가질 수 있다.

- 0은 투명해지고 1은 선명해진다.

```css
div { background : linear-gradient(left , rgba(255,0,0,0), rgba(255,0,0,1))}
```

## `repeating-linear-gradient`

- 그라데이션을 반복합니다.

```css
div { background : radial-gradient(shape size at position , start-color , ..., last-color ) }
```

- 기본적으로 모양은 타원형, 크기가 먼 코너입니다. 그리고 위치는 센터입니다.

```css
div { background : radial-gradient(red, yellow ,green) }
```

- - -

**주의사항**

- 그레디언트를 지원하지 않는 브라우저를 위해 배경 색이나 배경 이미지를 넣어준다.

```css
div {
    background-color : skyblue ; /* fallback */
    background : linear-gradient( skyblue , white );
}
```



