// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrH1F4bomLB7yEfzj9s_CSTkv5uv8ID-8",
  authDomain: "full-stack-warehouse-react.firebaseapp.com",
  projectId: "full-stack-warehouse-react",
  storageBucket: "full-stack-warehouse-react.appspot.com",
  messagingSenderId: "46852356256",
  appId: "1:46852356256:web:9caf075303dc9e0a43b1c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
