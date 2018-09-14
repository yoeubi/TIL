# 로그인 영역 마크업

1. 컨텐츠 중심으로 마크업을 하라
1. 논리적인 순서를 지켜라
    - 보여지는 형식으로 짜다보면 테이블형식으로 짜게 되는데 좋은 방법이 아니다.
    - 아아디 입력 , 비번 입력, 로그인 버튼 이런 순서대로 짜야한다.
    - 펜으로 넘버링하면서 해보는게 좋은 연습이다.

## 논리적인 순서 

- `section` 이라는 태그는 1장 1절이라고 표현하기 적절한 태그이다. 하나의 기능만으로 `section`이라고 할 수 있다.

```html
section.login
    h2.login-heading(로그인)
    form.login-form
        fieldset
            legend(로그인 폼)
            div.user-id
                label(아이디)
                input[#user-email]
            div.user-pw
                label(비밀번호)
                input[#user-pw]
            buttom[type=submit].btn-login
    ul.sign
        li
            a(회원가입)
        li
            a(아이디/비밀번호 찾기)
```

- `section`은 아웃라인에 영향을 줘서 제목이 필요하다.
- `h1`이 있으므로 `h2`로 한다.
- `label`이 아니라 단순히 텍스트 로 처리한다면 `label`로 생각하지 않는다.
- `form`은 클라이언트의 전송, 응답을 하는 것이다. 그래서 반드시 인터렉션이 필요한 것은 `form`요소로 묶어야한다.
- `form`은 무조건 `action`속성이 있어야한다. 정보를 받아서 처리할 url 이 `action`에 들어간다.
- `method`는 `get` ,`post`방식 있다. 
- `fieldset`은 `form`요스들을 묶을 때 그룹핑하는 태그이다. `div`는 범용이다.
- 만약 입력받는 서식이 2가지이상 일때 어떠한 것이 필수 인지 선택인지를 `legend`로 필수 , 선택이라고 붙이는 것이다. 단순히 `fieldset`으로 묶는다는게 아니다.
- html4는 `fieldset` ,`legend`는 안 써도 되지만 xhtml은 필수이다. 그래서 html5은 하위호완성을 지키기 위해서 둘 다 지원한다.
- html4는 `img`를 마크업 할때 종료태그가 없어도 되지만 xhtml은 셀프클로징을 해야한다.
- `fieldset`은 `border`를 기본적으로 세팅이 되어 있다. 그리고 테투리에 겹친게 `legend`이다.

- 아이디, 비밀번호 서식은 `div`로 만들것이다 입력서식은 1 대 1 로 대응하는 `label`이 있어야한다. 그래야 재사용성이 높아진다.
- 입력서식을 `label`에 할당 할때 `for=[입력서식 아이디]`하면 `label`과 입력서식이 연결이 된다.
- 회원가입, 아이디비번찾기는 클릭하면 이동하는 요소라서 `form`요소에 있을 필요가 없다.
- `input[type="submit"]`은 텍스트 노드가 없어서 `value`로 값으로 준다.
- `input[name]`은 `input`요소 값을 담는 변수 역활을 한다.
- 인라인 박스 와 인라인 박스 사이에는 공백 노드가 생긴다.
- 디자인을 할때 애매하게 만들어선 안된다 독서 체크박스 여행 체크 이렇게 딱 붙어 있으면 사용자 입장에서 헷갈릴수가 있다.
- `input[type=email]`은 전송버튼을 눌렀을때 형식체크를 해서 알림을 알려준다.
- `input[type=password]`는 스크린리더는 ****로 읽는다 하지만 서버로는 실제 입력한 값이 전송된다.
- `buttom`태그는 기본값이 `submit`이다 클릭한 순간 입력서식 값을 액션으로 전송을 한다.
- 만약 입력이 필수라면 `required`라고 `input`태그에 설정한다.
- `maxlength`는 최대 길이를 제한하는 것이다. 글자는 charecter 갯수로 들어간다. 최소길이는 스크립트로 처리해야한다.
- 회원가입 앞 장식은 마크업으로 하는게 아니라 가상요소로 처리한다.

- - -

```html
.login
    .login-heading
    .login-form
        .user-id
            label
            input
        .user-pw
            label
            input
        .btn-login
```

- `box-shadow`는 `width`에 영향을 미치지 않는다. 바깥으로 겹치는 것이다.
- `.login`는 `width`는 250px 이고 `height`는 가급적 고정하지 않는다.
- `.login-heading`은 글자색, 글꼴 여백 10px(`margin`, `padding`)은 `text-indent`로 여유공간을 만들 것이다.
- `fieldset`,`legend`는 숨김 처리 해야한다.
- 아이디, 비밀번호 글자 길이가 달라서 `width`가 다른데 `label`의 `inline-block`으로 만들고 `width`를 4em으로 주면 4글자로 맞추어진다.
- `box-shadow`는 `border-radius`에 영향을 받는다.
- `text-indent`는 양수가 들여쓰기 음수가 내어쓰기 이며 블록속성에만 적용이 된다.
- `text-indent`는 상자의 `width`에 영향을 주지 않는다.
- `border-radius`는 `top`을 기준으로 시계방향이다.
- `legend`는 디자인상 노출하지 않는다.
- `float`하는 순간 `display: block`이 된다.
- `#아이디`가 있어도 `.클래스`로 CSS를 처리한다.
- `input`은 자체적인 `inline-block`이다. 크기와 속성을 지원하기 떄문이다. `img`도 마찬가지 이다.
- `input size`라는 속성을 줘서 20이라고 하면 20글자만큼 크기가 커진다.
- 사람이 색깔을 빠르게 판단하는게 `hsla`이다.
- `flex`로 다중 컬럼을 디자인하기는 어렵다.


- - -

```html
ul.sign
    li
        a
```

- 글자간 간격을 줄이고 싶으면 `letter-spacing`을 줄이면 된다.
- `.sign a`에 `padding`을 설정해도 `height`가 늘어나지는 않는다. 
- `radial-gradient()`는 원형 , 타원형이 있다.
- `border`는 1픽셀이 최소이다.

- - - 

```html
.section.validation
    h2.readable-hidden
    ul.validation-list
        li
            a[target=_blank]
        li
            a[title]
```

- `title`은 툴팁처럼 대체 설명이 나온다.
- 아이콘은 `li`의 `background`로 처리 할 것이다.
- `변경된 약관링크 여기 클릭하세요`라는 문구가 있을때 `여기`에 링크릴 거는게 아니라 `변경된 약관`에 링크를 걸어야한다 스크린리더가 읽었을때 이해 할수 있어야한다.
- `alt`는 이미지 대체 텍스트이며 `title`은 설명이다.
- 만약 약도라는 이미지에 `alt=약도`하면 정보가 동등하지 않다 그래서 `title`로 이해하기 쉽게 설명을 해야한다.
- `title`툴팁은 커스터마이징이 안된다.
- `li`에 `margin`을 줘도 부모요소의 `margin`이랑 병합이 된다.
- 텍스트를 가운데 정렬 할려면 `line-height`,`padding`, `display:flex align-items : center`로 할 수 있다.
- `background`는 먼저 선언한게 위로 올라간다.

- - -

- 마크업순서
    1. 웹표준 용어를 먼저 마크업 h2
    1. 웹표준이란? h3
    1. 이미지      p img
    1. 용어설명    p text
- 이미지와 용어설명은 순서가 바뀌어도 된다. 이미지는 p태그안에 넣으면 본문이미지로 될 수 있다
- 하지만 이러한 형식은 일반적이다.
- `dl`은 용어 정의하는 목록태그이다. 이름과 값이 쌍으로 대응하는 곳에 쓸 수 있다.
- 제목은 6개의 depth를 가질수 있지만 depth가 깊어지는 것은 바람직하지 않다.

```html
h2
    dl
        dt
        dd
        dd
```
- `dt`한개에 여러개의 `dd`가 있을 수 있다.

```html
section.term
    h2.term-heading
    dl.term-list
        dt.term-list-subject
        dd.term-list-thumbnail
            img
        dd.term-list-brief(텍스트)
```

```html
dl
    div
        dt
        dd
    dt
    dd
```

- `div`로 `dt`,`dd`,`dt`를 한꺼번에 묶을수 없다 오직 연관이 있는 것들만 묶을 수 있다.

- - - 

## 유용한 사이트 

- [가짜 폼](https://formspree.io/)

- [벌마](https://bulma.io/)

- [dl](https://mulder21c.github.io/2017/12/26/understanding-html-52-changes/
)

- - -

## 주말에 해야할것

1. 여러번 따라치기
1. 그리드 예습하기
