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
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this._http.post(config_1.Config.apiUrl + "oauth/v2/token", JSON.stringify({
            client_id: "1_4li11e6wsm0woo8ws0s0c8s0oc00gwwoggwgc0wo88o0gkos08",
            client_secret: "55zefc59r6o08cgk4okk80www4kkwwwk04gcw0s4wggkow0gc4",
            grant_type: "password",
            username: user.username,
            password: user.password,
        }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            // TODO: This shouldn’t be necessary
            data = JSON.parse(data);
            config_1.Config.token = data.Result.access_token;
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBRTVDLHVCQUFxQixXQUFXLENBQUMsQ0FBQTtBQUNqQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFLL0I7SUFDRSxxQkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07SUFBRyxDQUFDO0lBRW5DLDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ2QsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBRXBFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsZUFBTSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLFNBQVMsRUFBRyxzREFBc0Q7WUFDbEUsYUFBYSxFQUFHLG9EQUFvRDtZQUNwRSxVQUFVLEVBQUUsVUFBVTtZQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsRUFDRixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FDckI7YUFDQSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUCxvQ0FBb0M7WUFDcEMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFeEIsZUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUExQkg7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQTZCYixrQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1QlksbUJBQVcsY0E0QnZCLENBQUEifQ==