import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/admin/service/login.service';
import { AuthGuardService } from '../auth/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // req = req.clone ({
    //   setHeaders:{
    //     Authorization:' Bearer jsdjshdjshdshjsdh'
    //   }
    // })
    
   let authService =this.injector.get(AuthGuardService);
    let tokenRequest =req.clone({
      setHeaders:{
        Authorization:`Bearer ${authService.createToken()}`
      }
    })

    return next.handle(tokenRequest);

  }
}
  