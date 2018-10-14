# REST API의 개념과 프론트 코드 설명

```js
GET www.zerocho.com/users
// 제로처 닷컴의 사용자를 가져오라는 것
POST www.zerocho.com/users
// 사용자를 게시하다 등록하다.
PUT www.zerocho.com/users/1
// 사용자를 전체를 수정하다. 대체하다  
PATCH www.zerocho.com/users/2
// 사용자를 부분 수정하다.ex 나이 성별 바꿀떄
DELETE www.zerocho.com/users/5
// 사용자를 지울때 쓴다.
```

- `REST API 요청 예시 GET(메서드)/users(자원) , DELETE(메서드)/users/5(자원)`

- 게시글 , 댓글 이런것들이 자원이다. 그런것을 주소를 통해서 가져오는데 그 주소를 어떻게 구조화할까가 REST API이다.

- get 가져오다. 포스트는 게시하다 풋 은 집어넣다 패치 수정하다 딜리트는 제거하다.

- HTTP 메서드만 봐도 서버로 보내는 요청이 무엇인지 파악을 할 수 있다. 주소가 서버의 자원이며 어떻게 조작할지 자원과 메서드의 조합을 REST API라고 한다.

- `REST API`의 규칙으로 자원은 명사형이여야 한다 등이 있지만 이 강좌에서는 철저히 지키지는 않겠습니다.`

- 자원인 주소와 그에 대한 동작의 조합 을 REST API 라고 한다.

```html
<!-- restFront.html -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>RESTful SERVER</title>
    <link rel="stylesheet" href="./restFront.css" />
</head>
<body>
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
</nav>
<div>
    <form id="form">
        <input type="text" id="username">
        <button type="submit">등록</button>
    </form>
</div>
<div id="list"></div>
<script src="./restFront.js"></script>
</body>
</html>
```
```css
/* restFront.css */
a {
  color: blue;
  text-decoration: none;
}
```

```js
// restFront.js
function getUser() { // 로딩 시 사용자 가져오는 함수
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      var users = JSON.parse(xhr.responseText);
      var list = document.getElementById('list');
      list.innerHTML = '';
      Object.keys(users).map(function (key) {
        var userDiv = document.createElement('div');
        var span = document.createElement('span');
        span.textContent = users[key];
        var edit = document.createElement('button');
        edit.textContent = '수정';
        edit.addEventListener('click', function () { // 수정 버튼 클릭
          var name = prompt('바꿀 이름을 입력하세요');
          if (!name) {
            return alert('이름을 반드시 입력하셔야 합니다');
          }
          var xhr = new XMLHttpRequest();
          xhr.onload = function () {
            if (xhr.status === 200) {
              console.log(xhr.responseText);
              getUser();
            } else {
              console.error(xhr.responseText);
            }
          };
          xhr.open('PUT', '/users/' + key);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.send(JSON.stringify({ name: name }));
        });
        var remove = document.createElement('button');
        remove.textContent = '삭제';
        remove.addEventListener('click', function () { // 삭제 버튼 클릭
          var xhr = new XMLHttpRequest();
          xhr.onload = function () {
            if (xhr.status === 200) {
              console.log(xhr.responseText);
              getUser();
            } else {
              console.error(xhr.responseText);
            }
          };
          xhr.open('DELETE', '/users/' + key);
          xhr.send();
        });
        userDiv.appendChild(span);
        userDiv.appendChild(edit);
        userDiv.appendChild(remove);
        list.appendChild(userDiv);
      });
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open('GET', '/users');
  xhr.send();
}
window.onload = getUser; // 로딩 시 getUser 호출
// 폼 제출
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  var name = e.target.username.value;
  if (!name) {
    return alert('이름을 입력하세요');
  }
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    // if ([200,201,203,205,207].includes(xhr.status)) { // indexOf 익스는 쓴다.
    if (xhr.status === 201) {
      console.log(xhr.responseText);
      getUser();
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open('POST', '/users');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ name: name }));
  e.target.username.value = '';
});
```

- 폼 기본제출을 막고 이름을 검사하고 `xhr`로 서버로 보내는 것 유저 주소를 서버로 보내면서 유저를 만들어주세요 라고 요청하는것

- `onload`는 서버가 응답할때 실행되는 것이다. 상태코드 201이면 성공 아니면 왜 실패했는지 알려주는 것 성공했다면 내용을 콘솔에 찍고 `getUser`를 실행한다.

- `getUser`는 `onload`, 'submit'시 실행되는 함수이다. 서버에 `/users`라는 자원을 가져오라고 요청하는 것 만약 제대로 가져오면 200 이다. 

- `post`는 201 상태코드를 쓴다 생성됨 이라는 의미이다. 200은 성공이다.

