import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'es-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @Input() count = 0;
  @Output() updateCount = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.count++;
    this.updateCount.emit(this.count);
  }

  remove() {
    this.count--;
    this.updateCount.emit(this.count);
  }

}
