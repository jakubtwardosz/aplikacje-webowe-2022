export class Note {
    
    title : string;
    content : string;
    color : string;
    id : string;

    constructor(title : string, content : string, color : string, id?: string) {
        this.title = title;
        this.content = content;
        this.color = color;
        this.id = id;
    }

    create(){
        let container = document.getElementById('container');
        let div = document.createElement('div');
        if (this.id) {
            div.id = this.id;
        }
        div.className = 'note';
        div.style.backgroundColor = this.color;        
        container.appendChild(div);

        div.innerHTML = `
            <h2>${this.title}</h2>
            <p>${this.content}</p>
        `;

    }
}














