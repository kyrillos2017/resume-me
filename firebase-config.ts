import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDpJgMIX-dSigAFb-lzgQcF2t2AUFiCmKs",
    authDomain: "resume-kyrillos.firebaseapp.com",
    projectId: "resume-kyrillos",
    storageBucket: "resume-kyrillos.appspot.com",
    messagingSenderId: "463483720311",
    appId: "1:463483720311:web:91ede1c436e0fe4ed3ac72",
    measurementId: "G-HECQ72LC06"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;