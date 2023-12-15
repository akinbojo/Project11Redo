import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
apiKey: "AIzaSyBUtCzGtpgg4SAkahkD43ERdF_MuYxU3_c",
authDomain: "project11-b5313.firebaseapp.com",
projectId: "project11-b5313",
storageBucket: "project11-b5313.appspot.com",
messagingSenderId: "655190475482",
appId: "1:655190475482:web:67215b1279735e6d459be3",
measurementId: "G-N78P89RL8B"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);