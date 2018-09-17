# `form`

- `form`은 `textfield` , `buttom` , `checkbox`와 같은 폼 컨트롤을 포함하는 웹 페이지의 컴포넌트를 말함.
- 상자와 인터랙션을 수행한 결과 (예 : 검색)를 서버로 보낼 수 있다.

    [사용 예시]
    ```html
    <form action="http://formspree.io/your@email.com" method="POST">
        ...
    </form>
    ```

    - `form`은 `action`이라는 속성을 가져서 사용자가 입력한 정보를 서버에 전송 할 수 있다.
    - `method`는 어떠 방법으로 데이터를 전송 하는 것이다 `get`,`post`방식이 있다. 일반적으로 `get`방식을 사용하며 `method`를 사용하지 않을시 default값이 `get`이다 . `post`는 민감한 정보를 전송할때 사용한다.
    - 서버에 데이터를 전송할라면 `submit`버튼이 있어야한다.

- - -

# `input`

- 사용자의 데이터를 입력 받을 수 있는 폼 컨트롤을 말함
- 다양한 유형(Type) 설정이 가능하며 , 유형에 맞는 역활를 수행한다.

    [사용 예시]
    ```html
    <input type="text">
    ```

    - default 값은 `text`이다. 사용자가 텍스트를 입력할수 있는 요소가 나온다 UI상 사가형 박스가 있으면 어떤 내용인지 알 수 없어서 
    `input`요소에는 `label`이 있어야한다.

    [속성]
    
    |   |   |
    |---|---|
    | name | 서버에 값을 전송할때 `value`를 담을 변수이다. |
    | placeholder | 사용자가 어떠한 내용을 입력해야하는지 도움말을 보여주고 싶을때 쓴다. |
    | value |    `input`요소에 초기값을 설정할때 사용한다.|
    | readonly |  읽기만 가능하고 사용자가 입력할 수 없다. | 
    | required | 값이 필수 라고 지정하는 속성이다. 값이 입력되지 않고 서버에 전송하면 오류가 발생한다. |
    | disabled | 비활성화가 된 상태이다. 그어떠한 접근도 작업도 불가능하다.|
    | minlength |  입력하는 최소글자수를 설정하는 속성이다.  |
    | maxlength | 입력하는 최대글자수를 설정하는 속성이다.|
    | list | |

    [type]
    
    -  text :    `input`의 default값이다.
    - password
    - checkbox
    - radio
    - file
    - submit
    - button
    - image
    - reset
    - hidden
    - search
    - url
    - tel
    - email
    - date
    - month
    - week
    - time
    - datetime-local
    - number
    - range
    - color

    [사용 예시]
    ```html
    <input type="text">
    <input type="submit" value="전송">
    <input type="button" value="버튼">
    <input type="image" src="https://goo.gl/Ng66oQ" alt="체크인" width="20" height="20">
    <input type="reset" value="초기화">
    <input type="hidden" name="using-ajax" value="true">
    <input type="number" name="" id="" min="100" step="10" max="1000" value="150">
    <input type="range" name="" id="" min="10" step="5" max="25" value="15">
    <input type="color" name="" id="" value="#F7CC60">
    ```
    - `min`을 최소값 `step`은 값의 단위 `max`는 최대값이다.  
    - `color`는 초기값을 헥스코드로 줄 수 있다.
    - `radio`는 여러개 중에 하나를 선택하게 하는 요소이다. 그래서 `radio`간의 `name`이 동일 해야한다. 만약 그리고 초기값으로 체크가 되길 원한다면 `checked`속성을 넣어야한다. `value`는 보통 1,2 숫자로 한다.
    - `file`은 업로드 할때 사용한다 하지만 파일데이터를 전송할라면 `form`의 인코딩타입을 `enctype="multipart-formdata"` ,`post`방식으로 변경해야한다.
    - `image`는 이미지 버튼이 될 수 있다.
    - `reset`은 `form`의 값을 초기화 시킬수 있다.
    - `hidden`은 보여지지 않고 어떠한 데이터를 서버에 전송 할때 쓴다.
    - `submit`은 전송하는 버튼이다.
    - `button`은 일반 버튼이다.
    - `search`는 값을 입력했을때 x표시가 나와서 지울 수 있다.
    - `url`은 이동 될 주소를 입력하는 것이다.

# `label`

- 컨트롤에 레이블(이름)을 붙이고자 할 경우 사용.

    [사용 예시]
    1. <label>이름<input type="text" placeholder="이두연"></label>

    1. <label for="u_pass">비밀번호</label>
        <input id="u_pass" name="u_pass" type="password" maxlength="8" placeholder="비밀번호 8자리를 입력해주세요">

    - `input`을 `label`로 감싸거나 `label[for]` 속성과 `input[id]` 를 연결 시키는 방식으로 할수 있다. 단 `for`,`id`값은 동일 해야한다.

# `button`

- 버튼 폼 컨트롤로 사용자의 인터렉션을 받아 액션을 트리거(방아쇠) 처리함.

    [type]
    - submit
    - button
    - reset

# `select` 

    - 드롭 다운 메뉴(옵션을 선택 할 수 있는) 컨트롤을 말함.
    내부에 <option> 요소를 포함하여 사용자에게 선택 할 수 있도록 한다.
    <option>을 묶어 그룹으로 만들고자 한다면 <optgroup>요소를 사용하고 ,<legend>로 그룹 이름을 설정한다.

    [속성]
    - name  서버전송할떄 필요한것
    - multiple 여러개 선택가능한것
    - disabled 비활성화 선택할수 없게 되는것
    - required 필수입력 내용없이는 전송이 안된다.
    - size 사이즈 설정이다.몇개가 보이는게 설정하는것 

# `option`

    - <select> <datalst> <optgroup> 내부에 포함 가능한 컨트롤로 항목을 만드는데 사용됨.

    [속성]
    - value
    - selected 기본적으로 선택이 된다.
    - label 기본값을 빠구고 싶으면 한다. 
    - disabled 선택할수 없다. 

# `optgroup`
    - option 컨트롤을 그룹지을때 사용됨.

    [속성]
    - disabled 아예 선택이 안된다. 
    - label 
     취미의 그룹을 나누고 싶을때 쓴다 레이블로 이름을 정할 수 있다.

# `textarea`

- 멀티라인 일반 텍스트 편집 컨트롤을 말한다.

    [속성]
    - name
    - placeholder
    - rows 열 행  은 높이 
    - cols 해은 폭 글자의 개수 폭   열 
    - readonly
    - required
    - disabled
    - minlength
    - maxlength

    리사이즈 논 하면 사용자가 ui를 바꿀수 없게 할수 있다. 

# `fieldset`

- 하나 이상의 폼 컨트롤을 그룹화하는데 사용됨

    [속성]
    - name
    - disabled

# `legend`

- fieldset 컨트롤 레이블(이름)을 설정하는 컨트롤 

# `output`

- 계산된 결과를 출력하는 컨트롤

    [속성]
    - name
    - for

    ```html
    <form oninput="result_sum.value = parseInt(n1.value + n2.value , 10 )">
        <input type="number" name="n1" value="4"> + 
        <input type="number" name="n2" value="10"> =
        <output name="result_sum">14</output>
    </form>
    ```


# `datalist`

    - 데이터 목록 요소 컨테이너 컨트롤.
    - 내부에 <option> 요소를 사용해 항목을 만든다.

    [사용 예시]

    ```html
    <label>이동할 웹주소 <input list="url_ex"type="url"name="user_url" id="user_url"></label>
    <datalist id="url_ex">
        <option value="http://naver.com">naver</option>
        <option value="http://nate.com">nate</option>
        <option value="http://google.com">google</option>
        <option value="http://goo.gl">google short url</option>
    </datalist>
    ```

# `progress` : 진행 상황

- 작업의 완료 진행 상황을 표시하는데 사용되는 컨트롤

    [속성]
    - value 
    - max  

    [사용 예시]
    ```html
    <progress value="10" max="100">10%</progress>
    ```
    총 100% 중에 10% 됬다고 보여줄수 있다.

# `meter` : 측정 단위

- 알려진 범위 내에서의 스칼라 츨정 또는 분포 비율을 나타내는 컨트롤. (게이지(gauge)라고도 불림) 디스크 사용 현황, 퀴리 결과의 관련성, 
    특정 후보에 대한 투표율 등이 해당됨.

    [속성]
    - value
    - min
    - max
    - low
    - high
    - optinum

    [사용 예시]

    ```html
    <meter value="20" min="5" max="40">20</meter>
    ```



