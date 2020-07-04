# ORM

## ORM 이란?

ORM은 데이터베이스 객체지향 언어를 매핑하는 기법을 말한다.

객체 모델과 관계형 데이터 모델간의 불일치가 존재할 수 밖에 없다.

ORM에서는 이런 객체 간의 관계를 바탕으로 SQL을 자동으로 생성해서 불일치 경우를 해결하게 된다.

## 장점

객체지향적인 코드로 인해 직관적인 비지니스 로직에만 집중해서 개발할 수 있도록 도와준다.

ORM은 SQL query가 아닌 직관적인 클래스와 메서드 조작만으로 데이터를 조작할수 있다.

이런 개발 방식은 퀴리와 객체를 별도로 관리하지 않기 때문에 코드의 가독성이 높아지고 개발의 생산성이 높아지게 된다.

ORM 라이브러리에서 여러 데이터베이스를 지원한다면 개발자는 데이터베이스에 대한 종속성 또한 줄어들게 된다.

예를 들어 mysql을 사용하다가 oracle을 사용해도 ORM 설정값만 바꾸면 바로 코드는 동작하게 된다.

## 단점

복잡한 쿼리는 ORM 만으로는 구현하기 어려운 경우가 발생하기 떄문에 직접 퀴리를 생성해서 실행하는 경우가 발생한다

그리고 DBMS 마다 고유한 기능이 있는데 ORM에서는 활용하지 못한다.

SQL 쿼리로 만들면 간단한 쿼리이지만 ORM을 사용해서 자동 생성된 쿼리는 길고 복잡하다. 이런 쿼리로 인해 속도 저하가 생기는 경우도 있다.