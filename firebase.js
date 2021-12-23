// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzm8c_6vYzk9PAsHslUa2s7lf8cMBc5Lg",
  authDomain: "shop-mobile-c85f2.firebaseapp.com",
  databaseURL: "https://shop-mobile-c85f2-default-rtdb.firebaseio.com",
  projectId: "shop-mobile-c85f2",
  storageBucket: "shop-mobile-c85f2.appspot.com",
  messagingSenderId: "690745010612",
  appId: "1:690745010612:web:9293d29e35f6984f46eae1",
};

// Initialize Firebase
if (firebase.app.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();
export { auth };
