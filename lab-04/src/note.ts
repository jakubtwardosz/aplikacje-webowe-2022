import { divide } from "lodash";

export class Note {
    title: string;
    content: string;
    color: string;
    id: number;
    isEdited = false;

    constructor(title: string, content: string, color: string, id: number) {
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
                <button onclick="noteService.deleteNote('${this.id}')" type="button">Delete</button>
                <button onclick="noteService.editNote('${this.id}')" type="button">Edit</button>
            `;
        } else {
            div.innerHTML = `<form id="form">
                                <label for="title">Title:</label>
                                <input type="text" id="title" name="title">
                                <label for="content">Content:</label>
                                <textarea id="content" name="content"></textarea>
                                <label for="color">Color(HEX):</label>
                                <input type="text" id="color" name="color">
                                <input type="submit" value="Submit">
                            </form>`;


        }
    }

    
}













