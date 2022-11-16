import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  myTextVal: string;

  valueFromChild :string;


  constructor() { }
                                                                                                                                                                            
  ngOnInit(): void {
  }

  valueEmitted(el){
    this.valueFromChild = el;
  }

  sendValue(){




  }

}
