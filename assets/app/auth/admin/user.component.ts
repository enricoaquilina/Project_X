import {Component, Input} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {ErrorService} from '../../errors/error.service';

@Component({
    moduleId: module.id,
    selector: 'user-component',
    templateUrl: 'user.component.html'
})
export class UserComponent {
   @Input() user: User;
  
    constructor(
        private _userService: UserService,
        private _router: Router,
        private _errorService: ErrorService
    ) { }

    viewUserProfile(){
        // this._router.navigate(['/f/'+this.user.username]);
    }
    followUser(){

    }
    editUser(userToUpdate){
        this._userService.editUser(this.user);
    }
    deleteUser(){
        this._userService.deleteUser(this.user)
            .subscribe(
                data => this._router.navigate(['/']),
                error => this._errorService.handleError(error)
            );
    }
}