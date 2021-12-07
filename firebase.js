// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWDdwU_h99LD53bF_AKC_oSm-BESIM8Ls",
  authDomain: "fir-auth-66855.firebaseapp.com",
  projectId: "fir-auth-66855",
  storageBucket: "fir-auth-66855.appspot.com",
  messagingSenderId: "872099796206",
  appId: "1:872099796206:web:1e5c5f07d2ad86ff6f0fff"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){ 
    app = firebase.initializeApp(firebaseConfig)
}
else{
    app= firebase.app()
}

const auth = firebase.auth()

export { auth }