import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  
  title = 'DemoProjects';


  constructor( private translateService: TranslateService){
    
    this.translateService.setDefaultLang("en-US");
    

  }


  ngOnInit(): void {

  }
}
