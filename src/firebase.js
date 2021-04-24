import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyDFGVI_ktYZx1NGa3PmJ64Q6BpPgbCagQM",
   authDomain: "disney-clone-e5c8f.firebaseapp.com",
   projectId: "disney-clone-e5c8f",
   storageBucket: "disney-clone-e5c8f.appspot.com",
   messagingSenderId: "627811859962",
   appId: "1:627811859962:web:43c05a16cc8edff17d7843",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
