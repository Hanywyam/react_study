# react_study

## 231218-20

- Node
  - SQL NoSQL

#### 몽고디비 : MongoDB

- [mongoDB:atlas 사용법](https://www.mongodb.com/docs/atlas/getting-started/):atlasUI 확인
- [code](https://www.mongodb.com/docs/atlas/tutorial/insert-data-into-your-cluster/)
- Document 지향 데이터 모델을 사용하는 데이터베이스.
- XML, JSON 형태의 데이터를 저장하는 것을 말하며 MongoDB는 { key: value } 오브젝트 형식인 JSON형태로 데이터 저장.
- 데이터베이스 > 컬렉션 > 도큐먼트 순 크기

- [mongoose](https://mongoosejs.com/)
  `$ npm i mongoose`

  - 컬렉션? 정리하여 사용하기 편함

- 패스워드 암호화
- [sha256](https://www.npmjs.com/package/sha256)
  `$ npm i sha256`
  `$ npm i cors`

- express-session
- [express-session](https://expressjs.com/en/resources/middleware/session.html)
- [express-session:npm](https://www.npmjs.com/package/express-session)
  `$ npm install express-session`
- 세션을 쉽게 다룰 수 있게 도와줌.

## 231214-5

- [react-bootstrap](https://react-bootstrap.netlify.app/)

#### 템플릿 엔진 ejs

- [ejs](https://ejs.co/)
- 템플릿 엔진이란?
  - 서버 측 데이터를 클라이언트 측 HTML로 렌더링하는 데 사용되는 도구 또는 소프트웨어
  - 동적인 데이터를 출력하기 위해 사용
  - EJS (Embedded JavaScript) : JavaScript 코드를 HTML에 포함하여 사용하는 템플릿 엔진. Node.js에서 자주 사용.
    `npm i ejs`
  - 주요 문법
    - 제어문 :
    - 변수 출력 :
    - 예약어 표시 :
    - 다른 파일 포함 :

## 231213

#### local Registry

- [localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)
- [bootstrap](https://getbootstrap.com/)

## 231211-2

#### **redux toolkit**

- [redux toolkit](https://ko.redux.js.org/redux-toolkit/overview/)
- install 후 사용 `npm i @reduxjs/toolkit`
- redux는 외부 API를 가져오기 힘들다 => toolkit을 사용하면 가능.
- toolkit 에서는 modules을 slices로 많이 사용함.
- reducer 작성이 redux보다 간결함.

#### **redux toolkit API**

- [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk)

```
  // First, create the thunk
  const fetchUserById = createAsyncThunk("users/fetchByIdStatus", async () => {});

  // Then, handle actions in your reducers:
  export const pixabaySlice = createSlice({
  name: "구분 이름",
  initialState,
  reducer: {}
  extraReducers: (builder) => {
    builder.addCase(pending).addCase(fulfilled).addCase(rejected)
    }
  })
```

- Promise의 상태 3가지
  - pending :대기 중
  - 'users/requestStatus/pending'
  - fulfilled : 불러왔을 때
  - 'users/requestStatus/fulfilled'
  - rejected :오류
  - 'users/requestStatus/rejected'

#### pixabay API 연결하기

#### pixabay API 연결해서 swiper 돌리기

## 231207-8

#### Redux

- Redux는 상태관리 라이브러리
- [Redux](https://ko.redux.js.org/)
- 리액트 내장 프로그램?이 아니기때문에 install해서 사용.
  `npm i redux react-redux`
- React, Angular, Vue, Ember, jQuery 또는 Vanilla JavaScript와 같은 다른 라이브러리, 프레임워크에서도 사용할 수 있다.
- redux store는 app.js 또는 index.js와 같은 위치에 두고 사용.
- 타입스크립트 사용 시, ~~createStore~~에 생기는 취소선은 사용에 큰 문제는 없음.

- **Store** : ​전역으로 관리할 데이터를 저장하는 공간
- **Reducer** : 함수로 store에 저장했거나 저장할 데이터를 새로운 상태를 반환하는 함수
- **Action** : 특정 컴포넌트에서 reducer에 변경할 데이터를 전달하기 위한 객체. 이벤트
- state는 불변(읽기 전용) 데이터이며 action만이 상태 교체를 요청 할 수 있음
- reducer를 통해 상태의 최종 값만 설정
- 무엇이 일어나는지는 dispatch를 이용해서 알리며 어떻게 바꿀지는 reducer를 이용해서 state를 조작

- 단점 )

  - 각 컴포넌트에서 수정할 데이터가 api 비동기 데이터일 경우에는 axios함수 관리가 어려워짐
  - redux에서 API 비동기 데이터를 사용하기가 매우 까다로워서 redux toolkit을 이용.

- **redux 작업순서**

1. 컴포넌트에서 axios데이터 요청
2. 반환값을 action 생성 함수를 통해 dispatch로 reducer에 전달
3. 전역 공간에 초기 데이터를 전달해주거나 기존 데이터를 변경해주는 Reducer생성
4. reducer에서 만들어진 데이터를 store에 저장
5. index.js에서 store객체를 최상위 컴포넌트인 App에 전달
6. 각 컴포넌트에서 useSelector를 통해 store의 데이터를 전달 받아 출력
7. 자식 컴포넌트에서 store 전역 데이터 변경을 위해 다시 변경할 데이터를 action객체로 만들어 dispatch에 전달

#### uuid

- [uuid](https://www.npmjs.com/package/uuid)
- Node에서 사용하는 uuid 인스톨
- 랜덤의 숫자를 무한으로 만들어줌?
  `npm i uuid`

## 231206

#### useReducer 상태 관리

- useReducer 장점: 상태 변화를 예측하기 쉽게 만들어주며, 상태 변화를 처리하는 로직을 한 곳에 모아 관리할 수 있게 함

  `const [state, dispatch] = useReducer(reducer, initialState);`

  - state: 현재 상태 값
  - dispatch: 액션을 발생시키는 함수
  - 디스패치 함수를 호출하면 리듀서 함수가 새로운 상태를 컴포넌트의 상태로 설정
  - reducer: 현재 상태와 액션을 인자로 받아, 새로운 상태를 반환하는 함수
  - initialState: 초기 상태 값

- switch문을 이용하여 작성.

```
const action = {
  type: 'INCREMENT', // 작업 종류를 나타내는 문자열
  payload: ,
};
```

- action :
  - 상태 변경을 정의하는 객체. 리듀서 함수는 이 action의 타입을 기준으로 상태 변경 결정.
  - type 속성을 가진 객체로 구성되어야 하며 문자열
  - 보통 관습적으로 대문자로 작성
- payload :
  - 선택 속성
  - action이 상태를 어떻게 변경할지를 정의하는 추가 데이터

#### useState VS useReducer

- **useState**
  - 상태를 관리하는 가장 기본적인 방법
  - 단일 상태 값을 관리하고, 상태를 업데이트하는 함수 반환
  - 상태 값이 단순하거나 복잡한 로직이 필요하지 않은 경우에 적합
- **useReducer**
  - 상태 값이 복잡하거나 여러 하위 값을 가지고 있는 경우에 사용
  - 리듀서 함수와 초기 상태를 인자로 받아, 현재 상태와 디스패치 함수를 반환

## 231204-5

#### Context 상태관리

- [Context-react](https://ko.legacy.reactjs.org/docs/context.html)
- context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있다.

- ​**Context API**

  - React 컴포넌트 트리 안에서 전역(global) 상태 관리
  - 컴포넌트 트리 전체에 데이터를 제공할 수 있음
  - 하지만, 컴포넌트를 재사용하기가 어려워 지기 때문에 꼭 필요할 때만 사용

- **React.createContext**
  : Context 객체 생성(저장공간)<br>
  - 컨텍스트는 따로 파일을 만들어 관리한다.

```
const MyContext = React.createContext(초기값);
```

- 동적 Context : state, actions 객체를 가짐.
  `const ColorContext = createContext({state:값, actions:값});`<br>
- state: 전역에서 사용되는 상태 값.
- actions: 상태를 변경하는 함수.
  : () => {}; 초기값. 초기 세팅 후, 실제 함수를 쓰면 대체가 됨.<br>
- Provider로 감싸지 않고 사용할 경우 기본값은 null로 초기화.

- **Context.Provider**
  : 하위 컴포넌트에게 값을 제공하는 역할<br>

```
<MyContext.Provider value={value}>
  <Components />
</MyContext.Provider>
```

- **Context.Consumer**
  : Context 값을 읽는 역할<br>

```
<MyContext.Consumer>
  {value => value 사용 코드}
</MyContext.Consumer>
```

- **useContext()**
  : Context 값을 hook<br>

```
const value = useContext(MyContext);

return <p>{value}</p>;
```

## 321201

#### 팀프로젝트 시작

- 프로젝트 팀명
- 깃관리자 선정
- 앱 개발 계획서
  - 기술적인 부분 중심으로 작업
  - 포트폴리오 작업 방향 생각해두기

#### ex: Nike mini homepage 만들기

## 231130

#### ex:newsAPI 만들기

- [NewsAPI](https://newsapi.org/s/south-korea-news-api)

#### ex:kakaoAPI 만들기

- [REST API:book](https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book)

#### qs : 쿼리 문자열을 다루기 쉽게 해주는 라이브러리

- 쿼리 문자열을 파싱하는 라이브러리
- [npmjs:qs](https://www.npmjs.com/package/qs)

```
// 터미널에 라이브러리 설치
npm i qs
```

#### react router DOM : 리액트 라우터

- [NavLink](https://reactrouter.com/en/main/components/nav-link)

```react
  <Link to="">
  : 단순 이동하고자 할 때. === <a href="">
  ㄴ to="경로"

  <NavLink to="">
  : active 클래스 값이 기본으로 탑재(반환값 true:false)
    ㄴ to="경로"
    ㄴ end="경로" 경로가 정확하게 일치할 때 active 적용 가능
```

## 231129

#### react router DOM : 리액트 라우터

- [feature overview](https://reactrouter.com/en/main/start/overview)
- 리액트의 주기능은 아님. 따로 개발하여 운영하는 단체.
- 리액트에서 다양한 페이지 간의 이동 및 네비게이션을 관리하고 구현하는 데 사용
- 설치 후 사용.

```react
npm i react-router-dom
```

- 사용 시, import 해야 사용 가능.

```
import {  BrowserRouter ,  Routes,  Route,  Link  } from "react-router-dom";
<Route path="경로" element={ <보여주고싶은 컴포넌트 /> }>
```

- BrowserRouter : HTML5의 History API를 사용

```react
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <App />
    </BrowserRouter>
  );
}
```

- Route : 특정 경로에 대한 컴포넌트 연결

```react
<Routes>
<!-- path="/" 첫페이지 설정 -->
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
</Routes>
```

```
<!-- 작성 값 -->
<Route path="/경로명" element={<컴포넌트명 />} />
```

```
<!-- 잘못된 페이지 연결 시, 보여지는 경로 연결
    -> 항상 설정의 마지막에 작성한다. -->
<Route path="*" element={<NotFoundPage />} />
```

- Link to : Router 주소 변경 컴포넌트
- 브라우저에서 렌더링 된 결과는 `<a href="">`로 표시된다.

```
<Link to="/path주소(경로명)">표시되는 내용</Link>
<Link to="/">홈</Link>
<Link to="about">소개</Link>
```

- **useParams** [useParams](https://reactrouter.com/en/main/hooks/use-params)
- 변수. 하위 컴포넌트 연결 시 사용.
- id나 이름을 사용해서 하위컴포넌트를 불러옴.

```
const { 사용자정의변수 }  = useParams();
const { userId } = useParams();
```

```
        {/* useParams를 이용해 name값을 가져옴 */}
        <Route path="/Products/:name" element={<Products />} />
        <Route path="/Products/:userId(변수명)" element={<Products />} />
```

- const {사용자정의 라우트 변수} = useParams();
- 이거하나면 data를 이용해 100개의 페이지도 만들 수 있음...

```
const Products = ({ data }) => {
const { name } = useParams();

  return (
// 데이터 값 불러와 맞는 링크랑 페이지 연결
      {data
        .filter((itm) => itm.title === name)
        .map((itm) => (
          <div key={itm.id}>
            <h3>{itm.title}</h3>
            <p>{itm.info}</p>
          </div>
        ))}
    </div>
  );
};
```

- 유니버셜 마크 `/*`

  - `"/*"` == 모든 경로,
  - `"/menu/*"` == 메뉴 뒤에 오는 모든 경로
    <br> -> 주로 서브 라우터 구성 시, 주로 사용.

- Query

  - `?`뒤에 들어가는 내용이 쿼리.
    - 쿼리 변수
    - &query=text
    - &image=photo
    - &lang=ko
  - 변수값을 통해 페이지 내용 변화를 줌.

- **useLocation** [useLocation](https://reactrouter.com/en/main/hooks/use-location)

  - 정보의 값을 확인할 수 있음.

- **useNavigate** [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)
  - `<Link to>`와 같은 역할을 하거나 뒤로가기
  - 주로 뒤로가기를 쓰기 위해 사용한다.
  - 작업 시, History 컴퍼넌트를 따로 만들어 연결만으로 편하게 사용이 가능.

```
const navigate = useNavigate();
navigate('/about'); // about으로 이동
navigate('/');// 루트(홈)로 이동
navigate(-1);// 이전으로 이동
navigate(-3);// 3단계 이전으로 이동
```

## 231128

#### pixabay로 검색 갤러리 만들기

- [react-masonry-css](https://github.com/paulcollett/react-masonry-css)
- [styled-reset](https://www.npmjs.com/package/styled-reset)

## 231124

#### ex: Index 만들기 (scroll event, menu-bar)

```

Main
├─ MenuNav
├─ MainImg
├─ MainSwiper
└─ MainTop

```

## 231123

#### swiper

1. 터미널에서 설치

```

npm i swiper

```

2. swiper 사이트에서 react 들어가서 참고해서 적용.

- [swiper react](https://swiperjs.com/react)
- 스와이퍼 스타일 값도 줄 수 있음.

#### resize: DOM 제어

- 돔을 제어할 때는 객체명을 꼭 작성해야함.

```

window.addEventListener("resize", () => {
setWidth(window.innerWidth);
});

```

- 이렇게 그냥 쓰면 시스템 과부화가 생김.
- 그래서 useEffect를 사용해줘야함.

```

useEffect(() => {
window.addEventListener("resize", () => {
setWidth(window.innerWidth);
});
},[]);

```

#### API: Async await axios

- 외부에 불러온 데이터를 내부로 불러오기
- 리액트의 외부데이터 호출은 계속해서 랜더링되기때문에, 조건이 충족될 때 불러오도록 작성.
- 외부 데이터를 불러오기 때문에 useEffect 기본으로 사용.

1. useEffect 사용

```

useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((json) => setData(json));
}, []); // [] 의존성 배열의 영역을 비워두면 한 번만 호출.

```

2. axios 액시오스 사용

- ① 터미널에 npm i axios 데이터 설치

```

npm i axios

```

- ② useEffect를 이용하여 axios 작성

```

useEffect(() => {
axios.get(url).then((res) => setData(res));
}, []);

```

3. Async 사용

```

useEffect(() => {
const getData = async () => {
const res = await fetch(URL);
const data = await res.json();
setData(data);
};
getData();
});

```

4. Async + axios 사용 : 가장 코드가 간결해서 많이 사용.

```

useEffect(() => {
const getData = async () => {
const res = await axios.get(URL);
setData(res.data);
};
getData(data);
}, []);

```

- axios에서 try{}catch(err){} 를 이용하여 오류 확인.

## 231122

#### ex: Friend List 만들기

```

Friends
├─ FriendLists
│ ├─ FriendItem
│ └─ FriendLiBtn
└─ FriendInfo

```

#### useEffect

- 컴포넌트 생명주기마다 특정 기능을 실행 할 수 있게 해주는 hook
- (sideEffect처럼 주요기능 이외의 함수)
  - 생명주기
  - Mount: 생성. 시작시 컴포넌트 생성
  - Update: 갱신. state 값 변경 시 컴포넌트변경(state값 변경)
  - unMount: 소멸. 종료 시 컴포넌트소멸
- 외부 API를 불러올 때 주로 사용.

```

useEffect(함수, []);

  <!--
  주로 side effect 를 수행.
  비동기 통신 요청 및 응답, DOM 조작, props를 받아서 갱신할 때, 외부 라이브러리 등을 사용할 때 적용.
  -->

```

- useEffect(()=>{실행문}); 렌더링 될 때마다 실행. 일반적으로는 사용 X
- useEffect(()=>{실행문},[]); mount가 한 번만 실행.
- useEffect(()=>{실행문},[state(props)]); 특정 상태이거나 props가 변결 될 때 마다 실행.

#### useEffect : clean-up

- clean-up 함수: 살아있는 이벤트를 제거.
- return: Mount가 한 번만 실행 후 정리. 메모리 누수가 발생하지 않도록 정리가 필요하기 때문.

```

useEffect(()=> {
실행문
return ()=> {clean-up 함수
};
},[state]);

```

#### useCallback

- useCallback(()=>{},[]);
  - 함수를 memoization 함. 즉, 이전에 계산된 값을 저장했다가 동일한 상황이 다시 발생하면 다시 계산하지 않고 저장된 값을 반환.
  - 있던 값을 다시 반환하여 사용.
  - 주로 하위 컴포넌트에 콜백 함수를 전달 할 때 사용.
- (가시적으로 보이지 않지만)시스템적으로 훨씬 원활하고 빠르게 돌아가도록 해줌.

## 231121

#### useRef

- 컴포넌트 렌더링과 상관없이 값을 보관.
- 재랜더링을 피할 목적으로 사용.
  - DOM에 직접 접근하는 경우
  - ref는 컴포넌트 안에서만 동작
  - input의 focus나 scroll 이벤트, 애니메이션 사용 시.
- 고유한 값이 필요할 때 사용.
- useRef를 사용할 때는 current를 함께 사용.

```react
/*
선언
const a = useRef();

사용
a.current.id = "userID";
*/
```

- current Ex)

```
const focusRef = useRef();
focusRef.current.focus();
```

- [Ref와DOM](https://ko.legacy.reactjs.org/docs/refs-and-the-dom.html#gatsby-focus-wrapper)
- [Hooks API Reference](https://ko.legacy.reactjs.org/docs/hooks-reference.html#useref)

#### GitHud 업로드

1. react 작업이 끝나면
2. package.json 파일 수정 (homepage, deploy 추가)
3. npm i gh-pages
4. git init부터 add, commit, reomte, push 등 진행
5. github settings에서 pages 설정
6. react로 돌아가 npm run build, deploy
7. github settings에서 pages gh-page로 변경

---

1. gh-pages 패키지 설치

```
npm i gh-pages
```

2. 설치 후 package.json 파일 수정

```
"homepage": "https://xxxx.github.io/portfolio",  // 깃헙 페이지 주소 추가
"deploy": "gh-pages -d build" // deploy 명령어 추가
```

3. deploy

```
npm run build // build 폴더로 빌드
npm run deploy // 현재 로컬 build폴더를 gh-pages 브랜치로 업로드
```

## 231120

#### ex: 컴포넌트를 활용하여 survey 만들기.

#### 데이터 삭제(CRUD)

- **CRUD란?**
  : 데이터를 다루는 기본 기능
  - Create 생성
  - Read 조회
  - Update 갱신
  - Delete 삭제
    - filter()를 이용하여 작성.

## 231118hw

- 미니 프로젝트 : 환율 계산기 만들기

## 231117

#### 외부 데이터 불러오기 external data

#### CSS style

- **scss style**
  - 예전부터 전통적으로 사용해온 스타일 방식.
  - 패키지를 설치해야 사용 가능.
  - 터미널에서 "npm i sass"로 node 환경에 패키지 다운로드.
  - 외부 링크로 연결하여 적용.
  - [sass](https://www.npmjs.com/package/sass)

```react scss

.container {
  display: flex;
  justify-content: space-evenly;
  margin: 50px auto;
  .box {
    // === .container .box : scss의 하위 표현
    text-align: center;
    padding: 4px 10px;
  }
}
```

- **styled-components**
  - 터미널에서 "npm i styled-components"로 node 환경에 패키지 다운로드.
  - 컴포넌트별로 같은 파일에 스타일 컴포넌트를 만들어서 직접 적용.
  - [styled-components](https://styled-components.com/)

```react styled-components
방법 1)
  const 컴포넌트명 = styled.태그명`
    css 스타일
  `
방법 2)
  const 컴포넌트명 = styled('태그')`
    css 스타일
  `
```

- **css module**
  - 파일명.module.css
  - 컴포넌트별 유지 보수를 용이하게 하기 위해 사용

```
<요소 className={참조변수.클래스명} />
<h1 className={myStyle.title} />

```

- 리액트 스타일은 컴포넌트별로 분리해서 사용하는 것을 추천
- 중복 이름 문제로 css보다는 css modules 사용

## 231116hw

- to do list 만들기

## 231116

#### default 폴더 만들기

- 새로운 작업 환경을 간편하게 만들기 위해 정리해둔 기본값 파일.
- 다음 작업 시, 해당 폴더 내용만 붙여넣은 후 "npm i"로 사용 가능.

#### 훅 hook

- 리액트가 사용자가 사용하기 편하게 만들어 놓은 함수.
- state와 생명주기 기능을 원하는 시점에 정해진 함수가 실행되도록 만든 함수
- 훅은 모두 use로 시작 함
- 개발자의 커스텀 훅도 가능

#### 상태 state : useState()

- state == 상태. 상태 변화를 위해 사용하는 hook.

  - 랜더링이 될 때 마다 화면에 새롭게 그려내는 방식이므로 상태 유지를 하지 못함
  - 새롭게 재랜더링되어 함수, 변수 등 다시 초기화 됨
  - 그래서 값을 유지하기 위해 hook을 사용
  - 상태 값이 변경되는 경우 useState()
    - **useState()** :state를 사용하기 위한 훅
      - const [state, setState] = useState(초기값);
      - const [상태데이터(변수), 상태값을 변경하기 위한 함수] = useState(초기값);
      - 초기값: 숫자, 문자, 논리, 배열 객체 등등

```react
// const [state이름, state변경함수] = useState(초기값)
const [state, setState] = useState();
```

#### 폼 form

- input
  - onChange / checked
  - value

## 231115

- 리액트 작업 시, 모든 작업은 src 안에 작업.
- 작업 시, '컴퍼넌트' 정리용 파일을 만들어 새로 생성하는 컴포넌트를 폴더 안에 정리.

#### 컴포넌트 작성 방법

- 방법1) 컴포넌트.jsx 로 작성
- 방법2) 컴포넌트 .js 로 작성
- 방법3) 컴포넌트 .js 로 생성 후 Reactjs code snippets의 단축키 사용 **(가장 간편해서 많이 쓰게 됩니다.)**

  - rsf 단축키: 선언 함수형 컴포넌트 (funtion)
  - rsc 단축키: 선언 표현식 컴포넌트 (화살표함수)

- 컴포넌트 내부: 화면이 보여지는 부분
  - 태그는 반드시 닫아야 함
  - 빈 태그도 반드시 닫아야 함
  - return 키워드 뒤에 한 줄 이상 작성 시, div, section, article 등의 하위 태그를 감싸는 태그 필요

#### style 적용

- 스타일 직접 적용
- 스타일 변수로 적용
- 스타일 외부 문서로 적용
- 스타일 프레임워크로 적용

#### props 설정

- 컴포넌트 생성 후 메인 컴포넌트에 연결하여 사용.
- 하위 컴포넌트는 갯수 제한 없음.
- 하위 컴포넌트에 자식 컴포넌트를 생성하여 연결 가능.
- 자식 컴포넌트도 갯수 제한 없음.
  - 자식 컴포넌트 연결 방법
    - props
    - 컴포넌트에 전달할 정보를 담고 있는 자바스크립트 매게이자
    - 리액트 컴포넌트 속성
    - 부모 -> 자식 컴포넌트로 전달
    - 객체형으로 속성을 key로 인식
    - <자식 컴포넌트 props=전달값 />
    - 전달값: {숫자}, '문자', {논리연산}, {state}, {function} ...

#### build

#### 다른 장소에서 이동하여 작업할 파일 생성

- 다른 환경, 또는 새로운 작업을 진행할 때 사용할 수 있는 기본 작업파일 생성.
  - 필수 파일
    - package.json
    - [src] 폴더
  - 선택 파일
    - [public] 폴더
    - .gitignore : 깃허브 업로드 시 필요. 하지말아야 할 것들에 대한 설정

#### event

- 예전 버전의 자바스크립트 스타일
  - js: 'onclick', 'onsubmit'
  - JSX: 'onClick', 'onSubmit'
- 'on-'접두어 + 첫글자 대문자인 이벤트명
- 'on-'접두어를 사용한 모든 이벤트 사용 가능.
- onClick={함수명}

<details>
<summary>접기/펼치기</summary>

```react
import React from "react";

const Event1 = () => {
  function handleClick1() {
    console.log("클릭1");
  }

  const handleClick2 = () => console.log("클릭2");

  const num = (item) => console.log(item + item);

  return (
    <div className="borderTop">
      <h2>Event1</h2>
      <h3>
        <em>예전 버전의 자바스크립트</em>
      </h3>
      <h3>'on-'접두어 + 첫글자 대문자인 이벤트명</h3>

      <p>
        {/* js: 'onclick', 'onsubmit' */}
        {/* JSX: 'onClick', 'onSubmit' */}
        {/* <button onClick={함수명}>클릭</button> */}
        <button onClick={function () {}}>복잡</button>
        <button onClick={handleClick1}>클릭</button>
        <button onClick={handleClick2}>눌러보자</button>
      </p>

      <p>
        <button
          onClick={() => {
            console.log("직접 작성");
          }}>
          직접 작성
        </button>
      </p>
    </div>
  );
};

export default Event1;

```

</details>

- 이벤트 발생 후 결과값을 나타낼 때.
  - {()=>함수명(인자)} 로 작성

```react
        {/* 함수를 만들고 매개변수로 100 입력 시, 100+100 = 200 콘솔 출력 */}
        {/*
          <button onClick={num(100)}>숫자 출력</button>
          {num(100)} == 함수 즉시 호출. 처음부터 실행.

          {()=>함수명(인자)} == 함수로 다시한번 구성해야 클릭할 때 결과값 출력.
        */}
        <button onClick={() => num(100)}>숫자 출력</button>
```

#### target

#### map()

- .map((elem, index) => {});
  - 새로운 배열로 반환
  - .map() 사용 시 고유한 key값을 부여해야 함
  - index의 경우 단순 출력이 필요한 경우만 사용 권장
  - 삭제, 수정, 추가 등에서는 index가 아닌 key 혹은 고유 id 사용 권장
  - 대부분 안정적인 고유성을 부여하기 위해 배열 내부 요소에 id를 작성하여 key로 사용

<details>
<summary> 파일 정리 [접기/펼치기]</summary>

- ./components/Basic1
- ./components/Basic2
- ./components/Basic3
- ./components/Basic4
- ./components/Basic5
- ./components/Basic6
- ./components/Event1
- ./components/Map
- ./components/Target
- ./ex/Ex1
- ./ex/Ex2
- ./ex/Ex2Sub
- ./ex/Ex3
- ./ex/Ex4
- ./ex/Ex4Sub
- ./ex/Ex5
</details>

## 231114

#### react 기초

- [react site](https://ko.legacy.reactjs.org/)
