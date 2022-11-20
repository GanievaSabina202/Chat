import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDhdAPWY0w5qA4gNylJ5HeSvA_0XG0By5o",
    authDomain: "chat-a94e0.firebaseapp.com",
    projectId: "chat-a94e0",
    storageBucket: "chat-a94e0.appspot.com",
    messagingSenderId: "642217533799",
    appId: "1:642217533799:web:54a87b7d03674b99b04fc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)