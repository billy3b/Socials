// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore, } from "firebase/firestore";
import { getStorage,} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAJ1aNGx9pkA7CaLo8nXAT0Kn4Vc6K_SPU",
    authDomain: "socials-fa02a.firebaseapp.com",
    projectId: "socials-fa02a",
    storageBucket: "socials-fa02a.appspot.com",
    messagingSenderId: "93339116195",
    appId: "1:93339116195:web:f768e4d54e1512cb129516",
    measurementId: "G-E6N1BQ8CZJ"
  };

  //init firebase
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

const storage = getStorage();


export {db,storage};

  
