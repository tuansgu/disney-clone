import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC7IIi9hM5y3OtB4QW0LupJW0SVbR3CO5c",
  authDomain: "clone-disney-a190c.firebaseapp.com",
  projectId: "clone-disney-a190c",
  storageBucket: "clone-disney-a190c.appspot.com",
  messagingSenderId: "701060538671",
  appId: "1:701060538671:web:5aecfc8f49787740f6c1da",
  measurementId: "G-Z4TGGXVSHW"
};
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;