import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()


function drawWeather(weather) {
	document.getElementById('weather').innerHTML = `
<div class="card">
	<img src="http://openweathermap.org/img/w/${weather.icon}.png"/>
	<div class="card-body">
		<h5 class="card-title words">${weather.main} - ${weather.temp}°</h5>
		<h5 class="card-title words">${weather.name}</h5>
	</div>
</div>
	`
}

export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(drawWeather)
	}
}
