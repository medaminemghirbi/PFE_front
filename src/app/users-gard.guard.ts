import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { UsersService } from './services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersGardGuard implements CanActivate {
  constructor(private userchecklogin: UsersService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.userchecklogin.connecte===true)
      return true;
      else
      this.router.navigate(['/home']);  
      return true;
  }
  
}
