import { Directive, ElementRef,  } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective  {

  constructor( private el : ElementRef) {
    
    
    this.el.nativeElement.style.backgroundColor ='#e3f2fd';
   
    
  
   } 


}
