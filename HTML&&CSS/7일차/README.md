# 7일차

- 코드를 짜기전에 마크업을 먼저 해야한다.

```html
.list
    .subject
    .thumbnail
    .brief
```

- `background-color`를 먼저 선언하고 `background`는 나중에 선언한다.
- 먼저 `.list` 전체 `width`를 먼저 체크하고 `padding`, `border`값을 계산한다. 
- `float`는 정확한 설계를 하지 않으면 틀어진다. `flex`는 오차가 생겨서 알아서 채워준다.
- 모든 자식들이 `float`가 되면 `height`를 읽어버린다 그래서 부모에게 `clearfix`주거나 `height`를 주면 된다.
- `position`으로 레이아웃을 잡으면 화면에 떠있는 객체가 되서 `height`가 자동으로 늘어나지 않는다.
- `float`는 text가 가용범위안에 있으면 빈공간으로 들어간다.
- `block`안에서 `inline`이 있으면 틈이 발생한다.
- 장식성 컨텐츠인지 마크업 컨텐츠인지 고민해야한다. 장식성이면 마크업을 하지 않는다.
- 검색을 마크업 할때 `input`에 `required`를 줘야한다 검색어가 없을시 서버로 전송이 안되게 만들어야한다.
- `type=tel`은 웹에선 변화가 없지만 모바일에서는 숫자키패드로 나온다. `patten`은 정규패턴을 말한다. 일정글자로만 입력받을수 있게 한다.
- 입력하는 서식이 하나밖에 없을 경우 `div`로 묶지 않는다 이때 `fieldset`이 연관성을 묶는 역활을 한다.
- 검색창의 `height`는 지정할수도 있지만 `padding`으로도 잡을 수 있다.
- `form`에 `display:flex`하면 `fieldset`이 플렉스 아이템이 되지만 실제로는 적용이 안된다. 브라우저가 `flex`를 제대로 이해하지 못한다. 이따 `div`로 묶고 하면 된다.
- 파이어폭스는 플렉스 일때 박스로 잡히지 않고 인라인 박스로 된다 이때 `width`로 잡어야한다.
- `form`을 구조화 할때 공백문자떄문에 오차가 생길수 있다.
- `vertical-align`은 `line-height`안에서 위 , 가운데 , 아래에 배치가 된다.

- - -

- 동등하게 접근 할 수 있는 수단을 주는 것이 웹접근성이다.
- 마크업 순서를 정한다.
    - 공지사항을 먼저 마크업
    - 공지사항 목록 마크업
    - 더보기 마크업
    - 자료실 마크업
    - 자료시 목록 마크업
    - 더보기 마크업

- WAI-ARIA 기준으로 마크업을 한다면 

```html
section.notice
    h2[tabindex="0"]or a태그 (공지사항)
    ul
    a
section[role="tabpanel"] aria-label="tab"
    h2(자료실)
    ul[role="tablist"]
        li[role="tab"][id]
            a
        li[role="tab"]
    
```

```html
div.board
    section.notice .tab-act 
        h2.tab .note-heading
                #notice
        ul.notice-list
            li
                a(게시물 제목)
                time[datetime=""]
        a(더보기) aria-labeledby=[아이디] 
    section.pds
        h2.tab .pds-heading
                #pds-heading
```

- - -

- `.heading`이 가장 먼저 배치 될 수 있는 방법은 `float` , `flex` , `inline`, `position`방식이 있다.
- `float`는 두 `section`을 나란히 할 수 없다 `flex`, `inline`도 마찬가지 이다.
- `position`이 2개가 겹친다면 나중에 마크업한게 위로 올라간다.
- `float`는 주변을 밀어내지만 `position`은 위에 떠있다.
- CSS는 자식요소를 선택할수 있지만 부모를 선택할 수없다.
- `float`는 공간이 부족할때 라인박스가 새로생기고 붙는다. 하지만 익스9에서는 `float`는 박스처리가 되서 라인박스가 새로 생기고 붙는다.
- `white-space`는 블록속성에만 가능하다. `text-overflow : ellipsis`하면 `...`이 생긴다.
- `calc()`에서 연산할때 연산기호 앞뒤에 공백이 있어야한다.

- - -
## 추천 사이트 

- [폼 타입](https://www.miketaylr.com/pres/html5/forms2.html)
- [폼 지원관련](https://bestvpn.org/whats-my-ip/)
- [자바스크립트 키코드](http://keycode.info/)
## 유튜브 검색

- [코드스피츠 css float]

## 단축키

- 문서 서식 을 검색해서 사용하면 줄을 맞출 수 있다.
