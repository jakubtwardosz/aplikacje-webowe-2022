class App {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;

        this.helloWorld();
    }

    helloWorld(){
        console.log("Hello world!");
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

let app = new App("world");