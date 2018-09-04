# Git(in Git bash)

## 초기설정

  `git config --global user.name "<영문이름>"`   
  
  `git config --global user.email "<이메일 주소>" ` 
  

## 저장소 만들기

  `git init`
  
## 저장소 상태 확인

  `git status`

## 작업 흐름

  `git add "<파일명>"` 
  
  `git add .`         현재 모든 파일들을 다 올리겠다
  
  `git commit -m "<커밋의 메세지>"`
  
  `git log`           로그를 볼 수 있다. q누르면 나간다.
  
  `git checkout "커밋의 일련번호"`
  

- git 은 파일만 관리한다 빈폴더를 관리 하지 않는다.
- .gitkeep 파일명 앞에 .을 붙이면 숨긴파일이 된다 ( 리눅스 , 맥 )

## Git 원격 저장소 만들기

  1. `ssh-keygen` 입력
  1. `cat ~/.ssh/id_rsa.pub` 입력
  1. Github 설정에서 SSH key 등록(~/.ssh/id_rsa.pub 안의 내용 )

## Git push

1. `git remote add origin [깃주소]` 
    origin 이라는 별명으로 주소를 저장하는 것이다.

1. `git push -u origin master`

---
1. `git remote get-url origin`
    : origin이라는 별명으로 저장된 url을 꺼내오는것

1. `git remote remove origin` : 기존 주소 삭제

## Git push alert창

```
Are you sure you want to continue connecting (yes/no)? y
Please type 'yes' or 'no': yes
```

처음 깃 저장소를 만들때 뜨는 문구이다 전부 yes를 하면 된다.

- git push 하면 저장소로 넘어간다

commit 과 push 의 차이 
commit 은 로컬저장소에 저장
push는 로컬저장소에 저장된것을 원격저장소에 옮긴다.

## Git pull


## Visual Studio Code에서 변경

2가지 방식
1.커밋메서지를 입력하고 체크를클릭
1.선택한 것만 올리고 싶으면 +버튼을 누르고 메세지쓰고 체크를 클릭

## SSH 에러

`옵션 -> SSH 클라이언트 -> OpenSSH로 변경`



