class App {
    
    constructor() {
        let inputs = document.getElementById('inputs');
        let number;
            // Optional Parameters
            inputs?.addEventListener('change', (event) => {                
                // Type Assertions
                const target = event.target as HTMLInputElement;
                number = Number(target.value);
                
                this.computeData(number);
            });
    }

    computeData(number){
        console.log(number);
    }    
}

let app = new App();




