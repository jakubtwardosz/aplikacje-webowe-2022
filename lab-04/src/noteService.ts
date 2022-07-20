import { FirebaseService } from "./firebaseService";
import { Note } from "./note";

const firebaseService = new FirebaseService();

export class NoteService {

    notes: Note[] = [];
    deleteButton: HTMLInputElement;
    editButton: HTMLInputElement;

    constructor() {

    }

    getNotes() {
        firebaseService.getNotes();
    }

    addNote(note: Note) {
        this.notes.push(note);
        firebaseService.addNote(note);
    }

    deleteNote(id: String) {
        console.log(id);
    }

    editNote(id: String) {
        console.log(id);
    }
}
