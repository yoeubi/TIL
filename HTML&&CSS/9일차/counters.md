# CSS counters

- counters를 사용해 웹페이지의 제목에 자동으로 번호를 매길 수 있습니다.
- counters는 요소가 몇 번이나 사용되었는지 추적하여 css 규칙에 따라 증가하며, 본질적으로 변수입니다.

## `counter` 사용하기

### 카운터 값 조작하기

- CSS counter를 하려면 먼저 `counter-reset` 속성 (초깃값 0)을 사용하여 초기화 해야 합니다. 동일한 속성으로 값을 특정 값으로 바꿀 수도 있습니다.
- 초기화 된 `counter`의 값은 `counter-increment`에 따라 증가하거나 감소합니다. `counter`의 이름으로 `none`, `inherit`, `initail` 은 사용불가합니다. 사용하면 선언은 무시됩니다.

### 카운터 표시하기

- `counter`의 값은 `content` 속성에서 `counter()` 나 `counters()`함수를 사용하여 표시 할 수 있습니다.

- `counter()`함수는 `counter(name)`와 `counter(name,style)` 두 가지 형태로 사용 할 수 있습니다. 생성된 텍스트는 가상 요소가 속한 범위에 있는 이름(name)의 가장 안쪽 counter의 값입니다. 텍스트는 지정된 서식(기본 값은 10진수 decimal)으로 뿌려집니다.

- `counters()`함수도 `counters(name, string)`나 `counters(name,string ,style)` 두가지 형태로 사용 할 수 있습니다. 
- 생성된 텍스트는 가상 요소가 속한 모든 범위에서 지정된 이름을 가진 `counters`의 값으로 바깥 쪽부터 안쪽까지 값이 주어지며 지정된 문자열로 구분됩니다. `counters`는 지정된 스타일(기본 값은 10진수 decimal)로 렌더링 됩니다.

#### 기본 예제

```css
body {
    counter-reset : section; // counter 이름을 section으로 지정합니다 초기값은 0입니다.
}
h3::before {
    counter-increment : section // section의 카운터 값을 1씩 증가시킵니다.
    content : counter(section); // section의 카운터 값을 표시합니다.
}
```

## 중첩 카운터

- CSS counter는 자식요소안에서 새인스턴스를 자동으로 만들어주어 목차를 만드는데 유용합니다. `counters()`함수를 사용해 중첩된 다른 레벨의 카운터 사이를 분리하는 글자를 지정할 수 있습니다.

### 중첩 카운터 예제

```css
ol {
    counter-reset : section; // ol요소마다 이름이 section인 새 인스턴스를 생성합니다.
    list-style-type : none;
}
li::before {
    counter-increment : section; // 해당 인스턴스 안에서 section 카운터 값 증가
    content : counters(section, ".") " "; // section 카운터 값을 마침표로 구분해 결합하여 표시합니다.
}
```
```html
<ol>
  <li>item</li>          <!-- 1     -->
  <li>item               <!-- 2     -->
    <ol>
      <li>item</li>      <!-- 2.1   -->
      <li>item</li>      <!-- 2.2   -->
      <li>item           <!-- 2.3   -->
        <ol>
          <li>item</li>  <!-- 2.3.1 -->
          <li>item</li>  <!-- 2.3.2 -->
        </ol>
        <ol>
          <li>item</li>  <!-- 2.3.1 -->
          <li>item</li>  <!-- 2.3.2 -->
          <li>item</li>  <!-- 2.3.3 -->
        </ol>
      </li>
      <li>item</li>      <!-- 2.4   -->
    </ol>
  </li>
  <li>item</li>          <!-- 3     -->
  <li>item</li>          <!-- 4     -->
</ol>
<ol>
  <li>item</li>          <!-- 1     -->
  <li>item</li>          <!-- 2     -->
</ol>
```

- - -

# counter-increment

```html
<body>
  <section></section>
  <section></section>
  <section></section>
  <section></section>
</body>
```
```css
body {
  counter-reset: my-awesome-counter;
}
section {
  counter-increment: my-awesome-counter;
}
section:before {
  content: counter(my-awesome-counter);
}
```

- section은 1,2,3,4로 시작할 것이다. 그리고 숫자가 아닌 다른 숫자스타일로 변경 할 수 있다.

```css
section:before {
  content: counter(my-awesome-counter, upper-roman);
}
```


- - -

# 참고 사이트

- [MDN](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)

- [CSS TRICK](https://css-tricks.com/almanac/properties/c/counter-increment/)