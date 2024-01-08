import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService {

  private sourceData = new BehaviorSubject<any>(null);
  $reactiveArray = this.sourceData.asObservable();

  constructor() { }

  updateArrayReactive(array: any) {    
    this.sourceData.next(array);
  }
}
