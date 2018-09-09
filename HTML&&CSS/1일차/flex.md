# FLEX

FLEX는 FLEX가 적용될 자식의 부모에 설정해야한다.

자동으로 부모의 높이 만큼 설정이 된다. (만약 부모에 `padding`이 있다면 그 나머지 만큼 늘어난다.)

기본 값이 `flex-direction: row`이다. 

`row`일 경우 메인축이 x축이고 `column`인 경우 y축이다.

`justify-content: flex-end;` : 오른쪽 정렬 , `center`는 가운데 정렬이다.

`space-between` , `space-around` : 자식간의 사이를 띄워준다. 

`space-evenly` : 균등하게 margin이 분배된다

## FLEX 의 장점

1. 자식의 크기를 줄이거나 늘려도 여백이 유연하게 늘었다가 줄어든다.
1. 부모의 너비를 넓혀도 비율대로 조정한다.