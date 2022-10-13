import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your FIREBASE config
const config = {
  apiKey: "AIzaSyAtkiPWrc6JXrSZbKGap1MttFQHx3v4EB0",
  authDomain: "instagram-clone-73e59.firebaseapp.com",
  projectId: "instagram-clone-73e59",
  storageBucket: "instagram-clone-73e59.appspot.com",
  messagingSenderId: "973391795850",
  appId: "1:973391795850:web:6bfc015143d3973c95bf73"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
 
export { firebase, FieldValue };