// Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹 앱)의 firebaseConfig 값을 여기에 붙여 넣습니다.
// 이 값들은 비밀번호가 아니라 공개되어도 되는 프로젝트 식별자입니다.
// 데이터는 firestore.rules의 보안 규칙이 지킵니다(본인 계정의 할 일만 읽고 쓸 수 있음).
// apiKey가 비어 있으면 로그인 기능 없이 이 기기에만 저장합니다.
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
