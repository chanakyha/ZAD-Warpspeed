import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyA5VdmAJScWTxL51yhcSLispiWkfg1ByO0",
  authDomain: "zad-warpspeed.firebaseapp.com",
  projectId: "zad-warpspeed",
  storageBucket: "zad-warpspeed.appspot.com",
  messagingSenderId: "1006053891042",
  appId: "1:1006053891042:web:318e41983cd7688d22b7bb",
});

const db = getFirestore();

export { app, db, collection, getDocs, getDoc, doc };
