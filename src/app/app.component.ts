import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherService } from './service/weather.service';
import { WeatherData } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  city!: string | null;
  cityName!: string;
  countryFlagImageURL!: string;
  weatherIconURL!: string;
  temperature!: number;
  cloudDescription!: string;
  cloud!: number;
  humidity!: number;
  pressure!: number;
  constructor(private weatherSvc: WeatherService) {}

  ngOnInit(): void {
    this.city = 'coimbatore';
    this.getWeather();
  }

  getWeather() {
    if (!this.city) {
      return;
    }

    const id = '9505fd1df737e20152fbd78cdb289b6a';
    this.weatherSvc.getWeather(id, this.city).subscribe((res) => {
      if (res.cod == 200) {
        this.cityName = res.name;
        this.countryFlagImageURL =
          `https://flagsapi.com/` + res.sys.country + '/shiny/32.png';
        this.weatherIconURL = `http://openweathermap.org/img/wn/${res.weather[0].icon}@4x.png`;
        this.temperature = res.main.temp;
        this.cloudDescription = res.weather[0].description;
        this.cloud = res.clouds.all;
        this.humidity = res.main.humidity;
        this.pressure = res.main.pressure;
        this.city = null;
      }else{
        alert('Entered city not found');
        this.city = 'coimbatore';
        this.getWeather();
      }
      
    });
  }
}
