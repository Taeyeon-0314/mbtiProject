# MBTI Test Project

---

## 📚 프로젝트 소개

MBTI를 테스트 하고 테스트 결과를 공유할수 있는 사이트

---

## 👉🏼 프로젝트 개요

- **프로젝트명**
  **MBTI 테스트**
- **진행 기간**
  **24.09.05 ~ 24.09.11**

---

## 🧐 사용 스택

|                                                    사용언어                                                    |                                                                                                                                                                                                                                                                                                                            프레임워크 및 라이브러리                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                  Tools                                                                                                                                                                                                                                                                                                                  |
| :------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> | <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=black"> <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=black"> <img src="https://img.shields.io/badge/jsonwebtokens-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=black"> | <img src="https://img.shields.io/badge/vscode-007ACC?style=for-the-badge&logo=vscode&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/chrome-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white"> |

---

## 🗂️ 프로젝트 구조

<details>
<summary style="font-weight: bold; font-size: 20px">프로젝트 구조</summary>

```
mbtiProject
├─ README.md
├─ db.json ──→ JSON 로컬 데이터베이스(테스트용)
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ api
│  │  ├─ auth.js ──────────────┤
│  │                           ├─→ 회원가입 및 로그인 ,프로필 수정을 위한 API 및 인스턴스 설정
│  │  ├─ authAPIInstance.js ───┤
│  │  ├─ testAPIInstance.js ───┤
                               ├─→ 테스트 결과 저장,삭제, 공개/비공개 여부 변경을 위한 API 및 인스턴스 설정
│  │  └─ testResults.js ───────┤
│  ├─ assets
│  ├─ components
│  │  ├─ AuthForm.jsx ──→ 로그인/회원가입 component
│  │  ├─ Layout.jsx ──→ 레이아웃 component
│  │  ├─ ProtectedRoute.jsx ──→ 로그인 여부에 따른 라우트 설정 component
│  │  ├─ TestForm.jsx ──→ 테스트 폼 component
│  │  ├─ TestResultItem.jsx ──→ 테스트 결과 항목 component
│  │  └─ TestResultList.jsx ──→ 테스트 결과 리스트 component
│  ├─ data
│  │  └─ questions.js ──→ 테스트를 위한 질문 데이터
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Home.jsx ──→ 메인 페이지
│  │  ├─ Login.jsx ──→ 로그인 페이지
│  │  ├─ ProfilePage.jsx ──→ 프로필(닉네임) 수정 페이지
│  │  ├─ Signup.jsx ──→ 회원가입 페이지
│  │  ├─ TestForm.jsx ───┤
│  │                     ├─→ 테스트 페이지
│  │  ├─ TestPage.jsx ───┤
│  │  └─ TestResult.jsx ──→ 테스트 결과 페이지
│  ├─ reset.css ──→ 스타일 리셋 및 tailwind
│  ├─ shared
│  │  └─ Router.jsx ──→ 라우터 설정
│  ├─ utils
│  │  └─ mbtiCalculator.jsx ──→ MBTI 계산을 위한 로직
│  └─ zustand
│     └─ basesStore.js ──→ Zustand 상태 관리를 위한 store
├─ tailwind.config.js ──→ Tailwind CSS 설정
├─ vercel.json ──→ vercel 배포를 위한 설정
├─ vite.config.js
└─ yarn.lock
```

</details>

---

## 🛠️ 기능 설명

### 👀 메인페이지

1. 로그인 여부를 레이아웃을 통해 확인 할 수 있음
2. 로그인 하지 않은 유저가 내 MBTI 알아보러 가기 클릭시 alter창으로 로그인 후 이용하라는 알림을 주고 로그인 페이지로 이동
3. 로그인 한 유저는 레이아웃에 있는 프로필 , 테스트 , 결과보기를 클릭할 수 있음

![로그인 전](https://github.com/user-attachments/assets/013c5e4e-1bea-415b-a0dc-fdf4f1353bee)
![로그인 후](https://github.com/user-attachments/assets/8d40451b-30b7-4993-9247-68207c2c2285)

---

### 🔐 로그인

1. 아이디와 비밀번호를 입력하여 로그인을 할 수 있음
2. 아이디 또는 비밀번호를 입력하지 않으면 입력할 수 있도록 알림 출력
3. 로그인 완료시 메인페이지로 이동
   ![로그인](https://github.com/user-attachments/assets/ee68bab0-ca29-4a1e-99e6-41701fd40c2c)

---

### 🧑‍🧒 회원가입

1. 아이디와 비밀번호 닉네임을 입력하여 회원 가입을 할 수 있음
2. 아이디 또는 비밀번호 ,닉네임을 입력하지 않으면 입력할 수 있도록 알림 출력
3. 회원가입이 완료되면 로그인 페이지로 이동

![회원가입](https://github.com/user-attachments/assets/452bf5ba-1430-4b8d-b8e2-a8d17687eb47)

---

### 👦 프로필

1. 닉네임을 확인 할 수 있음
2. 닉네임을 변경 할 수 있음
3. 닉네임 변경완료시 메인 페이지로 이동

![닉네임 변경 전](https://github.com/user-attachments/assets/f5a18579-2015-4724-8828-87659265f99a)
![닉네임 변경 후](https://github.com/user-attachments/assets/50d5b326-8a40-470e-a5a6-9156b02bbdf7)

---

### 📝 MBTI 테스트

1. 20문항의 MBTI 테스트 문항 제공
2. 문항중 하나라도 체크 안할시 모든 질문에 답변해 주세요. alter창 출력
3. MBTI 테스트 완료시 결과보기 페이지로 이동

![테스트](https://github.com/user-attachments/assets/05af999a-29cc-47ac-9914-7c52872703d1)

---

### 🧾 MBTI 결과 리스트

1. 다른 사용자들이 테스트한 결과와 내가 테스트한 결과를 볼 수 있음.
2. 테스트 결과는 최신순으로 정렬
3. 사용자는 다른사람에게 공개할지 비공개 할지 선택할 수 있음

![결과 리스트 공개](https://github.com/user-attachments/assets/0e4f962d-3219-4b73-9f34-3d5bf2efa7c6)
![결과 리스트 비공개](https://github.com/user-attachments/assets/03c44014-7e93-4560-90f6-71cdda407ac7)

---

### 😵 트러블슈팅

### 1️⃣ 결과보기 클릭시 로딩이 오래걸리는 문제

결과 보기를 클릭시 로딩이 오래 걸리는 문제발생
![결과보기 로딩](https://github.com/user-attachments/assets/4b425f65-2b86-4dbe-ac96-b17d3b98c297)

#### 😭 원인

```
원인은 아마 json-server를 위해 glitch를 이용했는데 glitch에 문제가 아닐까 싶다..
아니면 내 코드의 문제인가..
```

#### 🥳 해결방법

```
아직 해결하지 못했다...
```

### 2️⃣ 테스트 저장시 저장이 안되는 에러 발생

1. 테스트를 완료 하고 저장을 하려했는데 해당 오류 발생
   ![테스트 저장 에러](https://github.com/user-attachments/assets/39d8b02a-1423-4298-803e-ff2589b7ab63)

2. MBTI 테스트를 저장하거나 불러오거나 할때 /testResults를 사용하기에 baseURL에 /testResults 를 넣음

```
import axios from "axios";

const testAPIInstance = axios.create({
    baseURL: 'http://localhost:5001/testResults/',
});

export default testAPIInstance;
```

3. 테스트 결과를 저장

```
export const createTestResult = async (resultData) => {
    const response = await testAPIInstance.post(resultData);
    return response.data;
};

```

#### 😭 원인

```
//testAPIInstance.post(경로 , 데이터)를 받아야 하는데 경로 없이 데이터만 넣어서 문제가 발생
```

#### 🥳 해결방법

```
const response = await testAPIInstance.post('', resultData);
경로 부분에 빈 문자열을 이용해서 해결할 수 있었음
```

해당 방법으로 하면 해결할 수 있었지만

```
testAPIInstance에
baseURL: 'http://localhost:5001 로변경하고
testResults에
const response = await testAPIInstance.post('/testResults',resultData);
변경하여 해결함
```

---

### 🎁 배포 사이트

#### [https://mbti-project-weld.vercel.app/](https://mbti-project-weld.vercel.app/)

#### [json-server용 깃허브](https://github.com/Taeyeon-0314/json-server/)

---
