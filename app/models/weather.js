export default class Weather {
  constructor(data) {
    this.temp = Math.floor(data.main.temp - 273.15)
    this.main = data.weather[0].main
    this.icon = data.weather[0].icon
    this.name = data.name
  }
}