// util/firebase.js (or wherever you're keeping this file)

import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ✅ CORRECT source

const firebaseConfig = {
  apiKey: "AIzaSyA2_AFVKT3rYFWnmuBInXsfeY7JQWXpkf0",
  authDomain: "test-app-a0d51.firebaseapp.com",
  projectId: "test-app-a0d51",
  storageBucket: "test-app-a0d51.appspot.com", // ✅ fix: should be .appspot.com not .firebasestorage.com
  messagingSenderId: "903331148116",
  appId: "1:903331148116:web:90b2bd98d58aa17e0618c1",
  measurementId: "G-BVWZ2D9D1Z"
};

// Initialize Firebase app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// ✅ Proper Firestore initialization
const db = getFirestore(app);

// Optional: Enable Analytics only on client
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}

export { app, db, analytics };
