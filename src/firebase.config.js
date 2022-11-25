import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function startFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyBpAVgtrPHZkxI4K_EHMr1itzcTQPBp-qY",
    authDomain: "rasp-controller-app.firebaseapp.com",
    projectId: "rasp-controller-app",
    storageBucket: "rasp-controller-app.appspot.com",
    messagingSenderId: "721218034483",
    appId: "1:721218034483:web:d703c2d1715a44ebf7bc46",
    measurementId: "G-EK50VF63VK",
    databaseURL:
      "https://rasp-controller-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default startFirebase;
