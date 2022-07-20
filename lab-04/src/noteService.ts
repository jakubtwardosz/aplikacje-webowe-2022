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

    deleteNote(id: string) {
        firebaseService.deleteNote(id);
    }

    editNote(id: string) {
        firebaseService.editNote(id);
    }
}
