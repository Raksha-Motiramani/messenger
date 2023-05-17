import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArSu8BY8RHta8Mnr-qg8ync-9ZUrl7Qwk",
  authDomain: "chat-37b59.firebaseapp.com",
  projectId: "chat-37b59",
  storageBucket: "chat-37b59.appspot.com",
  messagingSenderId: "216437537266",
  appId: "1:216437537266:web:23c2e35ddfe099a3d5d36b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();