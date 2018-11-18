# create-react-app V2 릴리즈

## Sass, CSS Module 지원

Sass, CSS Module을 yarn eject 하지 않고 사용 할 수 있습니다.

### Sass

Sass 를 사용하기 위해선, 사전에 node-sass 를 설치하면 됩니다.

```
yarn add node-sass
```

```js
// src/MyComponent.js
import React from 'react';
import './MyComponent.scss';

cont MyComponent = () => {
    return (
        <div className="MyComponent">
            <div className="something-inside">Hello CRA v2</div>
        </div>
    )
}
export default MyComponent;
```

```css
/* src/MyComponent.scss */
.MyComponent {
    background : black;
    color : white;
    padding : 1rem;
    .something-inside {
        background: white;
        color : black;
        font-size : 2rem;
        text-align : center;
        padding : 1rem;
    }
}
```

```js
// src/App.js
import React, {Component} from 'react';
import MyComponent from './MyComponent';

class App extends Component {
    render(){
        return (
            <div>
                <MyComponent/>
            </div>
        )
    }
}
export default App;
```

### CSS Module

CSS Module은 사용 방식이 이전과 조금 다릅니다. 파일을 생성할때 파일이름.module.css 이런 식으로 만들면 CSS Module이 적용됩니다.

```css
/* src/AnotherComponent.module.css */
.wrapper {
    background: gray;
    color : white;
    padding : 1rem;
    font-size : 2rem;
}
```

```js
// src/AnotherComponent.js
import React , {Component} from 'react';
import styles from './AnotherComponent.modules.css';

const AnotherComponent = () => {
    return (
        <div className={styles.wrapper}>
            What about CSS Module?
        </div>
    )
}
export default AnotherComponent;
```

```js
// src/App.js
import React , {Component} from 'react';
import MyComponent from './MyComponent';
import AnotherComponent from './AnotherComponent';

class App extends Component {
    render(){
        return (
            <div>
                <MyComponent/>
                <AnotherComponent/>
            </div>
        )
    }
}
export default App;
```

## Babel7 업그레이드

Babel7로 업그레이드 되면서 빌드속도가 개선된다고 합니다.

JSX Fragment 문법을 이제 별도의 설정 커스터마이징 없이도 사용할 수 있습니다.

```js
// src/App.js
import React , {Component} from 'react';
import MyComponent from './MyComponent';
import AnotherComponent from './AnotherComponent';

class App extends Component {
    render(){
        return (
            <>
                <MyComponent/>
                <AnotherComponent/>
            </>
        )
    }
}
export default App;
```

## SVG를 리액트 컴포넌트화 하여 불러오기

SVG 파일을 불러올 때 이전처럼 불러올 수도 있지만

```js
import logo from './logo.svg';
```

이제 컴포넌트 형태로 변환하여 불러올 수 있습니다.

```js
import { ReactComponent as Logo } from './logo.svg';
```

```js
import React , {Component} from 'react';
import MyComponent from './MyComponent';
import AnotherComponent from './AnotherComponent';
import {ReactComponent as Logo } from './logo.svg';

class App extends Component {
    render(){
        return (
            <>
                <MyComponent/>
                <AnotherComponent/>
                <Logo/>
            </>
        )
    }
}
export default App;
```

## 기타

Service worker를 직접 켜야함

```js
// src/index.js
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
```

최하단에 있는 unregister를 register로 변경하면 됩니다.