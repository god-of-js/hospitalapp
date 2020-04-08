import 'firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyCTsaCquAsRM8KTalpkdX3Uwi4mEMqtudg",
    authDomain: "sozo-healthyme-backend.firebaseapp.com",
    databaseURL: "https://sozo-healthyme-backend.firebaseio.com",
    projectId: "sozo-healthyme-backend",
    storageBucket: "sozo-healthyme-backend.appspot.com",
    messagingSenderId: "168558388333",
    appId: "1:168558388333:web:2c58a74b8d5655919e8b64",
    measurementId: "G-M6ZJK7QXTT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var database = firebase.database()
  var auth = firebase.auth()
  export {
      database,
      auth
  }