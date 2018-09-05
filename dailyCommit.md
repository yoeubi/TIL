# 일일커밋

1. 마크다운부터 시작
1. 직접 타이핑 (복붙 ㄴㄴ)

## 커밋 내용

1. 나만의 튜토리얼 작성
1. 책에서 본 코드 따라 써보기
1. 리뷰어 참여하기
1. 튜토리얼 번역 참여
1. 스프린트 참여
1. 정적 블로그 운영

# git

```
git add : git으로 파일을 관리하겠다. 
git commit -m 'add new feature' : -m은 코멘트 약자
git push -u origin master : origin은 위치 , master는 브랜치 이름 , 기본 값을 푸시하는 것이다.
```

> Add .gitignore : 자동생성되는 파일을 뺴고 할수 있다.

> Add a license : MIT License 퍼가서 써도 상관이 없다. 면책사항을 넣는것이다.

## 사용법

- 제목에 `/[이름]` 하면 폴더가 생성이 된다.
- 코멘트는 동사로 시작한다 (create , modifify , add ...))
- 디스크립션도 작성한다.

## SSH keys

1. `generaing SSH keys`링크를 누른다.

1. `Generating a new SSH key`를 누른다. 

    ```
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    Generating public/private rsa key pair.
    Enter a file in which to save the key (/c/Users/you/.ssh/id_rsa):[Press enter]
    Enter passphrase (empty for no passphrase): [Type a passphrase]// 그냥 엔터치면 default값이 들어가고 비밀번호를 넣는것을 권장
    Enter same passphrase again: [Type passphrase again]
    ```

1. 키가 생성이 된다

    ```
    cd ~/.ssh : 경로 이동
    ls : 파일 존재 확인
    vi id_rsa.pub : 파일 열기
    ```

1. 이 키를 깃헙에 등록

    ```
    clip < ~/.ssh/id_rsa.pub
    ```

1. 클립보드에 내용 복사 

1. add SSH 하기

    ```
    eval $(ssh-agent -s)
    ssh-add ~/.ssh/id_rsa
    ```

    > 홈페이지를 번역한다음에 복붙하면 원치 않은 공백이 들어간다.

1. 저장소에 들어가서 SSH방식으로 클론으로 복사한다.

1. 프로젝트 폴더로 이동한다.

    ```
    git clone [복사한것을 여기에 넣는다]
    ```

    > 폴더를 새로 생성해서 만드는 것을 권장한다. 

    > 전에 썻던 명령어를 쓸라고 화살표로 움직인다.

1. git에 대한 정보를 볼 수 있다.

    ```
    git config --list
    ```    

1. 원격저장소의 위치를 알 수 있다.

    ```
    git remote -v
    ```    

    > 파일명 앞에 `.`이 들어가면 숨김파일이다.

    ```
    vi .git
    ```

    > q 하면 빠져나올 수가 있다.

## 사용법

```
# github
## sshkey-gen
## git clone
* ssh로 clone 받기 
```
# github
## sshkey-gen
## git clone
* ssh로 clone 받기 

- - -

## git으로 관리하기

```
git add [파일명]
git status
git commit -m "[커밋 메세지]"
git push -u origin master : 깃헙에 올린파일이 올라가진다.
```

1. 파일을 변경하면 

    ```
    git add . : 모든 파일을 add하게 된다.
    git commit -m "modify [파일명]"
    ```

    > .gitIgnore 파일에 정의 된 것들은 안 올라가진다. 

1. 깃헙에서 pull 하기

    ```
    git pull origin master
    ```

- - - 

## git pull

- git pull 은 git fetch + git merge 를 합친거이다.

- git pull --rebase(git fetch + merge + add + commit)

## github fork

> 원래 저장소를 upstream 이라고 한다

## branch

> branch명 : 이슈번호 or 협업툴에 있는 티켓번호를 포함한다.


## 로컬 커밋을 깃헙에 올리기

## 깃헙과 내 로컬 브랜치 최신상태로 유지하기

## git stash

- 어딘가에 임시저정한후 `git stash pop`으로 꺼낸다.

## 좋은 커밋 메세지 작성법

1. 제목과 본문을 빈행으로 분리한다.
1. 제목 행을 50자로 제한한다.
1. 

## 커밋 메세지 수정하기

```
git commit --amend
git rebase -i HEAD~3
git rebase --continue
```

## git-flow 브랜치 이해하기

1. master 
1. develop 
1. feature
1. release
1. hotfix


## 정적 페이지만들기

## Conflict 대체 방법

> 지우고 설정하면 된다. 


## fork 하기

```
git clone [주소]
```


