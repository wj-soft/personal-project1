import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public authService: AuthService) { }

  canActivate() {
    if (this.authService.afAuth.auth == null) {
    return false;
  } else {return true}
}
}
