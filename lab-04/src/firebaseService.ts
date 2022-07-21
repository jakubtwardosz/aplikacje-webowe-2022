import { initializeApp } from "firebase/app"
import { getFirestore, QuerySnapshot } from "firebase/firestore"
import { firebaseConfig } from "./firebaseConfig";
import { Note } from './note';
import { addDoc, deleteDoc, doc, collection, getDocs, getDoc, updateDoc, onSnapshot } from "firebase/firestore";

export class FirebaseService {

    app = initializeApp(firebaseConfig);
    db = getFirestore(this.app);

    // https://firebase.google.com/docs/firestore/manage-data/add-data?hl=en&authuser=0
    async addNote(note: Note) {
        await addDoc(collection(this.db, "notes"), {
            title: note.title,
            content: note.content,
            color: note.color,
            isEdited: note.isEdited
        });
    }

    async getNotes() {
        const querySnapshot = await getDocs(collection(this.db, "notes"));
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            let note = new Note(data.title, data.content, data.color, doc.id);
            note.create();
        });
    }

    async deleteNote(id : string){
        await deleteDoc(doc(this.db, "notes", id));
        let note = document.getElementById(id);
        note.remove();       
    }
    

    async editNote(id: string) {

        let updateNote = document.getElementById(id) as HTMLDivElement;

        updateNote.innerHTML += `
            <form id="updateForm-${id}">
                <label for="title">Title:</label>
                <input type="text" id="updateTitle" name="title">
                <label for="content">Content:</label>
                <textarea id="updateContent" name="content"></textarea>
                <label for="color">Color(HEX):</label>
                <input type="text" id="updateColor" name="color">
                <input type="submit" value="Update">
            </form>
        `;
        let updateForm = document.getElementById(`updateForm-${id}`);
        let updateTitle = document.getElementById('updateTitle') as HTMLInputElement;
        let updateContent = document.getElementById('updateContent') as HTMLInputElement;
        let updateColor = document.getElementById('updateColor') as HTMLInputElement;    

        updateForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.updateNote(updateTitle.value, updateContent.value,updateColor.value, id);
        });
    }

    async updateNote(title: string, content: string, color: string, id : string){
        const note = doc(this.db, "notes", id);
        await updateDoc(note, {
            title: title,
            content: content,
            color: color
        });      
        let updateForm = document.getElementById(`updateForm-`+id) as HTMLFormElement;
        updateForm.remove();

        let updateNote = document.getElementById(id) as HTMLDivElement;
    } 
}
