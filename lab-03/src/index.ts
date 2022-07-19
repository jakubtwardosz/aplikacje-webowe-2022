import * as _ from 'lodash';
import { WeatherService } from './weatherService';

const weatherService = new WeatherService();

class Main {

  constructor() {
    let city = document.getElementById('city') as HTMLInputElement;
    let button = document.getElementById('form');

    weatherService.getData();

    button.addEventListener('submit', (event) => {
      event.preventDefault();
      if (city.value) {
        weatherService.displayData(city.value);
      }
    });
  }
}

new Main();