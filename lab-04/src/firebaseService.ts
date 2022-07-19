import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { firebaseConfig } from "./firebaseConfig";
import { Note } from './note';
import { doc, setDoc } from "firebase/firestore";

export class FirebaseService {

    app = initializeApp(firebaseConfig);
    db = getFirestore(this.app);

    async addNote(note: Note) {
        // Add a new document in collection "cities"
        await setDoc(doc(this.db, "notes", note.title), {
            name: note.title,
            content: note.content,
            color: note.color
        });
    }

}