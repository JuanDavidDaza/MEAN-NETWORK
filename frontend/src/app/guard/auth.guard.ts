import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _userService: UserService, private _router: Router) {}
  //el objetivo de los guard es proteger las URL
  canActivate(): boolean {
    // si no hay un token entonces
    if (!this._userService.loggedIn()) {
      this._router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
