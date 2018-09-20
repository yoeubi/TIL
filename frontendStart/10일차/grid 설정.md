# grid 레이아웃

## `grid` 표시 설정

```css
.block-grid {
    display : grid;
}
.inline-grid {
    display : inline-grid;
}
```

- `grid`는 `block`형태의 `grid` `inline`형태의 `inline-grid`가 있습니다. 

## 그리드 설정

- 그리드 컨테이너 요소를 정하고 그리드 포맷팅 컨텍스트(Grid Formatting Context) 영역을 생성합니다.

|속성|값|비고|
|---|--|----|
|`display`|`grid`|  |
|   |`inline-grid`|   |
|   |`subgrid`|Level2에서 지원 예정|

```css
.grid-container {
    display: grid /* grid | inline-grid */
}
```

- `float` , `clear` , `column` , `vertical-align` 속성은 그리드 컨테이너 요소에 적용되지 않습니다.

## column / row 설정

```css
.grid {
    display : grid;

    /* 2행 */
    grid-template-rows : 100px 100px;

    /* 3열 */
    grid-template-columns : 150px 200px 150px;
}
```

- 값의 개수에 따라 행과 열이 생긴다.

## 그리드 행/열 템플릿 설정

- 공백으로 구분된 값 리스트를 해석하여 그리고 행(row) , 열(column)을 설정합니다. 각 값은 트랙 크기를 말합니다.


| 속성 | 값 | 비고|
|-----|----|--|
|`grid-template-rows`| `<track-size>` ...|  |
|   |`<line-name><track-size>` ... |  |
|`grid-template-columns` | `<track-size>`|  |
|   |`<line-name><track-size>` ...|   |

### 값

- `<track-size>` : 그리드에서 사용 가능한 공간의 길이( `px` , `rem`, `em` ,  `% , `fr`[단위 비율] 등)
- `<line-name>` : 사용자가 설정한 임의의 선 이름

### 예시

- 그리드 컨테이너 요소에 행/열 템플릿을 설정합니다.

```css
.grid-container {
    grid-template-rows : 25% 100px auto;
    grid-template-columns : 40px 50px auto 50px 40px;
}
```

- `px`은 반응형에서 고정이 되고 `auto`는 창크기에 따라 변경이 된다.

# gutters 설정

- `gutter`는 `cell`과 `cell` 사이 의 간격이다. 속성에서는 `grid-gap`이라고 사용한다.

```css
.grid {
    display : grid;

    /* 로우 갭(row gap) 설정 */
    grid-column-gap : 10px;

    /* 컬럼 갭(column gap) 설정 */
    grid-column-gap : 10px;

    /* 속기형 갭(shortcode gap) 설정 */
    grid-gap : 10px;
}
```

- 속기형의 경우 열사이의 간격을 바꿀라면 2번쨰 속성값을 주면 된다.
- `%`는 부모영역이 아니라 컨텐츠 영역에 상대적으로 설정이 된다. 

## `fr` 단위

- 비율을 의미한다

```css
.grid {
    display : grid;

    /* Fraction(fr) 단위 */
    grid-template-rows : 1fr 1fr;
    grid-template-columns : 1fr 1.3fr 1fr;
}
```

- 원래 가지고 있던 공간(`width`, `height`)에서 비율을 가지게 된다.
- 그리드 컨테이너 여유공간의 비율을 나눌때 사용한다. `calc()`는 쓸 수 없다.
- 만약 동일한 값을 여러번 사용한다면 `repeat()`를 사용하면 된다.

## `repeat()` 함수

- 행 또는 열을 반복할때 사용한다.

```css
.grid {
    display : grid;

    /* repeat() , css 함수 사용법 */
    grid-template-rows : repeat(2, 1fr);
    grid-template-columns : repeat(3, 1fr 2fr);
                                /*(반복 횟수 , 그리드 트랙 리스트(배열) )  */
}
```

- 반복 횟수는 음수는 안되면 뒤에는 배열을 입력한다.

## `minmax()` 함수

```css
.grid {
    display : grid;

    /* minmax() , CSS 함수 사용법 */
    grid-template-rows : repeat(2, minmax(20px , auto));
    grid-template-columns : minmax(30px , auto) repeat(3 ,1fr);
                              /* (최솟값 , 최댓값)  */
}
```

- 최솟값과 최댓값을 제공해주는 것이다. 
- `px`은 고정이지만 `auto`는 컨텐츠의 크기에 따라 자동으로 늘어난다.
- `min` 보다 크거나 같고 `max`보다 같거나 작은 범위를 가진다.

## 암시적 column , row 사이즈 auto 설정 

```css
.grid {
    display : grid;

    /* 암시적(Implict)으로 그리드 트랙 사이즈 자동 설정 */
    /* 행(row) */
    grid-auto-rows : 100px;
    /* 열(column) */
    grid-auto-columns : 150px;
}
```

- `grid-template`는 명시적 `grid-auto`는 암시적이다.

### 그리드 행/열 자동 설정

- 암시적인 그리드 행/열 트랙 크기를 자동으로 설정합니다.

#### 암시적 그리드 트랙이란?

- 사용자가 설정하지 않은 임의의 트랙으로, 사용자가 명시적으로 grid-template-rows / grid-template-columns 속성을 설정하지 않은 나머지 그리드 트랙을 가리킵니다.

| 속성 | 값  | 비고|
| grid-auto-rows | <track-size> ... |   |
| grid-auto-columns | <track-size> ... | |

#### 값

- `<track-size>` : 그리드에서 사용 가능한 단위( px , rem , em , % , fr 등)

#### 예시 

- 사용자가 명시적으로 행/열 템플릿 속성을 설정하면 그리드 트랙 크기로 적용됩니다.

```css
.grid-container {
    grid-template-rows : repeat(2,60px);
    grid-template-columns : 90px 90px;
}
```

- 결과는 2행 2열 그리드가 만들어집니다.

- `min-content`는 컨텐트의 개수만큼 공간 박스를 형성한다.
- `fit-content`는 컨텐츠에 피팅해주는 것이다.
- `grid-auto`는 속기형이 없다.

## 라인 기반 위치 설정

### grid line

- 그리드 라인을 기준으로 하여 그리드 아이템 위치를 설정할 수 있다.

```css
.grid {
    display : grid;
    grid-template-columns : repeat(3, 150px);
    grid-template-rows : repeat(2, 150px);
}
.item:nth-child(1) {
    /* 그리드 아이템을 열[3,4] 행[2,3] 위치에 배치 */
    grid-column-start : 3 ;
    grid-column-end : 4;
    grid-row-start : 2;
    grid-row-end : 3;
}
```

- 적용이 가능한 곳은 그리드 아이템이다. 그리드 아이템과 절대 위치 설정된 블록 박스를 포함하는 그리드 컨테이너에 적용할 수 있다.

### grid line

- 그리드 라인 속성을 속기형으로 작성할 수 있습니다.

```css
.grid {
    display: grid;
    grid-template-columns : repeat(3, 150px);
    grid-template-rows : repeat(2, 150px);
}
.item:nth-child(1){
    /* 그리드 아이템을 열[3,4] 행[2,3] 위치에 배치 */
    grid-column : 3 / 4;
    grid-row : 2 / 3 ; 
}
```

- `grid-column` , `grid-row` 를 줄여서 `grid-area`라고 사용 할 수 있다.

### grid span

- 그리드 라인 속성에 `span`을 사용하여 기준 점에서 상대적으로 위치 설정이 가능합니다.

```css
.grid {
    display : grid;
    grid-template-columns : repeat(4, 150px);
    grid-template-rows : repeat(3, 150px);
}
.item:nth-child(1) {
    /* 열 3을 기준으로 하여 +2만큼(아랫 방향) 그리드 트랙을 설정합니다. */
    grid-column : 3/ span 2;
    /* 행 4를 기준으로 하여 -2만큼(위 방향) 그리드 트랙을 설정합니다. */
    grid-row : span 2 / 4;
}
```

- `span`은 범위이다. 그리드 아이템의 기본 `span` 값은 1이다.
- `grid-template`는 `column` 과 `row`의 속기형이며 앞의 값이 `row` 뒤의 값이 `column` 이다.
- 인덱스가 크면 클수록 마지막 인덱스 번호를 알기 힘든다 그리드 모듈에서 마지막 위치를 -1을 주면 동일하게 작동한다.
- 순차적인 흐름을 가지고 있으면서 라인 기준으로 위치를 변경할 수 있다.

## 아이템 순서 설정

```css
.grid {
    display : grid;
    grid-template-columns : repeat(3, 1fr);
    grid-template-rows : repeat(2, minmax(50px , auto));
}
.item:nth-child(1) {
    /* 그리드 아이템 순서 설정 (자동 배치 내) */
    order : 2;
}
.item:nth-child(2) {
    order : 3;
}
.item:nth-child(3) {
    order : 1;
}
```

- 모든 아이템의 `order`가 0이다 음수를 쓰면 앞으로 이동, 큰 값을 쓰면 뒤로 이동한다.
- `order`는 임의의 순서를 바꿀때 사용한다. 순서를 변경해도 접근성에 문제가 발생하지 않는 경우에만 사용해야한다.

### 그리드 템플릿 영역 설정

- `grid-area`속성으로 설정된 그리드 영역의 이름을 참조하여 , 그리드 템플릿 영역을 설정할 수 있습니다. 그리드 영역 이름을 반복하면 그리드 셀을 병합(merge, span) 합니다. 그리고 마침표(.)는 비어있는 그리드 셀을 말합니다.

|속성|값|비고|
|---|---|---|
|`grid-template-areas`|`<grid-area-name>`|  |
|   | `.`|    |
|   |`none`|  |

#### 값

- `<grid-area-name>`: 사용자가 `grid-area` 속성 값으로 설정한 임의의 그리드 영역 이름
- 마침표(`.`) : 비어있는 그리드 셀
- `none`: 그리드 영역으로 정의되지 않는 셀

#### 예시

- 다음은 3행 4열 그리드 템플릿 영역 설정 예시입니다.

```css
/* 그리드 영역 이름 설정 */
.grid-header { grid-area : "header"; }
.grid-main { grid-area : "main"; }
.grid-sidebar { grid-area : "sidebar"; }
.grid-footer { grid-area : "footer"; }
.grid-container {
    grid-template-rows : repeat(3, 300px);
    grid-template-columns : repeat(4, 1fr);

    /* 그리드 템플릿 영역 설정  각 행은 동일한 개수의 열 설정이 요구됩니다. */
    grid-template-areas :
    "header header header header"  /* 1행 : 4열 모두 header */
    "main main . sidebar"          /* 2행 : 2열 main 1열 공백 1열 sidebar */
    "footer footer footer footer"; /* 3행 : 4열 모두 footer */
}
```

- `none`의 경우 설정되지 않았다는 의미이다.

## 자동 배치 흐름 설정

```css
.grid {
    display : grid;
    /* 
        자동 배치 흐름 설정
        row(기본값)
        column
        dense (밀집한다 빈곳을 채운다는 의미아다.)
        row dense
        column dense
    */
    grid-auto-flow : column;
}
```

- 자동 배치하는 기능이다 

### 그리드 자동 플로우 설정

- 그리드에 명시적으로 배치(레이아웃) 되지 않은 아이템이 있을 경우 , 자동 배치 알고리즘이 실행되어 자동으로 배치되도록 설정할 수 있습니다. 속성 값에 따라 자동 배치 알고리즘 작동 방식이 달리집니다.

|속성|값|비고|
|---|--|----|
|`grid-auto-flow` | `row` | 기본값|
|   | `column` | |
|   | `dense` |   |

#### 값

|  값 | 설명|
| `row` | 각 행을 차례로 채우고 필요에 따라 새 행을 추가하는 자동 배치 알고리즘 |
| `column` | 각 열을 차례로 채우고 필요에 따라 새 열을 추가하는 자동 배치 알고리즘 |
| `dense` | 배치 중 나중에 크기가 작은 아이템이 존재할 경우 , 그리드 영역 앞부분의 남은 공간에 자동 배치하는 알로리즘 |

#### 예시

HTML 스타일
```html
<section class="grid-container">
    <div class="item-a">item-a</div>
    <div class="item-b">item-b</div>
    <div class="item-c">item-c</div>
    <div class="item-d">item-d</div>
    <div class="item-e">item-e</div>
</section>
```

CSS 스타일
- 5행 2열 그리드를 생성한후 , 자동 배치 알고리즘 값을 `row`로 설정합니다. (기본 값이라 생략해도 무방) 

```css
.grid-container {
    display : grid;
    grid-template : repeat(5, 60px) / repeat(2 , 30px);
    grid-auto-flow : row;
}
```

- `.item-a` , `.item-e` 두 아이템에 행/열 배치를 설정합니다.

```css
.item-a {
    grid-row : 1/3 ;
    grid-column : 1;
}
.item-e {
    grid-row : 1 / 3 ;
    gird-column : 5;
}
```

- `grid-auto-flow`값이 행(`row`)이기에 별도로 배치 설정을 하지 않은 `.item-b` , `.item-c` , `.item-d`는 행축에 따라 자동 배치됩니다.

- 자동 배치 알고리즘 설정을 행에서 열로 변경하면서, 배치 설정이 되지않은 아이템은 모두 옆에 맞춰 자동 배치됩니다.

```css
.grid-container {
    ...
    grid-auto-flow : column;
}
```

## 행축(row axis) 기준, 아이템 콘텐츠 정렬

- 행(`row`)축을 따라 그리드 아이템 내부 콘텐츠를 정렬합니다.(`align-items` 속성의 반대) 이 설정은 그리드 컨테이너 내부 모든 그리드 아이템에 적용됩니다.

|속성|값|비고|
|---|--|----|
|`justify-items`|`start`|   |
|   |`center`|    |
|   |`end`|   |
|   |`stretch`|기본값|

### 값

- `start` : 그리드 영역의 시작점에 콘텐츠 정렬
- `center` : 그리드 영역의 끝점에 콘텐츠 정렬
- `end` : 그리드 영역의 중앙에 콘텐츠 정렬
- `stretch` : 그리드 영역 전체 너비를 채움(기본 값)

### 예시

```css
.grid-container {
    justify-item : start;
}
.grid-container {
    jusityfy-item : center;
}
```

- 정렬은 부모에게 주는 정렬이 있고 자식들에게 주는 개별 정렬이 있다.
- `justify-items`는 부모에게 주는 속성이다.
- 가로 축은 `justify-items` 세로 축은 `align-items` 이다.

## 열축(column axis) 기준 , 아이템 콘텐츠 정렬

- 열(column) 축을 따라 그리드 아이템 내부 콘텐츠를 정렬합니다. (`justify-items` 속성의 반대) 이 설정은 그리드 컨테이너 내부 모든 그리드 아이템에 적용됩니다.

|속성|값|비고|
|---|--|----|
|`align-items`|`start`|   |
|   |`center`|    |
|   |`end`|   |
|   |`stretch`|기본값|

### 값

- `start` : 그리드 영역의 시작점에 콘텐츠 정렬
- `center` : 그리드 영역의 끝점에 콘텐츠 정렬
- `end` : 그리드 영역의 중앙에 콘텐츠 정렬
- `stretch` : 그리드 영역 전체 너비를 채움(기본 값)

### 예시

```css
.grid-container {
    align-items : start;
}
```

## 행축(row axis), 그리드 아이템 트랙 정렬

- 그리드 컨테이너의 크기보다 작은 그리드 아이템 트랙(px과 같은 고정 단위로 설정된 경우)의 크기라면 , 아이템 트랙을 정렬 할 수 있습니다. 이 속성은 행(row)축을 따라 그리드 아이템 트랙을 정렬합니다. (align-content 속성의 반대)

|속성|값|비고|
|---|--|----|
|`justify-content`|`start`|   |
|   |`center`|    |
|   |`end`|   |
|   |`stretch`||
|   |`space-around`||
|   |`space-between`||
|   |`space-evenly`||

### 값

- `start` : 그리드 컨테이너 영역의 시작점에 아이템 트랙을 정렬
- `center` : 그리드 컨테이너 영역의 중앙에 아이템 트랙을 정렬
- `end` : 그리드 컨테이너 영역의 끝점에 아이템 트랙을 정렬
- `stretch` : 그리드 컨테이너 영역을아이템 트랙 크기를 조정하여 채움
- `space-around` : 그리드 컨테이너의 남은 영역을 아이템 트랙(열)이 좌/우 공간으로 나눔(양 가장자리 공간은 아이템 그룹 사이 간격의 1/2 )
- `space-between` : 그리드 컨테이너 영역의 양 가장가리 공백없이, 아이템 트랙(열) 사이 공간을 나눔.
- `space-evenly` : `space-around`와 비슷해보이지만 공간을 모두 동일하게 나누는 점이 다름

### 예시

```css
.grid-container {
    justify-content : start;
}
```

## 열축(column axis) 그리드 아이템 트랙 정렬

- 그리드 컨테이너의 크기보다 작은 그리드 아이템 트랙(px 와 같은 고정 단위로 설정된 경우 )의 크기라면 , 아이템 트랙을 정렬할 수 있습니다. 이 속성은 열(column) 축을 따라 그리드 아이템 트랙을 정렬합니다. (`justfy-content` 속성의 반대 )

|속성|값|비고|
|---|--|----|
|`align-content`|`start`|   |
|   |`center`|    |
|   |`end`|   |
|   |`stretch`||
|   |`space-around`||
|   |`space-between`||
|   |`space-evenly`||

### 값

- `start` : 그리드 컨테이너 영역의 시작점에 아이템 트랙을 정렬
- `center` : 그리드 컨테이너 영역의 중앙에 아이템 트랙을 정렬
- `end` : 그리드 컨테이너 영역의 끝점에 아이템 트랙을 정렬
- `stretch` : 그리드 컨테이너 영역을 아이템 트랙 크기를 조정하여 채움
- `space-around` : 그리드 컨테이너의 남은 영역을 아이템 트랙(행)이 좌/우 공간으로 나눔(양 가장자리 공간은 아이템 그룹 사이 간격의 1/2 )
- `space-between` : 그리드 컨테이너 영역의 양 가장가리 공백없이, 아이템 트랙(행)) 사이 공간을 나눔.
- `space-evenly` : `space-around`와 비슷해보이지만 공간을 모두 동일하게 나누는 점이 다름

### 예시

```css
.grid-container {
    align-content : start;
}

## CSS Grid 속성 정리

```
| 그리드 컨테이너 | 그리드 아이템 |
|:------:|:-----:|
| `display`  | `grid-row-start`  |
| `grid-template-rows`  | `grid-row-start`  |
| `grid-template-columns`   | `grid-column-start`  |
| `grid-template-areas`   | `grid-column-end`  |
| `grid-template`  | `grid-row`  |
| `grid-row-gap`  | `grid-column`  |
| `grid-column-gap`  | `grid-area`  |
| `grid-gap`  | `justify-self`  |
| `justify-items`  | `align-self`  |
| `align-items`  |   |
| `justify-content`  |   |
| `align-content`  |   |
| `grid-auto-rows`  |   |
| `grid-auto-column`  |   |
| `grid-auto-flow`  |   |
| `grid`  |   |
```

content는 부모가 위드가 하이트에 공간이 있을때 가로 세로 정렬할수 있다.

## 그리드 단축 속성 설정

- 하나의 속성에 다음 속성들을모두 일괄 설정할 수 있는 grid 속기형 속성입니다.
    - grid-template-rows
    - grid-template-columns
    - grid-template-areas
    - grid-auto-rows
    - grid-auto-columns
    - grid-auto-flow

```
|속성|값|비고|
|---|--|---|
|`grid` | `none`|   |
|   |`<grid-template-rows>` / `<grid-template-columns>` |    |
|   |`<grid-auto-flow>` [`<grid-auto-rows>`  [ / `<grid-auto-columns>`] ] |
```

### 값

```
|값|설명|
|none| 모든 속성을 초기값으로 적용|
|`<grid-template-rows>` / `<grid-template-columns>`| `grid-template-rows` `grid-template-columns` 속성 설정|
|`<grid-auto-flow>` [`<grid-auto-rows>`  [ / `<grid-auto-columns>`] ] |
`grid-auto-flow` , `grid-auto-rows`, `grid-auto-columns` 속성 설정|
```

### 예시

2행 3열 그리드 설정입니다.

```css
.grid-container {
    grid-template-rows: 200px auto;
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas : none;
}
```

위 설정을 grid 속기형 속성으로 작성하면 다음과 같습니다.

```css
.grid-container {
    grid : 200px auto / 1fr auto 1fr;
}
```

column 자동 배치 알고리즘 설정에 암시적인 행/열 크기 설정입니다.

```css
.grid-container {
    grid-auto-flow : column;
    grid-auto-rows : 1fr;
    grid-auto-columns : auto;
}
```

위의 설절을 속기형으로 작성하면 다음과 같습니다.

```css
.grid-container {
    grid : column 1fr / auto;
}
```

좀 더 복잡하지만 다음 속성을 모두 포함하는 속기형 작성을 사용하면 보다 편리합니다.
    - grid-template-rows
    - grid-template-columns
    - grid-template-areas

설정되지 않은 다른 속성은 기본 값으로 설정됩니다.

```css
.grid-container {
    grid : 
    [row-1-start] "header header header" 1fr [row-1-end]
    [row-2-start] "footer footer footer" 60px [row-2-end]
    / auto 100px auto;
}
```

사용자가 임의로 설정한 선 이름( [이름] )을 사용할 수도 있습니다.

```css
.grid-container {
    grid-template-rows : [row-1-start] 25% [row-1-end] 100px [third-line] auto [last-line];
    grid-template-columns : [first] 40px [line2] auto [col4-start] 50px [five] 40px [end];
}
```

선 이름은 1개 이상 설정하는 것도 가능합니다.
방법은 [이름-1, 이름-2]와 같이 [] 내부에 공백으로 구분된 이름을 추가하면 됩니다.

```css
.grid-container {
    grid-template-rows : [row-1] 100px [row-1-end ,row-2-start] 305 [row-2-end];
}
```

설정이 반복되는 경우 repeat() 함수를 사용하여 손쉽게 설정할 수 있습니다.

```css
.grid-container {
    grid-template-rows : repeat(3, 80px [row-start]) 5%;
    /* 결과 80px [row-start] 80px [row-start] 80px [row-start] 5% */
    grid-template-columns : repeat(2, 15% 30px ) auto;
    /* 결과 : 15% 30px 15% 30px auto */
}
```





