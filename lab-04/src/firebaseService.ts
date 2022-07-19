import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { firebaseConfig } from "./firebaseConfig";
import { Note } from './note';
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";

export class FirebaseService {

    app = initializeApp(firebaseConfig);
    db = getFirestore(this.app);


    // https://firebase.google.com/docs/firestore/manage-data/add-data?hl=en&authuser=0
    async addNote(note: Note) {
        // Add a new document in collection "cities"
        await setDoc(doc(this.db, "notes", note.title), {
            name: note.title,
            content: note.content,
            color: note.color
        });
    }

    async getNotes() {
        const querySnapshot = await getDocs(collection(this.db, "notes"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        });
    }








}
