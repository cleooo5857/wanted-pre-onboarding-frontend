
## 인적사항

이름 : 황순욱

### 실행 방법

```shell
git clone https://github.com/cleooo5857/wanted-pre-onboarding-frontend.git
cd my-app
npm i
npm start
```

### 배포 링크

AWS-S3 정적파일을 통해 배포
[배포 링크](http://wanted-pre-onboarding-frontend.s3-website.ap-northeast-2.amazonaws.com/)

### 사용 라이브러리
* React Router
* Axios
* Styled Components

### 파일 구조

```bash
📦src
 ┣ 📂component
 ┃ ┣ 📂join
 ┃ ┃ ┗ joinForm.js
 ┃ ┣ 📂login
 ┃ ┃ ┗ loginForm.js
 ┃ ┣ 📂todo
 ┃ ┣ ┣ index.js
 ┃ ┃ ┣ 📂Form
 ┃ ┣ ┣  ┗ todoForm.js
 ┃ ┃ ┣ 📂List
 ┃ ┣ ┣  ┗ todoList.js
 ┣ 📂hook
 ┃ ┗ useAuthRedirect.js
 ┃ ┗ useHomeRegexp.js
 ┃ ┗ useinputs.js
 ┣ 📂libs
 ┃ ┗ global.js
 ┣ 📂pages
 ┃ ┣ 📂join
 ┃ ┃ ┗ joinPage.js
 ┃ ┣ 📂Login
 ┃ ┃ ┗ loginPage.js
 ┃ ┣ 📂Main
 ┃ ┃ ┗ mainPage.js
 ┃ ┣ 📂Todo
 ┃ ┃ ┗ todoPage.js
 ┣ 📂repository
 ┃ ┗ TokenRepository.js
 ┣ 📂routers 
 ┃ ┗ PrivateRoute.js
 ┃ ┗ Routing.js
 ┣ 📂services
 ┃ ┣ ┣ index.js
 ┃ ┣ 📂auth
 ┃ ┃ ┗ authApi.js
 ┃ ┣ 📂todo
 ┃ ┃ ┗ todoApi.js
 ┣ App.js
 ┗ index.js
```

### 주요 파일과 구현 설명
****  
* React Router를 이용하여 각 경로로 라우팅을 했습니다.  
* 로그인 상태를 전역으로 관리할 Context 태그가 적용된 곳이며, 또한 전역에 공통적으로 적용해줄 Header 컴포넌트를 적용한 곳입니다.  

**Github**  
* 커밋컨벤션 지키며 Github 업데이트 수행

**📂routers/PrivateRoute.js/Routing.js**  
* Routing.js 각각의 페이지들을 한 곳의 응집시켜 가독성, 유지보수 상승 
* PrivateRoute.js 토큰의 저장 유무를 확인하여 접근가능,불가 페이지입니다.


**📂component/joinForm.js/loginForm.js**  
* Hook을 이용해 이메일,비밀번호 유효성 검사, 비동기통신으로 로그인,회원가입 기능 구현

**📂services/📂auth/📂todo**  
* 최대한 관심분야별로 폴더를 구분하여 유지보수와,가독성에 집중 상승하였습니다.



