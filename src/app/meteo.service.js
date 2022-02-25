"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MeteoService = void 0;
var core_1 = require("@angular/core");
var environmentTest_1 = require("src/environments/environmentTest");
var MeteoService = /** @class */ (function () {
    function MeteoService(http) {
        this.http = http;
        this.API_key = environmentTest_1.environment.chiaveSegreta;
        this.localtown = "http://api.openweathermap.org/geo/1.0/direct?q=";
    }
    MeteoService.prototype.prendiCitta = function (citta) {
        return this.http.get(this.localtown + citta + "&appid=".concat(this.API_key));
    };
    MeteoService.prototype.prendiMeteo = function (lat, lon) {
        return this.http.get("http://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&units=metric&appid=").concat(this.API_key));
    };
    MeteoService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], MeteoService);
    return MeteoService;
}());
exports.MeteoService = MeteoService;
