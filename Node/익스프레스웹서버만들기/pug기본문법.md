# pug 기본 문법

- express 에서 html 파일을 보낼면 fs.readFile을 했으나 express에서는 res.sendFile(파일경로)를 쓴다.

- html의 단점은 변수나 반복문 또는 조건문을 못쓰는데 그걸 극복한데 템플릿 엔진이다.

- `express learn-express --view=pug` html 대신에 pug를 사용하겠다는 것

- `app.set('views', path.join(__dirname, 'views')) app.set('view engine', 'pug')` 'set'은 express에 대한 설정을 하겠다는 것 

- 뷰 엔진은 pug를 사용하고 pug 파일은 views 폴더안에 있다는 것을 알려주는 것이다.

```pug
doctype html
html
    head
        -const title = '익스프레스'
        -const title2 = '안녕'
        title= title + ' ' + title2
        link(rel="stylesheet" href="./stylesheets/style.css")
```

- `pug는 들여쓰기로 부모 자식 태그를 구분합니다. 들여쓰기는 탭이든 스페이스든 상관없지만 하나로 통일해야 합니다.`

- pug의 장점은 html의 닫는 태그들을 사용 안하고 깔끔하게 작성할 수 있다.

- 하지만 pug는 들여쓰기를 잘못하면 렌더링 에러가 난다.

- pug에서는 속성을 소괄호안에 적으면 된다. 그리고 태그 하고 한 칸 뛰고 쓰면 태그 내용이 된다.

- `- 뒤에 변수를 선언할 수 있고 = 뒤에 변수를 사용하면 됩니다.`

```js
const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    console.log('세 번째 라우터 미들웨어');
    res.render('test' , {
        title : '익스프레스',
        title2 : '안녕'
    });
})
```

- res.render를 사용하는데 views 폴더 안에 있는 test pug파일을 렌더링하라는 것이다.

- 변수를 `-`으로 선언한하고 res.render 메서드에서 넣을 수 도 있다.

- `속성은 () 안에, div는 생략가능 내용은 태그 한 칸 띄고 작성 아이디는 #, 클래스는 . |로 여러 줄, 태그. 으로 여러 줄`

```pug
doctype html
html
    head
        title= title + ' ' + title2
        link(rel="stylesheet", href="./stylesheets/style.css")
    body
        div(id='zerocho' width=500)
        div#zerocho(width=500)
        #zerocho(width=500)
        span(class="express")
        span.express.nodejs
        button(type="submit") 전송
        p
```

- div는 생략할 수 있다. 주석은 //로 한다. |로 여러 줄을 입력 할 수 있다. 한줄에 쓸것을 여러 줄에 걸쳐서 쓸 수 있게 해준다.

- pug에서 script , style 태그를 쓰는 방법은 script 태그 뒤에 .을 찍으면 자바스크립트를 사용할 수 있다.

```pug
doctype html
html
    head
        title= title + ' ' + title2
        link(rel="stylesheet", href="/stylesheets/style.css")
        style.
            p {
                color : red;
            }
    body
        #zerocho(width=500)
        span.express.nodejs
        button(type="submit") 전송
        p
            | 안녕하세요
            | 여러 줄을 입력합니다.
            br
            | 태그도 중간에 넣을 수 있습니다.
        script.
            var message = 'pug';
            alert(message);
```

- `- 변수 선언 대신 res.render에서 변수를 넣어줄 수도 있습니다.`


