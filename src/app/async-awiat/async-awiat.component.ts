import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-async-awiat',
  templateUrl: './async-awiat.component.html',
  styleUrls: ['./async-awiat.component.scss']
})
export class AsyncAwiatComponent implements OnInit {

  
  private apiURL = "http://localhost:9292/api/Employee/GetEmployee";
  public message: string = "Uninitialized";
  public response;


  constructor(private httpClient: HttpClient) { }


  async fetchData() {
    this.message = "Fetching..";
    this.response = "";
    this.response = await this.httpClient
      .get<any>(this.apiURL)
      .pipe(delay(1000))
      .toPromise();
    this.message = "Fetched";
  }


  ngOnInit(): void {
  }

}
