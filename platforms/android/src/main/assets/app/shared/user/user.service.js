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
var core_1 = require("angular2/core");
var http_1 = require("angular2/http");
var config_1 = require("../config");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.login = function (user) {
        return this._http.get(config_1.Config.apiUrl + "oauth/v2/token?client_id=1_4li11e6wsm0woo8ws0s0c8s0oc00gwwoggwgc0wo88o0gkos08&client_secret=55zefc59r6o08cgk4okk80www4kkwwwk04gcw0s4wggkow0gc4&grant_type=password&username=" + user.username + "&password=" + user.password) /*
        .map(res => res.json())
        .map(data => {
         
    
          Config.token = data.Result.access_token;
        })*/;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBRTVDLHVCQUFxQixXQUFXLENBQUMsQ0FBQTtBQUNqQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFLL0I7SUFDRSxxQkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07SUFBRyxDQUFDO0lBRW5DLDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBRWQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNuQixlQUFNLENBQUMsTUFBTSxHQUFHLDhLQUE4SyxHQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsWUFBWSxHQUFDLElBQUksQ0FBQyxRQUFRLENBQ3hPLENBQUE7Ozs7OztZQU1HLENBQUM7SUFDUCxDQUFDO0lBZkg7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQWtCYixrQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksbUJBQVcsY0FpQnZCLENBQUEifQ==