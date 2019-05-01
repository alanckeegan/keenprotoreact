import firebase from 'firebase';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCatcD7wVOsa7YbLBL0ZK_oEXQzD3RNWPQ",
  authDomain: "keenproto.firebaseapp.com",
  databaseURL: "https://keenproto.firebaseio.com",
  projectId: "keenproto",
  storageBucket: "keenproto.appspot.com",
  messagingSenderId: "168947065611"
};

firebase.initializeApp(config);

export default firebase;
