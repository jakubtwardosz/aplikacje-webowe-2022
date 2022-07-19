import { Note } from "./note";

export class NoteService {

    notes: Note[] = [];

    constructor() {
    }

    addNote(note : Note){
        this.notes.push(note);
        console.log(this.notes);
        localStorage.setItem('notes', JSON.stringify(this.notes)); 
    }
}