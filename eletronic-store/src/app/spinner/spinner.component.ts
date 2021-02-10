import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';
@Component({
  selector: 'es-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  spinnerEnable: boolean;
  spinner: Observable<any>;  
  constructor(private spinnerService: SpinnerService) { 
    this.spinner = this.spinnerService.spinner$.subscribe(spinner => this.spinnerEnable = spinner);
  }

  ngOnInit(): void {
  }

}
