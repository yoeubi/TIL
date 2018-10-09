# querystring 모듈

- 예전방식 노드 방식인 `url.parse` 방식과 같이 자주 쓰인데 새로운 WHATWG 주소 방식으로 할때는 `searchParams`을 줘서 `querystring`모듈이 필요가 없다

```js
const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);

console.log('querystring.parse() : ', query);
// querystring.parse() : { page : '3' , limit : '10' , { category : [ 'nodejs' , 'javascript' ] } }
console.log('querystring.stringify() :', querystring.stringify(query));
// querystring.stringify() : page=3&limit=10&category=nodejs&category=javascript
```

- `querystring`은 `url.parse`랑 같이 쓰인다. 

- `parsedUrl`에 `query`가 담기는데 그걸 다시 파싱 하는 것이다.  

- `querystirng`은 `searchParams`랑 같지만 `searchParams`가 더 기능이 많다. 

- `searchParams`에서는 `toString`으로 하나로 합쳐줬는데 `querystring`에서는 `stringify`가 있다 그걸 쓰면 하나로 합쳐준다.




