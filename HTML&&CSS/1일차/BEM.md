# BEM 방법론

- 작명 규칙 
    - 소문자 , 숫자만 사용
    - 여러단어의 조합은 `-`으로 연결해서 작명
- 블록(Block)
    - class 속성으로 사용
    - 형태(red, big)가 아닌 목적(menu, button)에 맞게 결정해야한다.    
    - 서로 중첩해서 사용해도 된다.
- 요소(Element)
    - block_element 형태로 사용
    - 요소를 중첩해서 사용할 수 있다.
- 수식어(Modifier)
    - 블록이나 요소의 모양(color,size),상태(disabled,checked)를 정의한다.
    - block_element--modifier 형태로 사용(더블 하이픈)    
    - boolean 타입 : 수식어가 있으면 값이 true라 가정한다(form_button--disabled))
    - key,value 타입 : key , value를 하이픈으로 연결해서 표시(color-red, theme-ocean)