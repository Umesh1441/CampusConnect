//For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBbNZXfHDQFv3IvOhyjwWvXe4Jb3dnfRUc",
  authDomain: "campusconnect-e9c86.firebaseapp.com",
  projectId: "campusconnect-e9c86",
  storageBucket: "campusconnect-e9c86.appspot.com",
  messagingSenderId: "114195602991",
  appId: "1:114195602991:web:321942311e4fcfba1ab0da",
  measurementId: "G-VH6L5Q24NV"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};