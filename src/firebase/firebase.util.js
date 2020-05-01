import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB23ePsWj-EWaxqg3LAu_2gjlxKeVdT150",
  authDomain: "crwn-db-3c55d.firebaseapp.com",
  databaseURL: "https://crwn-db-3c55d.firebaseio.com",
  projectId: "crwn-db-3c55d",
  storageBucket: "crwn-db-3c55d.appspot.com",
  messagingSenderId: "622052191805",
  appId: "1:622052191805:web:a50a7ef0ed3113c01f0454"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if we didnt got a userAuth back from the promise
  if (!userAuth) return;

  //get the data on user from db (could be empty)
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //take a copy from the refrence
  const snapShot = await userRef.get();

  //updating the user collection on the db if it is empty
  //CRUD operetion need the REFRENCE!!!
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const creatAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        creatAt,
        ...additionalData
      });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
