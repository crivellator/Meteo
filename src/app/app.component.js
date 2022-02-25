"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(servizio) {
        this.servizio = servizio;
        this.userCity = "";
        this.nascosto = true;
    }
    AppComponent.prototype.ricerca = function () {
        var _this = this;
        var observableGrabbedData = function (x) {
            _this.servizio.prendiMeteo(x[0].lat, x[0].lon).subscribe({
                next: function (dato) {
                    _this.iconaURL = "http://openweathermap.org/img/wn/";
                    _this.citta = dato;
                    _this.iconaURL += selezioneIcona(_this.citta.weather[0].main);
                },
                error: function () { console.log("AIAIAI!"); },
                complete: function () {
                    console.log(_this.citta);
                    console.log(_this.iconaURL);
                    _this.nascosto = false;
                }
            });
        };
        this.servizio.prendiCitta(this.userCity).subscribe(observableGrabbedData);
        var selezioneIcona = function (meteo) {
            switch (meteo) {
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
                    return "50d.png";
            }
            return "";
        };
        // console.log("uno: ",this.citta);
    };
    AppComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
