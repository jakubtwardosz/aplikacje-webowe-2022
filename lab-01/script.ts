class App {
    inputArray: HTMLInputElement[];
    loaders : HTMLCollection;

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
            this.inputArray[i].addEventListener('focus', (event) => {
                this.displayLoading();
            });
            this.inputArray[i].addEventListener('blur', (event) => {
                this.hideLoading();
            });
        }
    }

    displayLoading(){
        this.loaders = document.getElementsByClassName('loader');
        let results = document.getElementsByClassName('result');

        for (let i = 0; i < this.loaders.length; i++) {
            let loader = this.loaders[i] as HTMLElement;
            loader.style.display = 'block';
        }

        for (let i = 0; i < results.length; i++) {
            let result = results[i] as HTMLElement;
            result.style.display = 'none';
        }  
    }

    hideLoading(){     
        let loaders = document.getElementsByClassName('loader');        
        let results = document.getElementsByClassName('result');

        for (let i = 0; i < loaders.length; i++) {
            let loader = loaders[i] as HTMLElement;
            loader.style.display = 'none';
        }

        for (let i = 0; i < results.length; i++) {
            let result = results[i] as HTMLElement;
            result.style.display = 'block';
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
        let sumInput = document.getElementById('sum') as HTMLElement;
        let avgInput = document.getElementById('avg') as HTMLElement;        
        let minInput = document.getElementById('min') as HTMLElement;
        let maxInput = document.getElementById('max') as HTMLElement;
        sumInput.textContent = sum;
        avgInput.textContent = avg;
        minInput.textContent = min;
        maxInput.textContent = max;
    }
}

let app = new App();




