/// <reference path="../../typings.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var error_service_1 = require('./errors/error.service');
var auth_service_1 = require('./auth/auth.service');
var hub_service_1 = require('./hubs/hub.service');
var user_service_1 = require('./auth/user.service');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    error_service_1.ErrorService, hub_service_1.HubService,
    http_1.HTTP_PROVIDERS, auth_service_1.AuthService,
    user_service_1.UserService,
    router_1.ROUTER_DIRECTIVES, app_routes_1.appRouterProviders,
    forms_1.disableDeprecatedForms(), forms_1.provideForms(),
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
])
    .catch(function (err) { return console.error(err); });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDOztBQUUzQyx5Q0FBd0IsbUNBQW1DLENBQUMsQ0FBQTtBQUM1RCw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QywyQkFBaUMsY0FBYyxDQUFDLENBQUE7QUFDaEQsOEJBQTJCLHdCQUF3QixDQUFDLENBQUE7QUFDcEQsNkJBQTBCLHFCQUFxQixDQUFDLENBQUE7QUFDaEQsNEJBQXlCLG9CQUFvQixDQUFDLENBQUE7QUFDOUMsNkJBQTBCLHFCQUFxQixDQUFDLENBQUE7QUFDaEQscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBQzdDLHFCQUFzQixlQUFlLENBQUMsQ0FBQTtBQUN0Qyx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRCxzQkFBbUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNwRSx1QkFBcUQsaUJBQWlCLENBQUMsQ0FBQTtBQUV2RSxvQ0FBUyxDQUFDLDRCQUFZLEVBQUU7SUFDcEIsNEJBQVksRUFBRSx3QkFBVTtJQUN4QixxQkFBYyxFQUFFLDBCQUFXO0lBQzNCLDBCQUFXO0lBQ1gsMEJBQWlCLEVBQUUsK0JBQWtCO0lBQ3JDLDhCQUFzQixFQUFFLEVBQUUsb0JBQVksRUFBRTtJQUN4QyxjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUMsNkJBQW9CLEVBQUMsQ0FBQztDQUM3RCxDQUFDO0tBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy5kLnRzXCIgLz5cblxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7YXBwUm91dGVyUHJvdmlkZXJzfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gJy4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQge0h1YlNlcnZpY2V9IGZyb20gJy4vaHVicy9odWIuc2VydmljZSc7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuL2F1dGgvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtwcm92aWRlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge2Rpc2FibGVEZXByZWNhdGVkRm9ybXMsIHByb3ZpZGVGb3Jtc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xuICAgIEVycm9yU2VydmljZSwgSHViU2VydmljZSwgXG4gICAgSFRUUF9QUk9WSURFUlMsIEF1dGhTZXJ2aWNlLFxuICAgIFVzZXJTZXJ2aWNlLFxuICAgIFJPVVRFUl9ESVJFQ1RJVkVTLCBhcHBSb3V0ZXJQcm92aWRlcnMsXG4gICAgZGlzYWJsZURlcHJlY2F0ZWRGb3JtcygpLCBwcm92aWRlRm9ybXMoKSxcbiAgICBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczpIYXNoTG9jYXRpb25TdHJhdGVneX0pXG5dKVxuLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnIpKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
