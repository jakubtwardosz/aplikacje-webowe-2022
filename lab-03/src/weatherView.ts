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

        let container = document.getElementById('container');
        let ul = document.createElement('ul');
        ul.id = 'cities';
        container.appendChild(ul);

        if (container.contains(document.getElementById('cities'))) {
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
                <h2>${city}</h2>
                <div id="icon">
                    <img src="http://openweathermap.org/img/wn/${icon}@2x.png" width="100px" height="100px" alt="${weather}">
                    <span>${description}</span>
                </div>
                <table>
                    <tr>
                        <td>Feels like:</td>
                        <td>${feels_like}&deg;</td>
                    </tr>
                    <tr>
                        <td>Humidity:</td>
                        <td>${humidity}%</td>
                    </tr>
                    <tr>
                        <td>Pressure:</td>
                        <td>${pressure}hPa</td>
                    </tr>
                    <tr>
                        <td>Temp:</td>
                        <td>${temp}&deg;</td>
                    </tr>
                    <tr>
                        <td>Temp max:</td>
                        <td>${temp_max}&deg;</td>
                    </tr>
                    <tr>
                        <td>Temp min:</td>
                        <td>${temp_min}&deg;</td>
                    </tr>
                </table>
            `;
        }
    }
}


