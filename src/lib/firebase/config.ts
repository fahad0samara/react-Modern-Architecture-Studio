import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Demo mode configuration for development
const firebaseConfig = {
  apiKey: "demo-mode",
  authDomain: "demo-mode.firebaseapp.com",
  projectId: "demo-mode",
  storageBucket: "demo-mode.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);