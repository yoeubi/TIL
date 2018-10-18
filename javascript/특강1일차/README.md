# git

1. gitforwindow.org 에서 설치한다.

1. git init 하기 전에는 하드디스크밖에 없다 입력하는 순간 2개의 가상공간이 생긴다.

1. git init을 하면 index 와 localrepository 라는 가상공간이 생긴다.

1. git add 로 스테이지에 변경사항을 올려놓는다. 그 변경사항에 라벨링을 해서 localrepository에 올린다. 이걸 git commit 이라고 한다.

1. local-repository에서는 커밋단위로 관리한다.

1. 변경하는 블롭이 스테이지에 올라간다. 그 변경사항에 라벨이 붙어서 로컬레포지토리에 들어간다. 그리고 푸시를 하면 외부 레포에 넘어간다.

## 깃 시작하는 방법

```
$ mkdir react-sample
$ cd react-sample
$ git --version
```

- 처음 git 을 시작할때 제대로 설치가 되었는지 git --version 으로 확인을 한다.

- git status 하면 nothing to commit 이라고 뜨는데 변경사항이 없을때 뜬다.

- git init 는 git에 초기화를 하는 것이다.

```
touch README.md
vi README.md
```

- vi 파일명을 하면 vim 에디터로 파일을 여는 것이다.

- 파일 안을 보며 ~ 가 있는데 틸드라고 하면 문서의 끝을 의미한다 텍스트를 쓰면 틸드가 사라진다.

- vim 에디터에 들어오면 노멀모드라서 텍스트 편집이 안된서 노멀모드에서 인서트 모드로 들어갈려면 i를 누르면 된다.

- 인서트 모드를 끝내고 싶을떄는 esc를 하면 노멀모드로 돌아간다.

- : 을 하면 아래로 커서가 이동한다. :숫자를 하면 파일의 라인 숫자번쨰으로 이동한다. 그리고 파일의 마지막라인 숫자보다 크다면 파일의 라인의 최하단으로 설정이 된다.

- vim에서 나갈때는 :q 하면 되지만 에러가 뜬다 왜냐하면 수정을 했는데 저장을 안했기 때문이다. 그떄는 :w 하면 저장이 된다.

- 저장하고 나갈려면 :wq를 하면 된다 또한 원래 상태로 돌아가고 싶으면 :q! 를 하면 된다.

- 파일 내용을 확인하고 싶을때 cat 파일명 으로 하면 된다.

- 그리고 git status라고 하면 untracted file 이라고 뜬다.

- git에 remote-repository의 위치를 알려줘야 하는데 처음에 외부저장소의 이름을 설정해야한다. `git remote add origin [외부저장소의 주소]` 여기서 origin은 저장소에 대한 별명이다.

- git remote get-url origin 하면 외부저장소의 주소가 뜬다.

- git remote remove 저장소별명 하면 별명이 사라진다.

- git config --global core.editor "vim"을 하면 git을 vim 에디터로 쓰겠다고 설정하는 것이다.

- git config --list 하면 여때까지 동록한 모든 설정을 볼수 있다.

- git commit를 하면 커밋메세지를 빔에서 작성할 수 있다.

- 첫 줄은 제목 다음은 내용을 쓰면 된다. 나가는 순간 커밋이 된다.

- git-repository는 상하관계가 있으면 안된다 아래의 깃의 변경사항이 상위 깃 변경사항에 들어간다.

- 만약 생긴다면 rm -rf .git 으로 삭제를 해야한다.

- git remote 하면 설정한 별명을 알 수 있다.

- git push origin master 하면 푸시할때 마스터를 기본으로 사용하겠다는 것이다.

- gitignore가 필요하지 않으면 위의 방식을 사용한다.

- 클론을 할때는 remote-repository에 파일이 있어야지 된다.

- MIT라이센스는 가장 자유로운 라이센스 이며 아파치는 자유롭게 쓸 수 있지만 소유는 내꺼다 라는 것이다.

- GNU 라이센스를 쓰는 repository를 포크하면 내 repository도 동일하게 적용된다. 영리목적으로 사용하면 소송을 당한다.

```
git clone 주소 
vi .gitignore
```

- .gitignore는 respository는 git에서 커밋을 안할 파일들의 목록을 모아 놓는 곳이다.

```
// # 태그는 주석이다.
# Custom
hidden
*.py
```

- hidden이라는 폴더 밑에 있는 폴더 및 파일은 무시가 된다. 어떤 경로간에 *.py 하면 .py를 가진 확장자는 무시가 된다.

- .gitignore 을 할때 처음에 무조건 한번은 푸시해야한다.

- git commit -m 하면 터미널 상에서 커밋메세지를 작성 할 수 있다. "이 시작하고 "로 닫을때까지 메세지를 입력할 수 있다.

- !는 cli명령어라서 !바로 뒤에는 문자가 와서는 안된다 한칸 정도 공백을 두어야한다.

```
git commit -m "Feat : create index.js
created index.js form init project"
```

# 브랜치

- 커밋은 완벽한 동작을 하는 단위로 올려야한다.

- 개발은 모든 develop 브런치에서 일어난다.

- master 브런치는 사용자가 사용할 수 있는 버전만 올려가야 한다.

- 브런치는 분기점을 생성하고 독립적으로 코드를 변경 할 수 있도록 도와주는 것이다.

- git branch 라고 치면 현재 로컬 브런치 목록이 뜬다.

- git brach -r 는 외부 저장소의 브런치 목록이 뜬다.

- 둘다보고 싶으면 git branch -a

- git branch 브런치명 으로 브런치를 생성한다. 마지막 생성한 타임스탬프에서 분기점을 친다.

- 원하는 지점에서 분기점을 칠라면 checkout을 하고 그 지점에서 분기점을 쳐야한다.

- 시간이동은 checkout 을 쓴다. 

- git checkout 브런치명 하면 이동을 한다. 

- git commit -a 하면 add + commit을 둘다 하는 것이다. 모든 변경사항을 다 몰아서 하는 것이다.

- 하위 브런치에 있는 것을 상위 브런치로 병합을 할려면 상위 브런치 위치에서 git merge 하위브런치명 을 하면 된다.

- 만약 브런치를 삭제할려면 git branch -D 브랜치명 하면 된다. 그리고 해당 브런치 위치에서 명령어를 입력하는 것이 아닌 상위 브런치에서 입력해야한다.

- 만약 특정한 타임스탬프로 넘어가기 위해서는 해당 커밋의 아이디를 알아야한다.

- 만약 merge를 했다면 이것도 커밋으로 남아서 remote로 푸시를 해야한다 안하면 remote는 해당 변경사항을 모른다.

- 커밋 아이디를 github페이지에서 복사한다. git checkout 커밋아이디 를 하면 된다.

- HEAD 내가 지금 보고 있는 곳이 어디 라고 말하는 것이다. 

- 특정한 시점을 돌아가서 일을 할때는 새로운 분기점을 쳐서 작업을 해야한다.

- checkout -b 브런치명 하면 git branch 브런치명 + checkout 브런치명 이라는 두 개의 명령어를 합친 것이다.

- hotfix는 보안관련 이슈를 제거하는 브랜치이다. 긴급하게 수정해야한다면 마스터에서 뺴서 고친다음 마스터에 병합시킨다.

- 개발용 메인 브런치는 develop 브런치 , 배포용 브런치는 master이다.

- develop 브런치에서 하나의 브런치를 따서 작업해야한다. release 브런치는 마스터에 병합하기전에 여러가지 테스트, 최적화를 하는 곳이다.

- git은 텍스트 라인단위로 추적하는데 하나라도 변경이 되면 conflict가 발생 할 수 있다. 만약 생기면 둘 중에 하나를 선택하거나 새롭게 짜서 넣어도 된다. 그리고 생긴 부호들을 전부 삭제 한다.

- 똑같은 저장소를 복제한 다음 원 저장소에 반영하라고 요청을 할 수 있는데 이걸 pull request 라고 한다.

- 상대방의 repository를 방문해서 포크를 한다. 포크한 주소를 복사해서 git clone을 한다.

```
git branch develop
git checkout develop
git branch feature/ediatREADME.md // 브런치를 만들때 브런치한 이유넣는게 좋다.
git checkout feature/editREADME
vi README.md // 문서를 변경한다.
git add README.md
git commit -m "Feat :edit README.md
add contents section"
git push origin featur/editREMDE
git checkout develop
git merge featrue/editREADME
git ststus
git push origin develop
git checkout master
git merge develop
git push origin master
```

- 포크한 저장소에는 원 저장소를 향하는 하나의 커밋이 존재한다. 그 커밋을 pull request 를 날리면 되는데 간단한 메세지를 작성하고 보내면 된다.

- 열린 pull request를 하면 해당 pull request에 대한 커멘트를 남길 수 있다. 만약 pull request 가 맘에 들면 merge pull request를 하고 아니면 revert를 하면 된다.

- git flow라는 툴을 사용하면 더 편리하다.

```
mkdir git-flow-practice
cd git-flow-practice
git init
git flow init
```

- 프로덕션 릴리즈가 있다. 그게 마스터 이다. 원하는 이름이 있으면 넣고 아니면 전부 엔터를 친다.

- 브런치가 자동으로 develop으로 옴겨진다.

```
touch index.js
console.log('hello js')
git add index.js
git commit -m "Feat: add index.js
add idnex.js in develop branch"
git remote add origin 주소 // github에서 repository를 만들어야한다.
git push origin develop
git clone 주소
cd 폴더
git branch 
git checkout -b feat
vi index.js
function sayHello(){
    console.log("hellow js");
}
git status
git add index.js
git commit -m "Feat : edit index.js
wrap console.log -> function"
git push origin feat
git chekcout develop
git merge feat
vi index.js
git push origin develop 
```

- 상대방은 git pull origin develop 해야지 남이 기여한것을 내 로컬에서 확인 할 수 있다.

- git flow start abc 하면 브랜치만들어주고 넘어간다

- git flow finish abc 하면 브랜치가 병합되고 사라진다.
