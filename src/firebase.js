import * as firebase from 'firebase';
import 'firebase/auth';
import "firebase/firestore";


firebase.initializeApp({
  apiKey: "AIzaSyDv8Wr5cp6z_FYcCBYypL3gvioc-bO0bs8",
  authDomain: "ct-g14-m.firebaseapp.com",
  databaseURL: "https://ct-g14-m.firebaseio.com",
  projectId: "ct-g14-m",
  storageBucket: "ct-g14-m.appspot.com",
  messagingSenderId: "671773754814",
  appId: "1:671773754814:web:c34ed82823ebfd51bce5ef",
  measurementId: "G-738ZP3G9MS"
})

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export {
	db,
	storage,
	auth
}

export default firebase;
