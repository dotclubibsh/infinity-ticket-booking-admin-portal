// Shared Firebase connection — imported by user.html and admin.html
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAY1EsKHHsm_ih-F-5Zrrtj08mqdF_v00g",
  authDomain: "infinity-booking-portal.firebaseapp.com",
  projectId: "infinity-booking-portal",
  storageBucket: "infinity-booking-portal.firebasestorage.app",
  messagingSenderId: "71760678455",
  appId: "1:71760678455:web:0a0e4fe2b5405334f5b9b2",
  measurementId: "G-VTC8XLRWYJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// How long a seat stays locked (yellow) before auto-releasing, in milliseconds
export const LOCK_TIMEOUT_MS = 5 * 60 * 1000; // 5 minutes
