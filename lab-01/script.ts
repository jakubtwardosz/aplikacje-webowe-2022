class App {

    sum: number = 0;

    constructor() {
        let inputs = document.getElementById('inputs');        
        let number;       

        // Optional Parameters
        inputs?.addEventListener('change', (event) => {
            // Type Assertions
            const target = event.target as HTMLInputElement;
            number = Number(target.value);
            this.computeData(number);
            this.showData(this.sum);
        });
    }
    showData(sum) {
        let sumInput = document.getElementById('sum') as HTMLInputElement;
        sumInput.textContent = sum;
    }

    computeData(number) {
        return this.sum += number;
    }

    
}

let app = new App();




