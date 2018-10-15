# npm 설명과 패키지 만들기

- npm은 노드 패키지 관리자이다. 패키지는 다른 사람들이 만든 모듈이다.

```cmd
mkdir npmtest
cd npmtest
npm init
```

- 모듈은 노드 내장 모듈 / 패키지는 남들이 만든 모듈이다.

- `init`을 입력하고 내가 만들 패키지에 대한 이름이나 설명, 버전을 지정할 수 있다. `name`은 겹치면 안된다. 먼저 올린사람이 임자이다. 

- 버전은 그냥 해주고 디스크립트은 `npm test` 엔트리 넘어가고 다 넘어간다. `author`: zerocho 라이센스 `MIT` 

- `package.json`이 생긴다. `main`이 아까 `entry point`이다. 

- `package.json`이 제 패키지의 설명서가 된다. 남의 패키지 설치할때 `package.json`이 들어있다. 그 패키지에대 한 설명이다. 패키지부터 열어서 보면 정보를 알 수 있다. 