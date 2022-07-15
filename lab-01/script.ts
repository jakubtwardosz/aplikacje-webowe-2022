class App {
    inputArray: HTMLInputElement[];

    constructor() {
        let inputCounter = document.getElementById('input-counter');
        let container = document.getElementById('inputs');

        // Optional Parameters
        inputCounter?.addEventListener('change', (event) => {
            // Type Assertions
            const target = event.target as HTMLInputElement;
            let number = Number(target.value);
            this.createInputs(number, container);
        });       
    }

    createInputs(number, container) {

        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
            this.inputArray = [];
        }

        for (let index = 0; index < number.valueOf(); index++) {
            const input = document.createElement('input');
            input.type = 'number';
            container.appendChild(input);
            this.inputArray.push(input);
        }

        for (let i = 0; i < this.inputArray.length; i++) {
            this.inputArray[i].addEventListener('change', (event) => {
                this.computeData();
            });            
        }
    }

    computeData() {
        let sum = 0;
        this.inputArray.forEach((input) => (sum += Number(input.value)));
        let avg = sum / this.inputArray.length;

        let minMaxArr: number[] = [];
        this.inputArray.forEach(element => {
            minMaxArr.push(Number(element.value));
        });

        let min = Math.min(...minMaxArr);
        let max = Math.max(...minMaxArr);
        
        this.showData(sum, avg, min, max);
    }

    showData(sum, avg, min, max) {
        let sumInput = document.getElementById('sum') as HTMLInputElement;
        let avgInput = document.getElementById('avg') as HTMLInputElement;        
        let minInput = document.getElementById('min') as HTMLInputElement;
        let maxInput = document.getElementById('max') as HTMLInputElement;
        sumInput.textContent = sum;
        avgInput.textContent = avg;
        minInput.textContent = min;
        maxInput.textContent = max;
    }
}

let app = new App();




