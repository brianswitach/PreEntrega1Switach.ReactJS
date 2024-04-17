// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importamos Firestore

// Configuración de Firebase para tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyCoNUhUJmlWzaMfasjUnDcBo56GNQd6JCQ",
  authDomain: "proyectofinaldb-2b8c2.firebaseapp.com",
  projectId: "proyectofinaldb-2b8c2",
  storageBucket: "proyectofinaldb-2b8c2.appspot.com",
  messagingSenderId: "49247458265",
  appId: "1:49247458265:web:7084f587c9e7af40417fc8",
  measurementId: "G-CSQZ23L85N"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore y exporta
const db = getFirestore(app);

export default db;
