import * as _ from 'lodash';
import { Weather } from './weather';

const weather = new Weather();

class Main {
  constructor() {
    let city = document.getElementById('city') as HTMLInputElement;
    let button = document.getElementById('button');    
    button.addEventListener('click', () => {
      if(city.value){
        console.log(weather.getWeather(city.value));
      }
    });



    
  }
}

new Main();