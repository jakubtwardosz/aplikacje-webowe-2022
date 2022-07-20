//import { FirebaseService } from "./firebaseService";
import { Note } from "./note";

//const firebaseService = new FirebaseService();

export class NoteService {

    allNotes: Note[];
    deleteButton: HTMLInputElement;
    editButton: HTMLInputElement;
    

    constructor() {

    }

    getNotes() {        
            return Object.keys(localStorage)
                .filter((key) => key.startsWith('note-'))
                .map((key) => JSON.parse(localStorage[key])).map((note: Note) => {
                    new Note(note.title,note.content,note.color,note.id).create()
                });
    }

    addNote(note: Note) {
        localStorage.setItem(`note-${note.id}`, JSON.stringify(note));
    }

    deleteNote(id: string) {
        localStorage.removeItem(`note-${id}`);
    }

    editNote(id: string) {
        localStorage.getItem(`note-${id}`);

        let note = this.allNotes.find((note: Note) => String(note.id) === id);
        console.log(note);
        if (note) {
            note.isEdited = true;
            this.getNotes();
        }
     
    }
}
