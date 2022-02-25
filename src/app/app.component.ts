import { Component } from '@angular/core';
import { MeteoService } from './meteo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private servizio: MeteoService) { }
  userCity: string = "";
  citta: any;
  nascosto: boolean = true;
  iconaURL: string | undefined;

  ricerca() {
    const observableGrabbedData = (x: any) => { // finalmente uso come cristocomanda gli observablesssss <3
      this.servizio.prendiMeteo(x[0].lat, x[0].lon).subscribe({
        next: (dato: any) => {
          this.iconaURL = "http://openweathermap.org/img/wn/";
          this.citta = dato;
          this.iconaURL += selezioneIcona(this.citta.weather[0].main);
        },
        error: () => { console.log("AIAIAI!"); },
        complete: () => { 
          console.log(this.citta);
          console.log(this.iconaURL);
          this.nascosto = false;
        }
      });
    };

    this.servizio.prendiCitta(this.userCity).subscribe(observableGrabbedData);

    const selezioneIcona = (meteo: string): string => {
      switch(meteo) {
        case "Clear":
          return "01d.png";
        case "Clouds":
          return "02d.png";
        case "Drizzle":
          return "09d.png";
        case "Rain":
          return "10d.png";
        case "Thunderstorm":
          return "11d.png";
        case "Snow":
          return "13d.png";
        case "Mist":
        case "Smoke":
        case "Dust": 
        case "Fog":
        case "Sand":
        case "Ash":
        case "Squall":
        case "Tornado":
          return "50d.png"
      }
      return "";
    }

    // console.log("uno: ",this.citta);
  }
}
