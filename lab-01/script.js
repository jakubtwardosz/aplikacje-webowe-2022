var App = /** @class */ (function () {
    function App() {
        var _this = this;
        var inputCounter = document.getElementById('input-counter');
        var container = document.getElementById('inputs');
        // Optional Parameters
        inputCounter === null || inputCounter === void 0 ? void 0 : inputCounter.addEventListener('change', function (event) {
            // Type Assertions
            var target = event.target;
            var number = Number(target.value);
            _this.createInputs(number, container);
        });
    }
    App.prototype.createInputs = function (number, container) {
        var _this = this;
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
            this.inputArray = [];
        }
        for (var index = 0; index < number.valueOf(); index++) {
            var input = document.createElement('input');
            input.type = 'number';
            container.appendChild(input);
            this.inputArray.push(input);
        }
        for (var i = 0; i < this.inputArray.length; i++) {
            this.inputArray[i].addEventListener('change', function (event) {
                _this.computeData();
            });
        }
    };
    App.prototype.computeData = function () {
        var sum = 0;
        this.inputArray.forEach(function (input) { return (sum += Number(input.value)); });
        var avg = sum / this.inputArray.length;
        this.showData(sum, avg);
    };
    App.prototype.showData = function (sum, avg) {
        var sumInput = document.getElementById('sum');
        var avgInput = document.getElementById('avg');
        sumInput.textContent = sum;
        avgInput.textContent = avg;
    };
    return App;
}());
var app = new App();
