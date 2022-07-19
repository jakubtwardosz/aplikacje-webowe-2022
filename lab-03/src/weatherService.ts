import { WeatherView } from './weatherView';

const weatherView = new WeatherView();

export class WeatherService {

    owApiKey = '51069f88456216e76d29bc1c50d8e00f';
    cities: string[] = [];

    constructor() {
        if(localStorage.getItem('cities')){
            this.cities = [...JSON.parse(localStorage.getItem('cities'))];
        }        
    }

    async getWeather(city: string): Promise<any> {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.owApiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    displayData(city: string) {
        if (this.cities.includes(city)) return;
        this.getWeather(city).then((data: any) => {
            if (data.cod == 200) {
                weatherView.displayWeather(data);
                this.saveData(city);
            }
            if (data.cod == 404) {
                alert('This place does not exist!');
            }
        });
    }

    saveData(city: string) {
        if (this.cities.includes(city)) return;
        this.cities.push(city);
        localStorage.setItem('cities', JSON.stringify(this.cities));
    }

    getData() {
        this.cities.forEach(city => this.getWeather(city).then((data: any) => {
            weatherView.displayWeather(data);
        })
        );
    }





}