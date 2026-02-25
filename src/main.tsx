// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const firebaseConfig = {
  apiKey: "AIzaSyDeGUVeTh6R74uMDD08zeULDpEvsulSU0E",
  authDomain: "strip-map-generator.firebaseapp.com",
  projectId: "strip-map-generator",
  storageBucket: "strip-map-generator.firebasestorage.app",
  messagingSenderId: "220901947382",
  appId: "1:220901947382:web:dd7054d7f13185dc2ab9d7",
  measurementId: "G-BWSDGS5HJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
