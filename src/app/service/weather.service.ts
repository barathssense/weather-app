import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { WeatherData } from "../model";

@Injectable({
    providedIn: 'root'
})
export class WeatherService{

    constructor(private http : HttpClient){}

    getWeather( id : string,cityName : string ,){
        return this.http.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=` +id + '&q='+ cityName);
    }
}