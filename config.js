import { firebase } from '@firebase/app'
require('@firebase/firestore')

   var firebaseConfig = {
        apiKey: "AIzaSyDaLuxvcjk07qkdcKXqpDKnjVIffaaoDDg",
        authDomain: "barterapp-ad7d1.firebaseapp.com",
        projectId: "barterapp-ad7d1",
        storageBucket: "barterapp-ad7d1.appspot.com",
        messagingSenderId: "557037713784",
        appId: "1:557037713784:web:d22678b39191109e72f08d"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   export default firebase.firestore();