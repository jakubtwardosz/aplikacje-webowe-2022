class App {

    constructor() {
        document.addEventListener("keypress", this.onKeyPress);  
    }

    onKeyPress(){
        console.log('Click');
    }
}

let app = new App();




