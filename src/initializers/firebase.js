import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC_uJDAF7bPQtSr6GD9AFocujVA_9NqNOY",
    authDomain: "albums-react-59274.firebaseapp.com",
    databaseURL: "https://albums-react-59274.firebaseio.com",
    projectId: "albums-react-59274",
    storageBucket: "albums-react-59274.appspot.com",
    messagingSenderId: "645420674845"
  };

firebase.initializeApp(config);

export default firebase;