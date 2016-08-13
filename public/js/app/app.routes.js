"use strict";
var router_1 = require('@angular/router');
// import {AppComponent} from './app.component';
var signup_component_1 = require('./auth/signup/signup.component');
var signin_component_1 = require('./auth/signin/signin.component');
var hub_list_component_1 = require('./hubs/hub-list.component');
var hub_form_component_1 = require('./hubs/hub-form.component');
var hub_update_component_1 = require('./hubs/hub-update.component');
var logout_component_1 = require('./auth/logout/logout.component');
var user_list_component_1 = require('./auth/admin/user-list.component');
var user_update_component_1 = require('./auth/admin/user-update.component');
var routes = [
    { path: '', component: hub_list_component_1.HubListComponent },
    { path: 'hub/create', component: hub_form_component_1.HubFormComponent },
    { path: 'hub/update', component: hub_update_component_1.HubUpdateComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent },
    { path: 'users', component: user_list_component_1.UserListComponent },
    { path: 'user/update', component: user_update_component_1.UserUpdateComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUEwQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTVELGdEQUFnRDtBQUNoRCxpQ0FBOEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUMvRCxpQ0FBOEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUMvRCxtQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUMzRCxtQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUMzRCxxQ0FBaUMsNkJBQTZCLENBQUMsQ0FBQTtBQUMvRCxpQ0FBOEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUMvRCxvQ0FBZ0Msa0NBQWtDLENBQUMsQ0FBQTtBQUNuRSxzQ0FBa0Msb0NBQW9DLENBQUMsQ0FBQTtBQUV2RSxJQUFNLE1BQU0sR0FBaUI7SUFDekIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxxQ0FBZ0IsRUFBQztJQUN2QyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHFDQUFnQixFQUFDO0lBQ2pELEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUseUNBQWtCLEVBQUM7SUFDbkQsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO0lBQzVDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztJQUM1QyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7SUFDNUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBQztJQUM3QyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFDO0NBQ3hELENBQUM7QUFFVywwQkFBa0IsR0FBRztJQUM5QixzQkFBYSxDQUFDLE1BQU0sQ0FBQztDQUN4QixDQUFDIiwiZmlsZSI6ImFwcC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Byb3ZpZGVSb3V0ZXIsIFJvdXRlckNvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLy8gaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSAnLi9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50JztcbmltcG9ydCB7U2lnbmluQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHtIdWJMaXN0Q29tcG9uZW50fSBmcm9tICcuL2h1YnMvaHViLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7SHViRm9ybUNvbXBvbmVudH0gZnJvbSAnLi9odWJzL2h1Yi1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQge0h1YlVwZGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9odWJzL2h1Yi11cGRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7TG9nb3V0Q29tcG9uZW50fSBmcm9tICcuL2F1dGgvbG9nb3V0L2xvZ291dC5jb21wb25lbnQnO1xuaW1wb3J0IHtVc2VyTGlzdENvbXBvbmVudH0gZnJvbSAnLi9hdXRoL2FkbWluL3VzZXItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtVc2VyVXBkYXRlQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvYWRtaW4vdXNlci11cGRhdGUuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXJDb25maWcgPSBbXG4gICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IEh1Ykxpc3RDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnaHViL2NyZWF0ZScsIGNvbXBvbmVudDogSHViRm9ybUNvbXBvbmVudH0sXG4gICAge3BhdGg6ICdodWIvdXBkYXRlJywgY29tcG9uZW50OiBIdWJVcGRhdGVDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnc2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnc2lnbmluJywgY29tcG9uZW50OiBTaWduaW5Db21wb25lbnR9LFxuICAgIHtwYXRoOiAnbG9nb3V0JywgY29tcG9uZW50OiBMb2dvdXRDb21wb25lbnR9LFxuICAgIHtwYXRoOiAndXNlcnMnLCBjb21wb25lbnQ6IFVzZXJMaXN0Q29tcG9uZW50fSxcbiAgICB7cGF0aDogJ3VzZXIvdXBkYXRlJywgY29tcG9uZW50OiBVc2VyVXBkYXRlQ29tcG9uZW50fVxuXTtcblxuZXhwb3J0IGNvbnN0IGFwcFJvdXRlclByb3ZpZGVycyA9IFtcbiAgICBwcm92aWRlUm91dGVyKHJvdXRlcylcbl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9