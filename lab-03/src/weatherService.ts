export class WeatherService {

    owApiKey = '51069f88456216e76d29bc1c50d8e00f';
    cities: string[] = [];

    constructor() {
        
    }

    async getWeather(city: string): Promise<any> {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.owApiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();        
        return data;

    }

    saveData(city : string){
        if(this.cities.includes(city)) return;
        this.cities.push(city);
        localStorage.setItem('cities', JSON.stringify(this.cities));
    }





}