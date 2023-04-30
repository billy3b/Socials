// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore, } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "<your api key>",
    authDomain: "socials-fa02a.firebaseapp.com",
    projectId: "socials-fa02a",
    storageBucket: "socials-fa02a.appspot.com",
    messagingSenderId: "93339116195",
    appId: "<your app id>",
    measurementId: "<your measurementId>"
  };

  //init firebase
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

export {db};

  
