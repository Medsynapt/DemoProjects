import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public serverPath = 'http://localhost:9292/api/Employee/GetLoginDetails';

  constructor(private http: HttpClient) { }


  // getLoginData() {
  //   console.log(this.serverPath)
  //   return this.http.get<any>(this.serverPath);


  // }

  public validateUser(loginUserName: string, loginPassword: string): Observable<any> {



    let params = new HttpParams();
    params = params.set('loginUserName', loginUserName);
    params = params.set('loginPassword', loginPassword);


    //console.log(params)
    // return this.http.post<any>('/login',params);

    return this.http.get<any>(this.serverPath, { params })
      .pipe(map(data => {
       // console.log(data)
        return data;
      }));



  }


}
