# 할 일 관리

브라우저에서 쓰는 간단한 할 일 목록입니다. 빌드 과정 없이 `index.html` 한 파일로 동작합니다.

## 기능

- 할 일 추가, 수정(더블클릭 또는 "수정" 버튼), 삭제
- 마감일 지정과 남은 날짜 표시, 마감 지난 일 개수 표시
- 카테고리(업무·개인·공부·쇼핑)와 카테고리별 보기
- 전체 / 진행 중 / 완료 필터, 추가한 순·마감일 순 정렬
- 완료한 항목 한 번에 지우기
- Google 로그인 시 계정(Firestore)에 저장해 여러 기기에서 동기화

로그인하지 않으면 할 일은 이 기기의 브라우저(localStorage)에만 저장됩니다.

## 실행하기

`index.html`은 `firebase-config.js`를 ES 모듈로 불러오기 때문에, 파일을 더블클릭해서 여는 방식(`file://`)으로는 동작하지 않습니다. 이 폴더에서 로컬 웹 서버를 띄운 뒤 접속하세요.

Node.js가 있다면:

```bash
npx serve -l 8000
```

Python이 있다면:

```bash
python -m http.server 8000
```

그런 다음 브라우저에서 <http://localhost:8000> 을 엽니다.

## Firebase 설정

- `firebase-config.js`: Firebase 웹 앱 설정 값입니다. `apiKey`를 비워 두면 로그인 기능 없이 이 기기에만 저장합니다.
- `firestore.rules`: 로그인한 사용자가 자기 계정(`users/{uid}/todos`)의 할 일만 읽고 쓸 수 있게 하는 보안 규칙입니다. Firebase 콘솔의 Firestore > 규칙에 적용해야 합니다.

다른 주소(예: 배포한 사이트)에서 로그인하려면 Firebase 콘솔 > Authentication > 설정 > 승인된 도메인에 그 주소를 추가해야 합니다.
