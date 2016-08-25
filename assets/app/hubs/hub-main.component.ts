import {Component, OnInit} from '@angular/core';
import {Hub} from './hub';
import {HubService} from './hub.service';
import {HubMessage} from './hubmessage';
import {ErrorService} from '../errors/error.service';
import {AuthService} from '../auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'hub-main',
    templateUrl: 'hub-main.component.html',
})
export class HubMainComponent implements OnInit{
    // form: FormGroup;
    hubMessages: HubMessage[];
    private sub: Subscription;

    constructor(
        private _hubService: HubService,
        private _errorService: ErrorService,
        private _authService: AuthService,
        private _fbld: FormBuilder,
        private _router: Router,
        private route: ActivatedRoute
    ) { }


    onSubmit(form: any){        
        const message: HubMessage = new HubMessage(
            form.content, 
            this._authService.user.username, 
            this._hubService.hub.title);
        this._hubService.addHubMessage(message)
            .subscribe(
                data => {
                    data
                },
                error => this._errorService.handleError(error)
            );
    }

    ngOnInit(){
        this.sub = this.route
            .params
            .subscribe(params => {
                let title = params['title'];
                var obj = {
                    title: title
                }
            
                // this._hubService.getHubMessages(obj)
                // .subscribe(
                //     data => {
                //         this.hubMessages = data;
                //     },
                //     error => this._errorService.handleError(error)
                // );
        }); 
    }
    isLoggedIn(){
        // return this._authService.isLoggedIn();
    }
    goBack(): void {
        window.history.back();
    }
}