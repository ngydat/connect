"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var appSettings = require('application-settings');
var http_1 = require("@angular/http");
var ConfigService = (function () {
    function ConfigService(_http) {
        this._http = _http;
    }
    ConfigService.prototype.setHost = function (host) {
        appSettings.setString("host", host);
    };
    ConfigService.prototype.getHost = function () {
        return appSettings.getString("host");
    };
    ConfigService.prototype.setAccessToken = function (accessToken) {
        appSettings.setString("access_token", accessToken);
    };
    ConfigService.prototype.getAccessToken = function () {
        return appSettings.getString("access_token");
    };
    ConfigService.prototype.setRefreshToken = function (refreshToken) {
        appSettings.setString("refresh_token", refreshToken);
    };
    ConfigService.prototype.getRefreshToken = function () {
        return appSettings.getString("refresh_token");
    };
    ConfigService.prototype.setClientId = function (clientId) {
        appSettings.setString("client_id", clientId);
    };
    ConfigService.prototype.getClientId = function () {
        return appSettings.getString("client_id");
    };
    ConfigService.prototype.setClientSecret = function (clientSecret) {
        appSettings.setString("client_secret", clientSecret);
    };
    ConfigService.prototype.getClientSecret = function () {
        return appSettings.getString("client_secret");
    };
    ConfigService.prototype.remove = function (key) {
        appSettings.remove(key);
    };
    ConfigService.prototype.hasKey = function (key) {
        return appSettings.hasKey(key);
    };
    ConfigService.prototype.getClientIdAndSecretFromHost = function () {
        var host = this.getHost();
        var url = host + "/client/idsecret.json";
        return this._http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    ConfigService.prototype.clear = function () {
        appSettings.clear();
    };
    ConfigService.prototype.expire = function (expired) {
        appSettings.setBoolean("hasExpired", expired);
    };
    ConfigService.prototype.isExpired = function () {
        return appSettings.getBoolean("hasExpired");
    };
    ConfigService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLElBQU8sV0FBVyxXQUFXLHNCQUFzQixDQUFDLENBQUM7QUFDckQscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBSW5DO0lBR0MsdUJBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBQUUsQ0FBQztJQUdsQywrQkFBTyxHQUFQLFVBQVEsSUFBVztRQUNsQixXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsV0FBa0I7UUFDaEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRUQsdUNBQWUsR0FBZixVQUFnQixZQUFtQjtRQUNsQyxXQUFXLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQzlDLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksUUFBZTtRQUMxQixXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCx1Q0FBZSxHQUFmLFVBQWdCLFlBQW1CO1FBQ2xDLFdBQVcsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxHQUFVO1FBQ2hCLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxHQUFVO1FBQ2hCLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFHRCxvREFBNEIsR0FBNUI7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLHVCQUF1QixDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDeEIsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLE9BQWlCO1FBQ3ZCLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQ0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQTNFRjtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBOEViLG9CQUFDO0FBQUQsQ0FBQyxBQTdFRCxJQTZFQztBQTdFWSxxQkFBYSxnQkE2RXpCLENBQUEifQ==