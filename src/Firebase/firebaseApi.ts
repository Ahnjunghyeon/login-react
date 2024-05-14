// 해당 파일의 사용 : API = Application Programming Interface
// 즉 프로그램 간 상호 작용을 위한 인터페이스를 정의하는 파일

import { firebaseConfig } from "./firebaseConfig";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import {
  Auth,
  getAuth,
  GoogleAuthProvider,
  NextOrObserver,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
  Unsubscribe,
  User,
} from "firebase/auth";

export default class FirebaseApi {
  app: FirebaseApp;
  analytics: Analytics;
  auth: Auth;
  googleAuthProvider: GoogleAuthProvider;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(this.app);
    this.auth = getAuth(this.app);
    this.googleAuthProvider = new GoogleAuthProvider();
  }

  onAuthStateChanged = (nextOrObserver: NextOrObserver<User>): Unsubscribe => {
    return onAuthStateChanged(this.auth, nextOrObserver);
  };

  signInWithGoogleRedirect = () => {
    return signInWithRedirect(this.auth, this.googleAuthProvider);
  };

  signOut = () => {
    return signOut(this.auth);
  };
}
