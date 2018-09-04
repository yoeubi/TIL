# Git

---

**Git bash에서**

---

## 초기설정

---
  git config --global user.name "<영문이름>" 
  
  git config --global user.email "<이메일 주소>"  
  
---

## 저장소 만들기

---

  git init
  
---

## 저장소 상태 확인

---

  git status
  
---

## 작업 흐름
---

  git add "<파일명>" 
  
  git add .         현재 모든 파일들을 다 올리겠다
  
  git commit -m "<커밋의 메세지>"
  
  git log           로그를 볼 수 있다. q누르면 나간다.
  
  git checkout "커밋의 일련번호"
  
---

- git 은 파일만 관리한다 빈폴더를 관리 하지 않는다.
- .gitkeep 파일명 앞에 .을 붙이면 숨긴파일이 된다 ( 리눅스 , 맥 )

## Git 원격 저장소 만들기


  1. ssh-keygen
  1. cat ~/.ssh/id_rsa.pub
  2. Github 설정에서 SSH key 등록(~/.ssh/id_rsa.pub 안의 내용 )

