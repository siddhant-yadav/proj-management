

import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = 
{

    apiKey: "AIzaSyDK7p1651JD4Qnc0pVgIpaPwwJ6akmnDXI",
    authDomain: "proj-manage.firebaseapp.com",
    projectId: "proj-manage",
    storageBucket: "proj-manage.appspot.com",
    messagingSenderId: "552692474128",
    appId: "1:552692474128:web:907bfd23ff0705883f8595",
    measurementId: "G-BSKB13Z2RD"

};
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
firebase.firestore().settings({timestampInSnapshots : true})

export default firebase;

