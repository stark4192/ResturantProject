import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBr1aga2ZRINVvJ-qqYyTjXU3uWNZNiUyY",
    authDomain: "loginsystem-e17e9.firebaseapp.com",
    projectId: "loginsystem-e17e9",
    storageBucket: "loginsystem-e17e9.appspot.com",
    messagingSenderId: "94876806025",
    appId: "1:94876806025:web:867d26c89dbc5d04ed4f58",
    measurementId: "G-RGLW7W27S3"
};

const Auth = initializeApp(firebaseConfig);

export default Auth;
