# 8일차 

## 마크업 

1. 첫번째 마크업은 새소식
1. 두번째는 리뉴얼 뉴스 헤드라인 마크업
1. 세번째는 날짜 정보 마크업
1. 네번째는 기사본문
1. 다섯번쨰 썸네일 // 기사본문과 썸네일은 순서가 바뀌어도 상관이 없다.
1. 마지막 더보기

```html
section.news
    h2.news-heading(새소식) // 클릭하거나 하는 게 아니라서 하이퍼링크를 안한다.
    a.news-artice
        article.news-item
            h3.news-item-heading
            time.news-item-date
            p.news-item-brief
            figure.news-item-thumbnail
                img
                figcaption
    a.news-more
```

- 새소식은 `dl`보다는 제목과 내용으로 마크업하는게 더 합리적이다. 이거 자체가 완결된 정보이기 때문이라서 `section`으로 마크업을 한다.
- HTML5에서 부모 자식 간의 컨텐츠를 해치지 않는다면 `a`태그로 묶어도 된다 하지만 인라인이 블록을 포함하고 있으면 문제가 생길수 있으므로 `a`를 블록으로 바꿔야한다.
- 인터렉티브 모델은 안에 인터렉티브를 또 가져선 안된다.
- 이미지에는 대체 텍스트가 필요하지만 `figcaption`이 있으면 안해도 된다.

```html
.news // P : r
    h2 // 글꼴 , 글자색상
    위 아래 35픽셀 여백
    .news-article // 블록 안쪽 여백 120px 최소 높이를 가져야한다. 포지션은 높이를 인식하지 못하기 떄문이다. 
        h3
        time
        p
        figure // p : r , t : 0 , l : 0 
    .news-more // p : a , t : 0 , r : 0
```

- `p`태그 안의 텍스트를 양끝 정렬할려면 `text-align: justify`하면 된다.
- 형제요소에 `overflow`를 주면 새로운 블록 흐름을 만들면서 float 이슈를 해결 할 수 있다.
- `!DOCTYPE`위에 그 어떠한 라인 이나 주석이 있어선 안된다 오류가 발생한다.
- `text-indent`는 박스의 `width`, `height`에 영향을 안 준다.

## 마크업

1. 첫번째로 신규이벤트 마크업
1. 두번째로 썸네일
1. 세번째 이벤트 내용 // 썸네일 이랑 이벤트 내용은 마크업순서가 바뀌어도 된다.
1. 네번째 이전 다음 
1. 첫번째 관련사이트 
1. 두번쨰 목록

```html
div.event-related
    section.event
        h2.event-heading // 헤딩 모듈을 만들어서 적용 할 수 있다.
            span // 의미가 있다면 strong , em 으로 마크업 할 수 있다. 의미를 강조 할 수 있다.
            // 의미가 없다면 span 으로 하면 된다. strong = b , em = i 은 주변 하고 차별을 주고 싶을때 쓴다.
            div#event-detail
                p.event-thumbnail
                    img
                p.event-brief
            div.btn-event
                button.btn-event-prev(이전 이벤트 보기) // 버튼이 좀 더 시멘틱한 이름이다.
                button.btn-event-next(다음 이벤트 보기) 
    section.related
        h2.related-heading
            span
        ul
            li
                a(패스트 캠퍼스)
            li
                a(CSS ...)
```

- `img`가 본문이미지라서 `p`태그 안에 넣는 것이며 반응형을 할때 편리해진다.
- 마크업은 누군가에게 명확하게 전달하는 것이 목적이며 어떻게 유저에게 어필을 하는지 고민하면서 마크업을 해야한다.

