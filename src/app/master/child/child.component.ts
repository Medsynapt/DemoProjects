import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() myInputVal: string; 


  @Output() myOutputVal =new EventEmitter<string>();

  myOutput

  
  
  constructor() { }

  ngOnInit(): void {

    this.myOutputVal.emit(this.myInputVal + ' from child' );
  }


}
