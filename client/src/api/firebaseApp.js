import { initializeApp, analytics } from "firebase/app";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAD4FFtdLALNOAF5L_kCoeoBSCPzSK1SBE",
  authDomain: "collingwood-boatclub.firebaseapp.com",
  databaseURL: "https://collingwood-boatclub.firebaseio.com",
  projectId: "collingwood-boatclub",
  storageBucket: "collingwood-boatclub.appspot.com",
  messagingSenderId: "862390823793",
  appId: "1:862390823793:web:731ec35fd760ac298d24d0",
  measurementId: "G-Z3LYYX288B"
};
// Initialize Firebase

export default initializeApp(firebaseConfig);
// analytics();