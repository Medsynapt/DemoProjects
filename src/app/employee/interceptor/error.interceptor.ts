import { Injectable } from '@angular/core';
import {catchError, map} from "rxjs/operators";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AppRoutingConstants } from 'src/app/constant';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    // console.log("Passed through the interceptor in request")
   
    return next.handle(request)
    .pipe(
            
        catchError((httpError: HttpErrorResponse) => {

          // let appObject = httpError.error;
          // if(appObject && appObject.error){
          //   alert("Api Error:- " + appObject.errorMsg )
          // }

          let errorMsg ='';
          if(httpError.error instanceof ErrorEvent){
            console.log("This is client side error");
            errorMsg=`Client Error: ${httpError.message}`;

          }
          else{ 
            console.log("This is server side error");
            errorMsg=` Server Error :-  ${httpError.message},`;
          }
          
          // if(!appObject || !appObject.hasError){
          //   alert(errorMsg);
          // }


         alert(errorMsg);
          return  throwError(errorMsg)
          })
    )
  }
}
