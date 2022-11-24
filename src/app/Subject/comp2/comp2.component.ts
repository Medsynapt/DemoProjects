import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/admin/service/app.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

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
