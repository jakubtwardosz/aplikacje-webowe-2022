import * as _ from 'lodash';
import { WeatherService } from './weatherService';
import { WeatherView } from './weatherView';

const weatherService = new WeatherService();
const weatherView = new WeatherView();

class Main {

  constructor() {
    let city = document.getElementById('city') as HTMLInputElement;
    let button = document.getElementById('form');
    button.addEventListener('submit', (event) => {
      event.preventDefault();
      if (city.value) {
        weatherService.getWeather(city.value).then((data: any) => {
          if (data.cod == 200) {
            weatherView.displayWeather();
            weatherService.saveData(city.value);
          }
          if (data.cod == 404)
          {
            console.log('Not found!');
          }
          
        });
      }


    });
  }
}

new Main();