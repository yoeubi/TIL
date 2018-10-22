# EJS 문법

```
express learn-express2 --view=ejs
```

- ejs는 html과 비슷한 템플릿 엔진이며 html의 단점은 그대로 이다.

- `<%= >` 안에 변수가 들어간다.

```html
<!DOCTYPE html>
<html>
    <head>
        <title><%= title %></title>
        <link rel="stylesheet" href="./stylesheets/style.css"/>
    </head>
    <body>
        <h1><%= title %></h1>
        <% for (i of fruits ) { %>
            <p>Welcome to <%= i %></p>
        <% } %>
        <% if (title = 'ejs') { %>
            <p>ejs 공부합시다.</p>
        <% } else { %>
            <p>pug 공부합시다.</p>
        <% } %>
    </body>
</html>
```

- ejs는 `%`로 여는 태그 , 닫는 태그를 해야하고 블록 표시는 제대로 맞게 해야한다.

```js
const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.render('index', { title : 'ejs' , fruits : ['사과','배','오렌지']})
})
module.exports = router;
```

- pug 나 ejs 파일을 변경하는 것은 서버를 재시작안해도 된다.

- pug는 include 나 layout이 있으나 ejs는 include만 있다.

- `저는 ejs보다 nunjucks 엔진을 더 선호합니다.`

```html
<!-- header.ejs -->
<header>헤더입니다.</header>
<!-- footer.ejs -->
<footer>푸터입니다.</footer>
```

- 공통된 부분은 뺴고 나중에 include하면 된다.

```html
<!DOCTYPE html>
<html>
    <head>
        <title><%= title %></title>
        <link rel="stylesheet" href="./stylesheets/style.css"/>
    </head>
    <body>
        <% include header.ejs %>
        <h1><%= title %></h1>
        <% for (i of fruits ) { %>
            <p>Welcome to <%= i %></p>
        <% } %>
        <% if (title = 'ejs') { %>
            <p>ejs 공부합시다.</p>
        <% } else { %>
            <p>pug 공부합시다.</p>
        <% } %>
        <% include footer.ejs %>
    </body>
</html>
```



