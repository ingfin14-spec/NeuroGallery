<meta name='viewport' content='width=device-width, initial-scale=1'/>// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, getDoc, getDocs, query, where, orderBy, onSnapshot, updateDoc, deleteDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCK-o9vIFlrlySSyfamIf9bzL3BqNGIq3o",
  authDomain: "neurogaller.firebaseapp.com",
  projectId: "neurogaller",
  storageBucket: "neurogaller.appspot.com",
  messagingSenderId: "353726562637",
  appId: "1:353726562637:web:8b2a53a1081b43a3cdb704",
  measurementId: "G-2VW3RB5320"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

// re-exports for convenience in other files
export {
  signInWithPopup, signOut, onAuthStateChanged,
  collection, addDoc, doc, getDoc, getDocs, query, where, orderBy, onSnapshot, updateDoc, deleteDoc, serverTimestamp,
  ref, uploadBytes, getDownloadURL, deleteObject
};