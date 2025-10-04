// db.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { firebaseConfig } from './firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Save contact form data to Firestore
export async function saveContactToFirestore(name, email, message) {
  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      timestamp: new Date()
    });
    return true;
  } catch (err) {
    console.error("❌ Error saving contact: ", err);
    return false;
  }
}
