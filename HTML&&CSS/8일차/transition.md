# `transition`

- CSS `transition`은 CSS 속성을 변경할때 애니메이션 속도를 조절하는 방법을 제공합니다. 속성 변경이 즉시 영향을 미치게 하는 대신 그 속성의 변화가 일정 기간에 걸쳐서 일어나게 할 수 있습니다. 예를 들어 어떤 요소의 색상을 흰색에서 검정색으로 변경한다면, 변화는 대개 즉시 일어납니다. CSS 트랜지션을 이용하면 모두 커스터마이즈 가능한 어떤 가속도 곡선을 따르는 시간 주기마다 변화가 일어납니다.

![trasition 설명](https://developer.mozilla.org/files/4529/TransitionsPrinciple.png)

- CSS transition은 (명시적으로 목록을 작성해서) 어떤 속성을 움직이게 할지, (딜레이를 설정해서) 언제 애니메이션을 시작할지 , (지속 시간을 설정해서) 트랜지션을 얼마나 지속할지 , 그리고 (선형이거나 초기 빠름, 종료 느림과 같은 타이밍 함수를 정의해서) 어떻게 트랜지션을 실행하는지 결정하게 됩니다.

- `transition-property`는 트랜지션을 적용해야 하는 CSS 속성의 이름을 명시합니다. 여기에 나열한 속성만 트랜지션하는동안 움직입니다.
- `transition-duration`은 트랜지션이 일어나는 지속 시간을 명시합니다. 트랜지션 동안 모든 속성에 적용하는 단일 지속 시간을 명시하거나, 다른 주기로 각 속성이 트랜지션하게 하는 여러 지속 시간을 명시할 수 있습니다.
- `transition-timing-function`은 속성의 중간값을 계산하는 방법을 정의하는 함수를 명시합니다. 
- `transition-delay`는 속성이 변한 시점과 트랜지션이 실제로 시작하는 사이에 기다리는 시간을 정의합니다.

## 문법

```css
div {
    transition : <property> <duration> <timing-function> <delay>
}
```
### 속성값 목록이 다른 개수를 가진 경우

- 어떤 속성의 값 목록이 다른것보다 짧다면 일치되도록 그 값을 반복합니다

```css
div {
    transition-property : opacity, left, top, height;
    transition-duration : 3s , 5s; // 3s 5s 3s 5s; 와 같습니다.
}
```

- 어떤 속성의 값 목록이 `trasition-property`목록보다 길다면, 그것을 끝을 잘라냅니다.

```css
div {
    transition-property : opacity , left;
    transition-duration : 3s , 5s,  3s , 1s; // 3s 5s 와 같습니다.
}
```

- - -

# 참고 사이트

[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)