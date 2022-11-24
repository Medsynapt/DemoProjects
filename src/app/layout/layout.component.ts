import { Component, OnInit } from '@angular/core';
import { AppService } from '../admin/service/app.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  exclusive: boolean ;

  constructor(private appService: AppService) { }

  ngOnInit(): void {

    this.appService.exclusive.subscribe(res =>
      {
        this.exclusive= res;
      })
  }

}
