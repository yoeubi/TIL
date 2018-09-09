# 선택자 우선 순위

|지정방법	|예제	|점수|
|----------|-------|---|
|!important	|!important	|???|
|직접기입|	style=””	|1000점|
|ID	|#sample|	100점|
|Class	|.sample|	10점|
|속성선택자:	|a[href*=”sample”]|	10점|
|가상클래스속성	|:first-child|	10점|
|태그선택자	|ul|	1점|
|전체선택	|*|	0점|

1. `!important`
1. 인라인 스타일
1. `#id`
1. `.class` , `::추상클래스`
1. 태그 
1. 상위 객체에 의해 상속 

- 만약 같은 우선 순위라면 부모-자식 관계가 많은 경우가 우선 되며 , 모든 설정이 같은 경우 나중에 선언한 것이 우선되어 적용됩니다.

## 예시

|지정방법	|예제	|점수|
|----------|-------|----|
|!important	|color: #C00 !important;	|최우선|
|style=””	|1000(style=””)|	1000점|
|#sample	|100(#sample)|	100점|
|li.color.label	|1(li) + 10(.color) + 10(.label)|	21점|
|table tr td.color	|1(table) + 1(tr) +  1(td) + 10(.color)|	13점|
|li:last-child	|1(li) + 10(:last-child)|	11점|
|div + *[href=”com”]	|1(div) + 0(*) + 10([href=”com”])	|11점|
|h1 div + span	|1(h1) + 1(div) + 1(span)	|3점|
|li	|1(li)	|1점|

**주의사항**

- 선택자마다 계급이 있으므로 같은 점수라 할지라도 계급이 다르면 무시가 된다.

- ex) #wrap > .box1.box2.box3.box4.box5.box6.box7.box8.box9.box10.box11

## 사이트

[CSS 선택자](http://www.nextree.co.kr/p8468/)