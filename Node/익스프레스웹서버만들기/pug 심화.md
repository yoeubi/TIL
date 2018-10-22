# pug 심화(조건 , 반복, include, layout)

- `if , else if , else를 쓸 수 있어요 if not의 unless도 가능해요. for 아이템, 인덱스 in(모두 들여쓰기가 중요)`

```pug
doctype html
html
    head
        -const variable = true
        title= title + ' ' + title2
        link(rel="stylesheet" , href="./stylesheets/style.css")
        style.
            p {
                color : red;
            }
    body
        #header
            span 헤더입니다.
        #zerocho(width=500)
        span.express.nodejs
        button(type="submit") 전송
        if variable
            div 참입니다.
        else 
            div 거짓입니다.
        for i in fruits
            div = i
        p
            | 안녕하세요
            | 여러 줄을 입력합니다.
            br
            | 태그도 중간에 넣을 수 있습니다.
        #footer
            span 푸터입니다.
        script.
            var messsage = 'pug'
            alert(message)
```

- pug 에서는 조건문 , 반복문을 사용 할 수 있으면 배열도 따로 변수로 빼서 사용 할 수 있다.

```js
const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    console.log('세 번쨰 라우터 미들웨어');
    res.render('test', {
        title : '익스프레스',
        title2 : '안녕',
        fruits : ['사과','배','오렌지']
    })
})
```

- 만약 페이지를 만들때 헤더, 사이드 부분은 바뀌는데 모든 페이지에 넣는다면 수정할때마다 모든 페이지를 고쳐야한다. 그래서 고정적인 부분은 include나 layout으로 해결한다.

- `웹페이지에서 중복되는 부분은 include나 layout으로 해결해요`

```pug
<!-- test2.pug -->
doctype html
html
    head
        -const variable = true
        title= title + ' ' + title2
        link(rel="stylesheet", href="/stylesheets/style.css")
        style.
            p {
                color : red;
            }
    body
        #header
            span 헤더입니다.
        #main 본문입니다.
        #footer
            span 푸터입니다.
        script.
            var message = 'pug';
            alert(message);


```

- 공통되는 부분은 따라 pug 파일로 저장한다.

```pug
<!-- header.pug -->
#header
    span 헤더입니다. 바꿔요. 또바꿔달래요
<!-- footer.pug -->
#footer
    span 푸터입니다. 바꿔요. 또바꿔달래요
```

- 그리고 그 pug 파일을 include 를 한다.

```pug
    body
        include header
        #zerocho(width=500)
        span.express.nodejs
        button(type="submit") 전송
        if variable
            div 참입니다.
        else 
            div 거짓입니다.
        for i in fruits
            div = i
        p
            | 안녕하세요
            | 여러 줄을 입력합니다.
            br
            | 태그도 중간에 넣을 수 있습니다.
        include footer
        script.
            var message = 'pug';
            alert(message)
<!-- test2.pug -->
doctype html
html
    head 
        -const variable = true
        title= title + ' ' + title2
        link(rel="stylesheet", href="/stylesheets/style.css")
        style.
            p {
                color : red;
            }
    body
        include header
        #main 본문입니다.
        include footer
        script.
            var message = 'pug';
            alert(message);
```

- 만약 본문을 빼고 나머지가 중복이 된다면 이때는 layout 기능을 사용한다.

- 부분은 include로 하고 구조 자체가 공통되는 부분은 layout을 사용한다.

```pug
<!-- lay.pug -->
doctype html
html
    head
        -const variable = true
        title= title + ' ' + title2
        link(rel="stylesheet", href="/stylesheet/style.css")
        style.
            p {
                color : red;
            }
    body
        include header
        block content
        include footer
        script.
            var message = 'pug';
            alert(message)
```

- 공통된 부분은 모아놓고 block content에 바뀌는 부분이 들어간다.

- block은 여러 개를 만들 수 있으며 기본 값도 설정할 수 있다.

```pug
extends lay.pug

block content
    #zerocho(width=500)
    span.express.nodejs
    button(type="submit") 전송
    if variable
        div 참입니다.
    else 
        div 거짓입니다.
    for i in fruits
        div = i
    p
        | 안녕하세요
        | 여러 줄을 입력합니다.
        br
        | 태그도 중간에 넣을 수 있습니다.
block script
    script.
        var message = 'pug';
        alert(message);
```

- 바뀌는 부분만 적으면 lay.pug 와 합쳐진다.

```pug
extends lay.pug

block content
    #main 본문입니다.

block script
    script.
        var message = 'pug';
        alert(message);
```

- 이렇게 하면 중복되는 부분을 최소화 할 수 있다.

- `https://pugjs.org/api/getting-started.html 여기에 모든 문법이 있어요`

