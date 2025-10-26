<meta name='viewport' content='width=device-width, initial-scale=1'/>// ==========================
// 🔥 Firebase Config for NeuroGallery
// ==========================

// Import Firebase SDKs (always from gstatic CDN for GitHub Pages)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where, 
  orderBy, 
  serverTimestamp, 
  onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject 
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";

import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// ==========================
// ⚙️ Your Firebase Configuration
// ==========================
const firebaseConfig = {
  apiKey: "AIzaSyCK-o9vIFlrlySSyfamIf9bzL3BqNGIq3o",
  authDomain: "neurogaller.firebaseapp.com",
  projectId: "neurogaller",
  storageBucket: "neurogaller.appspot.com", // ✅ must end with .appspot.com
  messagingSenderId: "353726562637",
  appId: "1:353726562637:web:8b2a53a1081b43a3cdb704",
  measurementId: "G-2VW3RB5320"
};

// ==========================
// 🚀 Initialize Firebase
// ==========================
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// ==========================
// 🧩 Export everything you might need
// ==========================
export {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  onSnapshot,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  signInWithPopup,
  signOut,
  onAuthStateChanged
};

// ==========================
// ✅ Connection Test (optional)
// ==========================
console.log("✅ Firebase initialized successfully!");