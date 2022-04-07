import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  admindata:any;
  clientdata:any;
  freelancerdata:any;
  constructor(private authService: UsersService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     this.admindata = JSON.parse(localStorage.getItem('admindata')||'{}');
      this.clientdata = JSON.parse(localStorage.getItem('clientdata')||'{}');
      this.freelancerdata = JSON.parse(localStorage.getItem('freelancerdata')||'{}');
    if(this.admindata !=null || this.clientdata !=null|| this.freelancerdata!=null )
     // if (this.authService.connecte===true)
      return true;
      else
      this.router.navigate(['/login ']);
      return false;
  }
  
}
