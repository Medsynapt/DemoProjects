import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  gettoken(){
    return !!localStorage.getItem("SessionUser");
  }

  createToken(){
    return localStorage.getItem("token");
  }
  
}
