# 2일차

- 깃 플로우가 된 상대 저장소를 가지고 와도 깃 플로우를 다시 해야한다. git flow init을 다시 해야한다.

- 만약 잘못된 폴더에 clone을 했다면 rm -rf .git 하면 깃이 떨어진다.

- git flow 에서 브런치를 할려면 git flow feature start [브런치명]

- 열은 브런치를 닫을때는 git flow feature finish [브런치명]을 하면 자동으로 merge 하고 브런치를 삭제한다.

- 만약 진행 사항에 conflict가 나면 해결을 하고 다시 finish를 한다.

- pullrequest를 받으면 merge할 수도 있고 안 할 수도 있다. 오른쪽에 라벨을 누르면 태그를 추가할 수 있다.

- 만약 pullrequest를 보낸 파일을 수정한다면 상대방의 pullrequest에 자동으로 변경사항이 들어간다.

- 여려명이서 작업할때 conflict가 무조건 발생하는데 미리 회피하는 방법은 push 하기 전에 원본 저장소에서 pull을 해야한다.

```
git remote add [저장소별명] [원저장소주소]
git remote
git get-url [저장소별명]
```

- 원 저장소 주소를 등록하고 원 저장소를 pull 하면 된다.

```
git pull pmorigin develop
```

- 만약 conflict가 나면 해결을 하고 push를 한 다음에 pullrequest를 보낸다.

```
git add REDEME.md
git commit -m "Prob: CONFLICT SOLVED
yeoby's munjang had conflicted with mine"
git push origin develop 
```

- - -

PM 
- (git init ->) git flow init
- some change -> push develop

Dev team
- fork PM/s repo -> clone
- git flow init 

- git flow feature start `<feat-name>`
- some change -> add, commit , push feature/`<feat-name>`
- git flow feature finish `<feat-name>`

** git remote add pmorigin <PM's repo addr>
** git pull pmorigin develop

- git push origin develop -> create PR (dev to dev)

- - -

- 만약 release단계로 올리고 싶으면 git flow release `[버전]` 하고 release 브런치에서 테스팅을 한다.

- git flow release finish `[버전]`을 하면 된다.

- release 브런치를 master 브런치에 merge되고 release 브런치의 이름으로 태그가 등록이 된다.

- 그리고 release 브런치를 develop 브런치로 재병합 한후 에 release 브런치가 삭제 된다.

- 첫 번쨰 vim은 무슨 일을 했는지 작성을 하고 두 번쨰는 어떤 것을 했는지 작성한다.

```
add some string in readme.md
v1.0.1.20181019
```

# 헥소 설치

```
npm install hexo-cli -g
hexo init 폴더명
cd 폴더명
npm install
hexo server
hexo new post 포스트명
```

- hexo new `[ blog | post | page ]` `[제목]` 블로그 , 포스트 , 독립된 페이지를 만드는 것이다.

- 작업한 페이지를 정적 페이지로 만들어야하는데 그때 정적 파일로 만들어 주는게 hexo generate 이다.

```
hexo clean && hexo generate
```

- github에 저장소를 만드는데 `[github-id].github.io`로 만들어야한다. 아이디와 동일하게 만들어야한다.

- github에 만든 것을 넘길라면 hexo deploy가 필요하다.

```
npm install hexo-deployer-git --save
```

- 사이트에 관한 설정을 고칠려면 _config.yml에 들어간다. title은 캐로셀의 타이들을 말하며 subtitle은 title밑에 있는 것을 말한다.

- SEO를 위해서 적절한 키워드 태그를 넣으면 검색결과에 잘 걸린다.

- deploy에 type , repo 만 채우면 된다. 밑의 2개는 안해도 된다.

```
type : git
repo : 깃헙주소
hexo deployer
```

- 생성한 후에는 hexo generate --deploy 또는 hexo deploy --genereate 하면 된다.
