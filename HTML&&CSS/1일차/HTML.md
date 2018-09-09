# HTML5

## HTML5 API

1. Web Storage
1. Web SQL Database/Indexed Database
1. Application Cache
1. Web Workers
1. Web Socket
1. Notifications
1. File API
1. Geolocation
1. Device Orientation
1. Speech Input
1. Drag & Drop

## DTD

`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`

> `-`로 시작하면 기업표준이라는 것 

### XHTML DTD의 3가지 타입

- `Strict` 타입 :  CSS를 포함하는 정형화된 마크업이 필요할 때 사용
- `Transitional` 타입 :  HTML을 이용한 표현은 가능하나, CSS를 해석하지 못하는 브라우저를 지원하기 위해 사용
- `Frameset` 타입 :  브라우저 창을 2개 이상으로 나누는 HTML 프레임을 사용

## HTML 과 XHTML 의 차이

1. 태그의 대소문자 구별 XHTML은 엄격하나 HTML은 대소문자 혼용해도 작동한다.
1. 속성값을 `""` 으로 묶어주는 것의 차이 XHTML은 무조건 있어야하나 HTML은 안해도 작동한다.

## HTML 구성


```html
<html lang="ko-KR">
```

> `lang`속성 : 언어 지정 및 값을 통해 스크린 리더가 인식

```html
<meta charset="UTF-8">
```

> `charset="utf-8"` : 다국어 인코딩 지원 한다 `utf-8`로 사용해야 한다.

> `charset="utf-8"` 을 `<title>웹카페-HTML5,CSS3,웹접근성</title>` 밑에 두어선 안된다 글자가 깨질 수가 있다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

> `viewport`는 개발자 들이 뷰포트의 크기와 스케일 조정하게 만든것 

> `width`는 뷰포트의 크기를 조정한다 `device-width`는 100% 스케일에서 CSS 픽셀들로 계산된 화면의 폭을 의미한다.

```html
<meta http-equiv="X-UA-Compatible" content="ie=edge">
```

> `http-equiv`는 문서의 초기정보를 나타내는 속성이다 `X-UA-Compatible`는 브라우저호환성 설정이다. 

> `content="ie=edge"`는 최신버전으로 문서모드를 설정하라는 것(현재 설치된 최신버전을 쓴다) 

```html
<title>웹카페-HTML5,CSS3,웹접근성</title>
```

> 타이틀은 그 페이지의 중심문장을 쓴다 왜냐하면 SEO가 페이지 단위로 접근하기 때문이다.

```html
<link rel="shortcut icon" href="" type="image/x-icon">
```

> css 외부 파일을 연결하는 것을 익스터널 스타일 방식이다.


> `display : block`은 부모의 width만큼 차지하는 것이다.