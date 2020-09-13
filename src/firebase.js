import firebase from 'firebase';
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBE9JrgwgP3uCw-q2l35s9vzbn6dVirFfY",
    authDomain: "todo-with-reactjs.firebaseapp.com",
    databaseURL: "https://todo-with-reactjs.firebaseio.com",
    projectId: "todo-with-reactjs",
    storageBucket: "todo-with-reactjs.appspot.com",
    messagingSenderId: "357862636666",
    appId: "1:357862636666:web:856c02a5769196ab1e0fc3",
    measurementId: "G-JKNHH1TKGV"
  });

  const db = firebaseApp.firestore();

  export default db;