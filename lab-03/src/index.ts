import * as _ from 'lodash';
import { WeatherService } from './weatherService';
import { WeatherView } from './weatherView';

const weatherService = new WeatherService();
const weatherView = new WeatherView();

class Main {
  cities: string[] = [];

  constructor() {
    let city = document.getElementById('city') as HTMLInputElement;
    let button = document.getElementById('form');    
    button.addEventListener('submit', (event) => {
      event.preventDefault();
      if(this.cities.includes(city.value)) return;
        this.cities.push(city.value);
        console.log(this.cities);
        localStorage.setItem('cities', JSON.stringify(this.cities));
      if(city.value){
        weatherView.displayWeather(weatherService.getWeather(city.value))
      }
    });    
  }
}

new Main();