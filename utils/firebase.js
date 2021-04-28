import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD26ff35g_FRRVuZ2jFViyFWFcmAhMYw_k",
    authDomain: "emprendamos-aabce.firebaseapp.com",
    projectId: "emprendamos-aabce",
    storageBucket: "emprendamos-aabce.appspot.com",
    messagingSenderId: "311607297858",
    appId: "1:311607297858:web:bbbcf26f0ed7ee63a22adb"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)