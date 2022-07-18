export class WeatherView {
    constructor() {
    }
    displayWeather(city : Promise<string>){
        city.then((data : any) =>{
            console.log(data);
        });
    }
}