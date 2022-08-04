import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBadqnJK7f7oEVNKtrCZBGa9nUCp24K_Pc",
    authDomain: "machine-58f93.firebaseapp.com",
    projectId: "machine-58f93",
    storageBucket: "machine-58f93.appspot.com",
    messagingSenderId: "449073684239",
    appId: "1:449073684239:web:59cef60673b67bdefae87a",
    measurementId: "G-PXNC81PLSS"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const firestore = getFirestore(app);