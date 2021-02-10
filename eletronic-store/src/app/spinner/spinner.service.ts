import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  spinner$: any;
  spinner: boolean = false;

  constructor() {
    this.spinner$ = new BehaviorSubject(this.spinner)
   }

  setSpinnerEnable(enable: boolean) {
    this.spinner$.next(enable);
  }
}
