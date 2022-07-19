import { FirebaseService } from "./firebaseService";
import { Note } from "./note";

const firebaseService = new FirebaseService();

export class NoteService {

    notes: Note[] = [];

    constructor() {
    }

    addNote(note : Note){
        this.notes.push(note);
        console.log(this.notes);
        localStorage.setItem('notes', JSON.stringify(this.notes));
        firebaseService.addNote(note); 
    }

    getNotes(){
        firebaseService.getNotes();
    }
}