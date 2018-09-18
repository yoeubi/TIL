# `:nth-child`

- `:nth-child(n)` 선택자를 사용하여 여러 개의 항목이 일렬로 나열되어 있는 경우, class 나 id를 사용하지 않고 스타일을 지정할 항목이 몇번쨰에 있는지 따져서 스타일을 적용 할 수 있습니다.

```html
<ul class="list">
    <li>1번쨰</li>
    <li>2번쨰</li>
    <li>3번쨰</li>
    <li>4번쨰</li>
    <li>5번쨰</li>
    <li>6번쨰</li>
    <li>7번쨰</li>
    <li>8번쨰</li>
</ul>
```

## 원하는 자식을 숫자로 선택 할 수 있습니다.

### 다섯번쨰 선택하기

- 선택하고자 하는 종류의 태그 뒤에 `:nth-child()`라고 쓰고 괄호 안에 원하는 숫자를 써줍니다.

```css
.list li:nth-child(5){
    background-color : #ffff00;
}
```

### 3의 배수로 선택하기

- 선택하고자 하는 종류의 태그 뒤에 `nth-child()`라고 쓰고 괄호 안에 원하는 숫자 + n 을 써줍니다.

```css
.list li:nth-child(3n){
    background-color : #ffff00;
}
```

### 두번쨰 글 선택 후 3의 배수로 선택하기

```css
.list li:nth-child(3n+2){
    background-color : #ffff00;
}
```

## 홀수와 짝수로 선택 할 수 있습니다. 

### 홀수 선택하기

- 선택하고자 하는 종류의 태그뒤에 `:nth-child()`라고 쓰고 괄호안에 `odd`라고 씁니다.

```css
.list li:nth-child(odd){
    background-color : #ffff00;
}
```

### 짝수 선택하기

- 선택하고자 하는 종류의 태그 뒤에 `:nth-child()`라고 쓰고 괄호안에 `even`이라고 써줍니다. 

```css
.list li:nth-child(even){
    background-color : #ffff00;
}
```

## 뒤에서 부터 선택 할 수 있습니다.

### 뒤에서 두번쨰 선택하기

- 선택하고자 하는 종류의 태그 뒤에 `nth-last-child()`라고 쓰고 괄호안에 `원하는 숫자`를 써줍니다.

```css
.list li:nth-child(2){
    background-color : #ffff00;
}
```

### 뒤에서 첫번째 글 선택후 3배수로 선택하기

```css
.list li:nth-child(3n + 1){
    background-color : #ffff00;
}
```

- - -

# `:nth-child`

- `:nth-child`는 소스 순서를 기반해서 하나 또는 여러개 요소를 선택하게 만들 수 있다.
- 그들의 부모 자식간의 관계를 기반으로 스타일을 지정하는데 사용됩니다.

```html
<section class="grid">
  <article class="module">One</article>
  <article class="module">Two</article>
  <article class="module">Three</article>
  <article class="module">Four</article>
  <article class="module">Five</article>
</section>
```

- 여기서 4번쨰를 선택할라면 `.last`라는 클래스를 추가하는 방법도 있지만 `:nth-child`를 사용할 수 있다.

```css
.module:nth-child(4n) {
  margin-right: 0;
}
```

- `:nth-child`는 인수가 필요합니다 단일한 정수( 1, 2, 3, 4 ...) 또는 키워드 `even` , `odd`또는 수식이 있습니다. 정수가 지정된 경우 하나의 요소만 선택이 되자만 키워드 또는 수식인경우 부모 요소의 모든 자식 요소들을 반복해서 일치하는 요소를 찾습니다.
- 수식은 `[숫자]n + [숫자]`입니다. 수식의 `n`은 증가하는 양의 정수 집합을 나타냅니다.
- 만약 `-n`으로 설정하고 양의 정수를 더한다면(:nth-child(-n + 3)) 순서상에서 세번째까지만 선택이 됩니다.
- 만약 위의 예에서 4번쨰 요소를 선택할려고 하면 `4n`이라고 하면 됩니다. 이는 요소가 검사 될떄마다 `n`이 1씩 증가하기 떄문입니다. (4 * 0 , 4 * 1 , 4 * 2 , ....)

- `:nth-child`는 소스 순서 맨위에서 시작해여 찾습니다 하지만 `:nth-last-child`는 소스 순서 맨 아래에서 시작합니다.
- `:nth-child`는 `:nth-of-type`과 비슷하지만 중요한 차이가 있습니다. 그것은 `:nth-child`는 같은 타입의 형제요소가 아닌 모든 형제요소에서 선택합니다.. 

- - -

# 참고 사이트 

[:nth-child()](http://html5around.com/wordpress/tutorials/css3-nth-child/)

[CSS-TRICK](https://css-tricks.com/almanac/selectors/n/nth-child/)