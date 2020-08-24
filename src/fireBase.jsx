import * as firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBBcNvmldXlgVyonRSrTvmkXpaE0xgQ1vI",
    authDomain: "fir-crudprac.firebaseapp.com",
    databaseURL: "https://fir-crudprac.firebaseio.com",
    projectId: "fir-crudprac",
    storageBucket: "fir-crudprac.appspot.com",
    messagingSenderId: "1025910253562",
    appId: "1:1025910253562:web:93ccc0df410d3c3affa643",
    measurementId: "G-NR4RDYT3MH"
  };
  // Initialize Firebase
  var firebaseDb = firebase.initializeApp(firebaseConfig);
  
  export default firebaseDb.database().ref() ;
