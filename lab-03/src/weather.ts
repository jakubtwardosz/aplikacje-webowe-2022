export class Weather {

    owApiKey = '51069f88456216e76d29bc1c50d8e00f';

    constructor() {
        console.log('weather');
        console.log(this.getWeather('Kraków'));
    }

    async getWeather(city: string): Promise<any> {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.owApiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();        
        return data;
    }


}