import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { request } from "http";
import { Observable } from "rxjs";



@Injectable({
    providedIn :'root'
})

export class HeaderInterceptor implements HttpInterceptor{


    // token: string ="5dadbb1d-03fc-11ed-baea-7640edfdd6b4";

    constructor(){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // if( request.method=="PUT"){
          
        //     return next.handle(this.addAuthenticationToken(request));
        // }
       
        return
        //  next.handle(this.addAuthenticationToken(request));
       
    }

    // addAuthenticationToken(request: HttpRequest<any> ){

    //     return request.clone ({
    //         setHeaders :{
    //                 Autherization: ` Basic ${this.token}`
    //         },

    //         body: { "data": "Modified"}

            
    //     })

    // }


}