class App {

    constructor() {
        document.addEventListener('keypress', this.play);
    }

    play(event: KeyboardEvent) {
        switch (event.key) {
            case 'q':
                console.log(event.key);
                break;
            case 'w':
                console.log(event.key);
                break;
            case 'e':
                console.log(event.key);
                break;
            case 'r':
                console.log(event.key);
                break;
            case 't':
                console.log(event.key);
                break;
            case 'a':
                console.log(event.key);
                break;
            case 's':
                console.log(event.key);
                break;
            case 'd':
                console.log(event.key);
                break;
            case 'f':
                console.log(event.key);
                break;
        }
    }
}

let app = new App();




