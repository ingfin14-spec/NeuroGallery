<meta name='viewport' content='width=device-width, initial-scale=1'/>// Firebase 100% working config for NeuroGallery

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

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
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();<script>// ==========================
// 🔥 Firebase Config for NeuroGallery
// ==========================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { 
  getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { 
  getStorage, ref, uploadBytes, getDownloadURL, deleteObject 
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";
import { 
  getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

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
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

console.log("✅ Firebase initialized successfully");</script>