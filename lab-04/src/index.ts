import * as _ from 'lodash';
import { FirebaseService } from './firebaseService';
import { NoteService } from './noteService';

const firebaseService = new FirebaseService();
const noteService = new NoteService();

class Main {
  constructor() {
    let title = document.getElementById('title') as HTMLInputElement;
    let content = document.getElementById('content') as HTMLInputElement;
    let color = document.getElementById('color') as HTMLInputElement;
    let form = document.getElementById('form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!title.value || !content.value || !color.value) {
        return alert("Complete all fields in the form");
      }
    });
  }
}

new Main();