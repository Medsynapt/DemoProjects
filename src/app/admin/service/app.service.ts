import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  
  providedIn: 'root'
  
})
export class AppService {

  exclusive = new Subject<boolean>();

 // username  = new Subject<string>();
 
 username = new  BehaviorSubject('Vishal');

 
  constructor() { }

}
