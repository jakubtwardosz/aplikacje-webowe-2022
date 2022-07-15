var App = /** @class */ (function () {
    function App() {
        var _this = this;
        var inputs = document.getElementById('inputs');
        var number;
        // Optional Parameters
        inputs === null || inputs === void 0 ? void 0 : inputs.addEventListener('change', function (event) {
            // Type Assertions
            var target = event.target;
            number = Number(target.value);
            _this.computeData(number);
        });
    }
    App.prototype.computeData = function (number) {
        console.log(number);
    };
    return App;
}());
var app = new App();
