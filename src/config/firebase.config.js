// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.CLIENT_API_KEY,
  authDomain: import.meta.env.CLIENT_AUTH_DOMAIN,
  projectId: import.meta.env.CLIENT_PROJECT_ID,
  storageBucket: import.meta.env.CLIENT_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.CLIENT_MESSAGING_SENDER_ID,
  appId: import.meta.env.CLIENT_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;