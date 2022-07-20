import * as _ from 'lodash';
import { FirebaseService } from './firebaseService';
import { Note } from "./note";
import { NoteService } from './noteService';

const firebaseService = new FirebaseService();
const noteService = new NoteService();


class Main {
  constructor() {
    const re = /[0-9A-Fa-f]{6}/g;
    let title = document.getElementById('title') as HTMLInputElement;
    let content = document.getElementById('content') as HTMLInputElement;
    let color = document.getElementById('color') as HTMLInputElement;
    let form = document.getElementById('form');

    noteService.getNotes();
    
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!re.test(color.value)){
        return alert("Color must be hexadecimal");
      }
      if (!title.value || !content.value || !color.value) {
        return alert("Complete all fields in the form");
      }
      noteService.addNote(new Note(title.value, content.value,color.value));
    });
  }
}

new Main();