// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore, } from "firebase/firestore";
import { getStorage,} from "firebase/storage";


const firebaseConfig = {
    apiKey: "*****************************",
    authDomain: "*****************************",
    projectId: "*****************************",
    storageBucket: "*****************************",
    messagingSenderId: "*****************************",
    appId: "*****************************",
    measurementId: "*****************************"
  };

  //init firebase
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

const storage = getStorage();


export {db,storage};

  
