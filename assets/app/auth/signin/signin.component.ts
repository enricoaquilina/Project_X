import {Component, OnInit} from '@angular/core';
import {FormBuilder, ControlGroup, Validators, Control} from '@angular/common';
import {User} from '../user';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {ErrorService} from '../../errors/error.service';
import {AppValidators} from '../../validators';
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'signin-component',
    templateUrl: 'signin.component.html',
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})

export class SigninComponent implements OnInit{
    myForm: ControlGroup;

    constructor(
        private _fb: FormBuilder, 
        private _authService: AuthService,
        private _router: Router,
        private _errorService: ErrorService
    ) { }

    onSubmit(){
        var user = new User(this.myForm.value.username, this.myForm.value.password);

        this._authService.signInUser(user)
            .subscribe(
                data => {
   	                this._authService.user = data.obj;
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this._authService.updateLoggedUser(user);

                    this._router.navigate(['/']);
                },
                error => this._errorService.handleError(error)
            );
    }

    ngOnInit(){
        this.myForm = this._fb.group({
            username: ['', Validators.compose([Validators.required])],
            password: ['', Validators.required],
        });
    }
}