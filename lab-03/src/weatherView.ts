export class WeatherView {
    constructor() {
    }
    displayWeather(data: any) {
        let city = data.name;
        let description = data.weather[0].description;

        let feels_like = data.main.feels_like;
        let humidity = data.main.humidity;
        let pressure = data.main.pressure;
        let temp = Math.round(data.main.temp);
        let temp_max = Math.round(data.main.temp_max);
        let temp_min = Math.round(data.main.temp_min);
        let weather = data.weather[0].main;
        let icon;

        console.log(data);

        let ul = document.createElement('ul');
        ul.id = 'cities';
        document.body.appendChild(ul);

        if (document.body.contains(document.getElementById('cities'))) {
            let li = document.createElement('li');
            li.className = city;
            ul.appendChild(li);

            if (weather == 'Thunderstorm') {
                icon = data.weather[0].icon;
                li.className = 'thunderstorm';
            } else if (weather == ('Drizzle')) {
                icon = data.weather[0].icon;
                li.className = 'drizzle';
            } else if (weather == ('Rain')) {
                icon = data.weather[0].icon;
                li.className = 'rain';
            } else if (weather == ('Clear')) {
                icon = data.weather[0].icon;
                li.className = 'clear';
            } else if (weather == ('Clouds')) {
                icon = data.weather[0].icon;
                li.className = 'clouds';
            } else {
                icon = data.weather[0].icon;
                li.className = 'atmosphere';
            }             

            li.innerHTML = `
                <p>${city}</p>
                <img src="http://openweathermap.org/img/wn/${icon}@2x.png" width="50px" height="50px" alt="">
                <p>${description}</p>
                <p>${feels_like}&deg;</p>
                <p>${humidity}%</p>
                <p>${pressure}hPa</p>
                <p>${temp}&deg;</p>
                <p>${temp_max}&deg;</p>
                <p>${temp_min}&deg;</p>
                <p>${weather}</p>
            `;
        }
    }
}