import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private router: Router, private authService: AuthGuardService){  }
 
  canActivate() :boolean {

    if (!this.authService.gettoken()){
     
      alert("You dont have access!!! Please connect to Administrator ");
      
      this.router.navigateByUrl("/login");

    }
   
    return  this.authService.gettoken();
 
  }
   
 

}
  

