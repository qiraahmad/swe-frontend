import firebase from 'firebase'
import 'firebase/firestore'
require('dotenv').config
var firebaseConfig = {
  apiKey: process.env.API,
  authDomain: process.env.FireBase_AuthDomain,
  databaseURL: process.env.FireBase_DatabaseURL,
  projectId: "colthme",
  storageBucket: process.env.FireBase_StorageBucket,
  messagingSenderId: process.env.FireBase_MessagingSenderID,
  appId: process.env.FireBase_AppID,
  measurementId: process.env.FireBase_MeasurementId
  };
  // Initialize Firebase
  const firebaseapp=firebase.initializeApp(firebaseConfig);

  const FireStore =firebaseapp.firestore()

  FireStore.settings({timestampsInSnapshots:true})

  export default FireStore