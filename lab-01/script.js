var App = /** @class */ (function () {
    function App(message) {
        this.greeting = message;
        this.helloWorld();
    }
    App.prototype.helloWorld = function () {
        console.log("Hello world!");
    };
    App.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return App;
}());
var app = new App("world");
