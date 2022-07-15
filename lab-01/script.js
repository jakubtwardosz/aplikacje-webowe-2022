var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.sum = 0;
        var inputs = document.getElementById('inputs');
        var number;
        // Optional Parameters
        inputs === null || inputs === void 0 ? void 0 : inputs.addEventListener('change', function (event) {
            // Type Assertions
            var target = event.target;
            number = Number(target.value);
            _this.computeData(number);
            _this.showData(_this.sum);
        });
    }
    App.prototype.showData = function (sum) {
        var sumInput = document.getElementById('sum');
        sumInput.textContent = sum;
    };
    App.prototype.computeData = function (number) {
        return this.sum += number;
    };
    return App;
}());
var app = new App();
