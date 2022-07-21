import { divide } from "lodash";

export class Note {
    title: string;
    content: string;
    color: string;
    id?: string;
    isEdited = false;

    constructor(title: string, content: string, color: string, id?: string) {
        this.title = title;
        this.content = content;
        this.color = color;
        this.id = id;
        this.isEdited = false;
    }

    create() {
        let container = document.getElementById('container');
        let div = document.createElement('div');
        div.id = String(this.id);

        if (this.isEdited == false) {

            //div.id
            div.className = 'note';
            div.style.backgroundColor = this.color;
            container.appendChild(div);

            div.innerHTML = `
                <h2>${this.title}</h2>
                <p>${this.content}</p>
                <button type="button" onclick="firebaseService.deleteNote('${this.id}')" type="button">Delete</button>
                <button type="button" onclick="firebaseService.editNote('${this.id}')" type="button">Edit</button>
            `;
        }
    }

    
}













