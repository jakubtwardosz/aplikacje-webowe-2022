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
            this.inputArray[i].addEventListener('focus', function (event) {
                _this.displayLoading();
            });
            this.inputArray[i].addEventListener('blur', function (event) {
                _this.hideLoading();
            });
        }
    };
    App.prototype.displayLoading = function () {
        this.loaders = document.getElementsByClassName('loader');
        var results = document.getElementsByClassName('result');
        for (var i = 0; i < this.loaders.length; i++) {
            var loader = this.loaders[i];
            loader.style.display = 'block';
        }
        for (var i = 0; i < results.length; i++) {
            var result = results[i];
            result.style.display = 'none';
        }
    };
    App.prototype.hideLoading = function () {
        var loaders = document.getElementsByClassName('loader');
        var results = document.getElementsByClassName('result');
        for (var i = 0; i < loaders.length; i++) {
            var loader = loaders[i];
            loader.style.display = 'none';
        }
        for (var i = 0; i < results.length; i++) {
            var result = results[i];
            result.style.display = 'block';
        }
    };
    App.prototype.computeData = function () {
        var sum = 0;
        this.inputArray.forEach(function (input) { return (sum += Number(input.value)); });
        var avg = sum / this.inputArray.length;
        var minMaxArr = [];
        this.inputArray.forEach(function (element) {
            minMaxArr.push(Number(element.value));
        });
        var min = Math.min.apply(Math, minMaxArr);
        var max = Math.max.apply(Math, minMaxArr);
        this.showData(sum, avg, min, max);
    };
    App.prototype.showData = function (sum, avg, min, max) {
        var sumInput = document.getElementById('sum');
        var avgInput = document.getElementById('avg');
        var minInput = document.getElementById('min');
        var maxInput = document.getElementById('max');
        sumInput.textContent = sum;
        avgInput.textContent = avg;
        minInput.textContent = min;
        maxInput.textContent = max;
    };
    return App;
}());
var app = new App();
