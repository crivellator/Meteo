import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { environment } from 'src/environments/environmentTest';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  // private API_key: string = environment.chiaveSegreta;
  private API_key: string ="934e7168d719ebdd40bc114d14bcfa6b";
  private localtown = `https://api.openweathermap.org/geo/1.0/direct?q=`;

  constructor(private http: HttpClient) { }

  prendiCitta(citta: string) {
    return this.http.get(this.localtown + citta + `&appid=${this.API_key}`);
  }

  prendiMeteo(lat: number, lon: number) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.API_key}`);
  }
}
