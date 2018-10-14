# url 모듈

```js
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                                            href                                             │
├──────────┬──┬─────────────────────┬─────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │        host         │           path            │ hash  │
│          │  │                     ├──────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │   hostname   │ port │ pathname │     search     │       │
│          │  │                     │              │      │          ├─┬──────────────┤       │
│          │  │                     │              │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.host.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │   hostname   │ port │          │                │       │
│          │  │          │          ├──────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │        host         │          │                │       │
├──────────┴──┼──────────┴──────────┼─────────────────────┤          │                │       │
│   origin    │                     │       origin        │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴─────────────────────┴──────────┴────────────────┴───────┤
│                                            href                                             │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

- 서버에 요청을 보낼때 주소를 통해서 보낸다. 주소를 여러가지 구성요소로 이루어져 있다.

- 위쪽은 기존 방식의 주소 체계(url.parse) 아래는 WHATWG 방식의 주소 체계입니다. (url.URL)

```js
const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor')

console.log('new URL():' , myUrl);
/*
    new URL() : URL {
        href : ... ,
        origin : ... ,
        protocol : 'http:' ,
        ....
    }
*/
console.log('url.format() : ', url.format(myUrl));
// url.format() : http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor')
console.log('url.parse() : ' , parsedUrl)
/*
    url.parse() : Url {
        protocol : 'http',
        slashes : true,
        ...
    }
*/
```

- URL을 생성자로 인스턴스를 만든다

- 포맷을 하면 구성요소들을 합쳐서 하나의 주소문자로 만든다. 

- parse 방식은 기본 노드의 방식이다 URL 은 WHATWG 방식이다. 

- 기존 방식(url.parse)은 호스트가 없을 떄도 쓸 수 있습니다. WHATWG 방식(url.URL)은 search 처리가 편리합니다.

- URL 방식은 장점은 서치 부분을 다룰때 편리하다.

```js
const { URL } = require('url');

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript')
console.log('searchParams : ',myURL.searchParams );

console.log('searchParams.getAll()', myURL.searchParams.getAll('category')) // 같은 카테고리가 있을 경우 getAll을 쓴다 배열로 나온다.
// [ 'nodejs' , 'javascript' ]
console.log('searchParams.get()', myURL.searchParams.get('limit')) // 하나만 가지고 온다.
// 10
console.log('searchParams.has()', myURL.searchParams.has('page')) // 키 값을 가지고 있냐 라는것 있으면 트루
// true

console.log('searchParams.keys()', myURL.searchParams.keys()); // 페이지 리미트 카토고리
// { 'page' , 'limit' , 'category' , 'category' }
console.log('searchParams.values()', myURL.searchParams.value()); // 값들이 담겨서 나온다 
// { '3' , '10' , 'nodejs' , 'javascript' }

myURL.searchParams.append('filter','es3'); // 값을 추가하는것  &filter=es3
myURL.searchParams.append('filter','es5'); // &filter=es3&filter=es5
console.log(myURL.searchParams.getAll('filter')); 
// [ 'es3', 'es5' ]

myURL.searchParams.set('filter','es6'); // &filter=es6
console.log(myURL.searchParams.getAll('filter')); 
// [ 'es6' ]

myURL.searchParams.delete('filter') // 지우는 것
console.log(myURL.searchParams.getAll('filter'))
// [] 

console.log('searchParams.toString() : ' , myURL.searchParams.toString()); // 최종적으로 주소로 만드는 것 
myURL.search = myURL.searchParams.toString();
// page=3%limit=10&category=nodejs&category=javascript
```

- 노드 searchParams의 메서드는 FormData 나 URLSearchParams 객체에도 비슷하게 쓰여요.
 
- append는 값 추가(기존 값 보존) set은 기존 값 초기화 후 수정

- 옛날 방식은 주소가 `/hello?page=10` 라는 주소 밖에 없을때 같은 도메인경우 도메인이 생략할수 있다 그경우 WHATWG 방식으로는 안되고 url.parse방식으로 해야한다.