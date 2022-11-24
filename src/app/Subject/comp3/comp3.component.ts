import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/admin/service/app.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  userName: string ='Vishal'

  constructor( private appService: AppService) { 

    this.appService.username.subscribe(res =>
      this.userName= res 
      )
  }

  onChange(uname){
    console.log(uname.value)
    this.appService.username.next(uname.value);
  }

  ngOnInit(): void {
  }

}
