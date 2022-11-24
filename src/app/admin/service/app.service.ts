import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  
  providedIn: 'root'
  
})
export class AppService {

  exclusive = new Subject<boolean>();

  username  = new Subject<string>();

  constructor() { }

}
